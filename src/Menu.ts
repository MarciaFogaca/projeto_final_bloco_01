import { Colors } from "./util/Colors";
import { ProdutoController } from "./controller/ProdutoController";
import { Ferramenta } from "./model/Ferramenta";
import { Input } from "./util/Input";
import { Peça } from "./model/Peça"; 

let produtos = new ProdutoController();

export function main() {
    let opcao: number;

   
    produtos.cadastrar(new Ferramenta(0, "Chave Pentalope - torque", 1, 350.00, "Wera"));
    produtos.cadastrar(new Peça(0, "Topcase", 2, 1250.00, 12)); 

    while (true) {
       
        console.log(Colors.fg.bluestrong +
                    "╔══════════════════════════════════════════════════╗");
        console.log("║             Global Repair ECommerce              ║");
        console.log("║            *- Excelência em Atender! -*          ║");
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
            default:
                console.log(Colors.fg.whitestrong, "\nOpção Inválida!\n", Colors.reset);
        }

        keyPress();
    }
}

function criarProduto(): void {
    console.log("\nOpção Selecionada: Cadastrar Produto");

    let nome = Input.question("Digite o Nome do Produto: ");
    let preco = Input.questionFloat("Digite o Preco: ");
    let tipo = Input.keyInSelect(["Ferramenta", "Peça"], "Selecione o Tipo do Produto: ", { cancel: false }) + 1;

    if (tipo === 1) {
        let fabricante = Input.question("Digite o Fabricante da Ferramenta: ");
        produtos.cadastrar(new Ferramenta(0, nome, tipo, preco, fabricante));
    } else {
        let garantia = Input.questionInt("Digite o tempo de Garantia (meses): ");
        produtos.cadastrar(new Peça(0, nome, tipo, preco, garantia)); 
    }
}

function listarTodoProdutos(): void {
    console.log("\nOpção Selecionada: Listar todos os Produtos");
    produtos.listarTodos();
}

function buscarProdutoporId(): void {
    console.log("\nOpção Selecionada: Consultar Produto por ID");
    let id = Input.questionInt("Digite o ID do Produto: ");
    produtos.procurarPorId(id);
}

function atualizarProduto(): void {
    console.log("\nOpção Selecionada: Atualizar Dados do Produto");
    let id = Input.questionInt("Digite o ID do produto que deseja atualizar: ");
    
    let produtoExistente = produtos.buscarNoArray(id);

    if (produtoExistente !== null) {
        let nome = Input.question("Digite o Novo Nome: ");
        let preco = Input.questionFloat("Digite o Novo Preco: ");
        let tipo = produtoExistente.tipo; 

        if (tipo === 1) {
            let fabricante = Input.question("Digite o Novo Fabricante: ");
            produtos.atualizar(new Ferramenta(id, nome, tipo, preco, fabricante));
        } else {
            let garantia = Input.questionInt("Digite a Nova Garantia (meses): ");
            produtos.atualizar(new Peça(id, nome, tipo, preco, garantia)); 
        }
    } else {
        console.log(Colors.fg.red, `\nO Produto com ID ${id} não foi encontrado!`, Colors.reset);
    }
}

function deletarProduto(): void {
    console.log("\nOpção Selecionada: Apagar Produto");
    let id = Input.questionInt("Digite o ID do produto que deseja apagar: ");
    produtos.deletar(id);
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