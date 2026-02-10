import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";


export class ProdutoController implements ProdutoRepository {

    
    private listaProdutos: Array<Produto> = new Array<Produto>();

    public id: number = 0;

    listarTodos(): void {
        this.listaProdutos.forEach(produto => produto.visualizar());
    }

    procurarPorId(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto !== null) {
            buscaProduto.visualizar();
        } else {
            console.log(`\nO Produto com ID ${id} não foi encontrado!`);
        }
    }

    cadastrar(produto: Produto): void {
        produto.id = this.gerarId();
        this.listaProdutos.push(produto);
        console.log("\nProduto cadastrado com sucesso!");
    }

    
    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id);

        if (buscaProduto !== null) {
            let indice = this.listaProdutos.indexOf(buscaProduto);
            this.listaProdutos[indice] = produto;
            console.log("\nO Produto foi atualizado com sucesso!");
        } else {
            console.log("\nProduto não encontrado para atualizar!");
        }
    }

   
    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto !== null) {
            let indice = this.listaProdutos.indexOf(buscaProduto);
            this.listaProdutos.splice(indice, 1);
            console.log("\nO Produto foi deletado com sucesso!");
        } else {
            console.log("\nO Produto não foi encontrado para deletar!");
        }
    }

    public gerarId(): number {
        return ++this.id;
    }

    public buscarNoArray(id: number): Produto | null {
        for (let produto of this.listaProdutos) {
            if (produto.id === id) {
                return produto;
            }
        }
        return null;
    }
}