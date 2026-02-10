import { Cliente } from "./Cliente";
import { Produto } from "./Produto";

export class OrdemServico {
  private _idOS: number;
  private _cliente: Cliente;
  private _descricao: string;
  private _reparo: string = "";
  private _itens: Produto[] = [];
  constructor(idOS: number, cliente: Cliente, descricao: string) {
    this._idOS = idOS;
    this._cliente = cliente;
    this._descricao = descricao;
  }

  public get reparo(): string {
    return this._reparo;
  }
  public set reparo(valor: string) {
    this._reparo = valor;
  }

  public adicionarItem(produto: Produto): void {
    this._itens.push(produto);
  }

  public visualizar(): void {
    let total = 0;

    console.log("=====================================================");
    console.log(
      `               ORDEM DE SERVIÇO: #${this._idOS}               `,
    );
    console.log("=====================================================");
    console.log(`Cliente: ${this._cliente.nome}`);
    console.log(`Problema: ${this._descricao}`);
    console.log(`Reparo Realizado: ${this._reparo}`);
    console.log("-----------------------------------------------------");
    console.log("ITENS DA OS (CARRINHO):");

    this._itens.forEach((item) => {
      console.log(`- ${item.nome} (R$ ${item.preco.toFixed(2)})`);
      total += item.preco;
    });

    console.log("-----------------------------------------------------");
    console.log(`TOTAL DA OS: R$ ${total.toFixed(2)}`);
    console.log("=====================================================");
  }
}
