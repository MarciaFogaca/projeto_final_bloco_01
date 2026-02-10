import * as iconv from 'iconv-lite';
 

export class Input {
   
    /** Controla se já detectou o encoding (detecta apenas uma vez) */
    private static configurado = false;
   
    /** Armazena o encoding do console (cp850, cp1252 ou utf8) */
    private static encodingConsole: string = 'cp850';
   
 
    private static detectarEncoding(): void {
       
        // Se já detectou antes, não faz novamente
        if (this.configurado) return;
       
        // Só precisa detectar no Windows (Linux/Mac já usam UTF-8)
        if (process.platform === 'win32') {
            try {
                // Executa o comando 'chcp' no Windows
                const { execSync } = require('child_process');
                const resultado = execSync('chcp', { encoding: 'utf8' }).toString();
               
                // Extrai o número do code page (ex: "850" de "Página de código ativa: 850")
                const match = resultado.match(/\d+/);
               
                if (match) {
                    const codePage = match[0];
                   
                    // Define o encoding baseado no code page
                    this.encodingConsole = codePage === '65001' ? 'utf8' :
                                          codePage === '850' ? 'cp850' :
                                          codePage === '1252' ? 'cp1252' : `cp${codePage}`;
                }
            } catch (error) {
                // Se falhar, assume CP850 (padrão mais comum no Brasil)
                this.encodingConsole = 'cp850';
            }
        } else {
            // Linux/Mac sempre usam UTF-8
            this.encodingConsole = 'utf8';
        }
       
        // Marca como já configurado
        this.configurado = true;
    }
   
 
    static question(pergunta: string): string {
 
        // Detecta o encoding (só na primeira vez)
        this.detectarEncoding();
       
        const readlinesync = require('readline-sync');
       
        // Se o console NÃO está em UTF-8, precisa converter
        if (this.encodingConsole !== 'utf8') {
 
            // Lê a resposta como 'binary' (bytes brutos em CP850)
            const respostaRaw = readlinesync.question(pergunta, {
                encoding: 'binary'
            });
           
            // Converte os bytes de CP850 → UTF-8
            const buffer = Buffer.from(respostaRaw, 'binary');
            return iconv.decode(buffer, this.encodingConsole);
 
        } else {
            // Console já está em UTF-8, lê direto
            return readlinesync.question(pergunta);
        }
    }
 
 
    static questionInt(pergunta: string): number {
        const readlinesync = require('readline-sync');
 
        // Usa o método nativo do readline-sync que já faz todas as validações
        return readlinesync.questionInt(pergunta, {
            limitMessage: "Digite um numero inteiro"
        });
    }
 
   
    static questionFloat(pergunta: string): number {
        const readlinesync = require('readline-sync');
 
        // Usa o método nativo do readline-sync que já faz todas as validações
        return readlinesync.questionFloat(pergunta, {
            limitMessage: "Digite um numero decimal"
        });
    }
 
  
    static keyInSelect(opcoes: string[], pergunta: string, config?: any): number {
        const readlinesync = require('readline-sync');
 
        return readlinesync.keyInSelect(opcoes, pergunta, config);
    }
 
   
    static prompt(): void {
        const readlinesync = require('readline-sync');
 
        readlinesync.prompt();
    }
   
  
    static getEncoding(): string {
        this.detectarEncoding();
 
        return this.encodingConsole;
    }
}