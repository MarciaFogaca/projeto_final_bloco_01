import { Produto } from "./Produto";

export class Peça extends Produto {
  private _garantia: number;

  constructor(
    id: number,
    nome: string,
    tipo: number,
    preco: number,
    quantidade: number,
    garantia: number,
  ) {
    super(id, nome, tipo, preco, quantidade);
    this._garantia = garantia;
  }
}
