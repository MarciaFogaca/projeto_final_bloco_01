import { Produto } from "../model/Produto";

export class ProdutoController {
  private listaProdutos: Array<Produto> = new Array<Produto>();
  public id: number = 0;
  public idOS: number = 5000;

  cadastrar(produto: Produto): void {
    this.listaProdutos.push(produto);
    console.log("\nProduto cadastrado com sucesso!");
  }

  gerarId(): number {
    return ++this.id;
  }

  gerarIdOS(): number {
    return ++this.idOS;
  }

  buscarNoArray(id: number): Produto | null {
    for (let produto of this.listaProdutos) {
      if (produto.id === id) {
        return produto;
      }
    }
    return null;
  }

  listarTodos(): void {
    for (let produto of this.listaProdutos) {
      produto.visualizar();
    }
  }

  procurarPorId(id: number): void {
    let produto = this.buscarNoArray(id);
    if (produto != null) produto.visualizar();
    else console.log("\nProduto não encontrado!");
  }

  atualizar(produto: Produto): void {
    let busca = this.buscarNoArray(produto.id);
    if (busca != null) {
      this.listaProdutos[this.listaProdutos.indexOf(busca)] = produto;
      console.log("\nO Produto foi atualizado!");
    } else console.log("\nProduto não encontrado!");
  }

  deletar(id: number): void {
    let busca = this.buscarNoArray(id);
    if (busca != null) {
      this.listaProdutos.splice(this.listaProdutos.indexOf(busca), 1);
      console.log("\nO Produto foi apagado!");
    } else console.log("\nProduto não encontrado!");
  }
}
