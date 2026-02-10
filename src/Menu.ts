import { Colors } from "./util/Colors";
import { ProdutoController } from "./controller/ProdutoController";
import { Ferramenta } from "./model/Ferramenta";
import { Input } from "./util/Input";
import { Peça } from "./model/Peça";
import { Cliente } from "./model/Cliente";
import { OrdemServico } from "./model/OrdemServico";
import { Acessorio } from "./model/Acessorios";
import { carregarEstoque } from "./util/Estoque";

let produtos = new ProdutoController();

export function main() {
  let opcao: number;

  carregarEstoque(produtos);

  while (true) {
    console.log(
      Colors.fg.bluestrong +
        "╔══════════════════════════════════════════════════╗",
    );
    console.log("║           Global Repair E-Commerce               ║");
    console.log("║          *- Excelência em Atender! -*            ║");
    console.log("╠══════════════════════════════════════════════════╣");
    console.log("║   [1] Cadastrar Produto (Novo)                   ║");
    console.log("║   [2] Listar Todos os Produtos                   ║");
    console.log("║   [3] Consultar Produto por ID                   ║");
    console.log("║   [4] Atualizar Dados do Produto                 ║");
    console.log("║   [5] Apagar Produto                             ║");
    console.log("║   [6] Carrinho de Compras                        ║");
    console.log("║   [7] Listar Clientes                            ║");
    console.log("║   [0] Sair                                       ║");
    console.log(
      "╚══════════════════════════════════════════════════╝" + Colors.reset,
    );

    console.log("Entre com a opcao desejada:");
    opcao = Input.questionInt("");

    if (opcao === 0) {
      console.log(
        Colors.fg.greenstrong,
        "\nGlobal Repair - Excelência em Atender!",
      );
      sobre();
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        criarProduto();
        break;
      case 2:
        listarTodoProdutos();
        break;
      case 3:
        buscarProdutoporId();
        break;
      case 4:
        atualizarProduto();
        break;
      case 5:
        deletarProduto();
        break;
      case 6:
        cadastrarOS();
        break;
      case 7:
        listarClientes();
        break;
      default:
        console.log(Colors.fg.whitestrong, "\nOpção Inválida!\n", Colors.reset);
    }

    keyPress();
  }
}

function criarProduto(): void {
  console.log("\nOpção Selecionada: Cadastrar Novo Item no Estoque");
  let nome = Input.question("Digite o Nome do Produto/Acessorio: ");
  let preco = Input.questionFloat("Digite o Preco: ");
  let quantidade = Input.questionInt("Digite a Quantidade em Estoque: ");

  let tipo =
    Input.keyInSelect(
      ["Ferramenta", "Peça", "Acessório"],
      "Selecione o Tipo: ",
      { cancel: false },
    ) + 1;

  if (tipo === 1) {
    let fabricante = Input.question("Digite o Fabricante da Ferramenta: ");
    produtos.cadastrar(
      new Ferramenta(
        produtos.gerarId(),
        nome,
        tipo,
        preco,
        quantidade,
        fabricante,
      ),
    );
  } else if (tipo === 2) {
    let garantia = Input.questionInt("Digite o tempo de Garantia (meses): ");
    produtos.cadastrar(
      new Peça(produtos.gerarId(), nome, tipo, preco, quantidade, garantia),
    );
  } else if (tipo === 3) {
    let fabricante = Input.question("Digite o Fabricante do Acessorio: ");
    let garantia = Input.questionInt(
      "Digite a Garantia do Acessorio (meses): ",
    );
    produtos.cadastrar(
      new Acessorio(
        produtos.gerarId(),
        nome,
        tipo,
        preco,
        quantidade,
        fabricante,
        garantia,
      ),
    );
  }
}

function listarTodoProdutos(): void {
  console.log("\n--- VITRINE GLOBAL REPAIR ---");
  produtos.listarTodos();
}

function buscarProdutoporId(): void {
  let id = Input.questionInt("\nDigite o ID do Produto: ");
  produtos.procurarPorId(id);
}

function atualizarProduto(): void {
  console.log("\nOpção Selecionada: Atualizar Dados");
  let id = Input.questionInt("Digite o ID do item: ");
  let busca = produtos.buscarNoArray(id);

  if (busca !== null) {
    let nome = Input.question("Novo Nome: ");
    let preco = Input.questionFloat("Novo Preco: ");
    let quantidade = Input.questionInt("Nova Quantidade: ");
    let tipo = busca.tipo;

    if (tipo === 1) {
      let fab = Input.question("Novo Fabricante: ");
      produtos.atualizar(
        new Ferramenta(id, nome, tipo, preco, quantidade, fab),
      );
    } else if (tipo === 2) {
      let gar = Input.questionInt("Nova Garantia: ");
      produtos.atualizar(new Peça(id, nome, tipo, preco, quantidade, gar));
    } else {
      let fab = Input.question("Novo Fabricante: ");
      let gar = Input.questionInt("Nova Garantia: ");
      produtos.atualizar(
        new Acessorio(id, nome, tipo, preco, quantidade, fab, gar),
      );
    }
  } else {
    console.log("\nItem não encontrado!");
  }
}

function deletarProduto(): void {
  let id = Input.questionInt("\nDigite o ID para apagar: ");
  produtos.deletar(id);
}

function cadastrarOS(): void {
  console.log(
    Colors.fg.greenstrong + "\n--- CARRINHO DE COMPRAS ---" + Colors.reset,
  );

  let idVenda = produtos.gerarIdOS();
  let cliente = new Cliente(1, "Marcia Fogaca", "(21) 98888-7777");
  let descricao = "Compra realizada via E-Commerce";
  let novaVenda = new OrdemServico(idVenda, cliente, descricao);

  let continuar = true;
  while (continuar) {
    let idProd = Input.questionInt(
      "\nDigite o ID do Device ou Acessorio (0 para finalizar): ",
    );

    if (idProd === 0) break;

    let item = produtos.buscarNoArray(idProd);

    if (item) {
      novaVenda.adicionarItem(item);
      console.log(Colors.fg.green, ` Adicionado: ${item.nome}`, Colors.reset);
    } else {
      console.log(Colors.fg.red, "ID não encontrado!", Colors.reset);
    }

    let resp = Input.question("Deseja adicionar mais um item? (S/N): ");
    if (resp.toUpperCase() !== "S") continuar = false;
  }

  console.log(
    Colors.fg.bluestrong + "\n===== COMPROVANTE DE COMPRA =====" + Colors.reset,
  );
  novaVenda.visualizar();
  console.log(
    Colors.fg.greenstrong +
      "\nGlobal Repair E-commerce!" +
      "\nExcelência em Atender!" +
      Colors.reset,
  );
}

function listarClientes(): void {
  console.log(
    Colors.fg.bluestrong + "\n--- CLIENTES ATIVOS ---" + Colors.reset,
  );
  console.log("ID: 1 | Nome: Marcia Fogaca | Tel: (21) 98888-7777");
}

function sobre(): void {
  console.log("\n******************************************************");
  console.log("Projeto Desenvolvido por: Márcia Telles Fogaça");
  console.log("marciatellesfogaca@gmail.com");
  console.log("https://github.com/MarciaFogaca");
  console.log("*******************************************************");
}

function keyPress(): void {
  console.log(Colors.reset, "\nPressione enter para continuar...");
  Input.prompt();
}

main();
