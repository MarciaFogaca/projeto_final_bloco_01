import { Input } from './util/Input';

import { Colors } from './util/Colors';

import { formatarMoeda } from './util/Currency';



export function main() { 
    let opcao: number;

    // Criando objetos de teste
  

    while (true)
    {    console.clear()
        console.log(Colors.fg.bluestrong + 
                    "╔══════════════════════════════════════════════════╗");
        console.log("║             Global Repair ECommerce              ║");
        console.log("║           *- Excelência em Atender! -*           ║");
        console.log("╠══════════════════════════════════════════════════╣");
        console.log("║   [1] Cadastrar Produto                          ║");
        console.log("║   [2] Listar Todos os Produtos                   ║");
        console.log("║   [3] Consultar Produto por ID                   ║");
        console.log("║   [4] Atualizar Dados do Produto                 ║");
        console.log("║   [5] Apagar Produto                             ║");
        console.log("║   [0] Sair                                       ║");
        console.log("╚══════════════════════════════════════════════════╝" + Colors.reset);
      
        console.log("Entre com a opcao desejada:");
        opcao = Input.questionInt("");

        if (opcao === 0) {
            console.log(Colors.fg.greenstrong, "\nExcelência em Atender!");
            sobre();
            process.exit(0);
        }
        
      switch (opcao) {
            case 1: criarProduto(); break;
            case 2: listarTodoProdutos(); break;
            case 3: buscarProdutoporId(); break;
            case 4: atualizarProduto(); break;
            case 5: deletarProduto(); break;
            case 6: procurarPorProduto(); break;
            default:
        console.log(Colors.fg.whitestrong, "\nOpção Inválida!\n", 
        Colors.reset);
        
    } 
             
        keyPress();
    } 
} 
function criarProduto(): void {
    console.log("\nOpção Selecionada: Cadastrar Produto");
}

function listarTodoProdutos(): void {
    console.log("\nOpção Selecionada: Listar todos os Produtos");

}
    function buscarProdutoporId(): void {
    console.log("\nOpção Selecionada: Consultar Produto por ID");

}
function atualizarProduto(): void {
    console.log("\nOpção Selecionada: Atualizar Dados do Produto");
}

function deletarProduto(): void {
    console.log("\nOpção Selecionada: Apagar Produto");
}

function procurarPorProduto(): void {
    console.log("\nOpção Selecionada: Procurar Produto por Nome");
}
        

function sobre(): void {
    console.log("\n******************************************************");
    console.log("Projeto Desenvolvido por: Márcia Telles Fogaça");
    console.log("marciatellesfogaca@gmail.com");
    console.log("\nhttps://github.com/MarciaFogaca");
    console.log("*******************************************************");
}

function keyPress(): void {
    console.log(Colors.reset, "\nPressione enter para continuar...");
    Input.prompt();
}

main();