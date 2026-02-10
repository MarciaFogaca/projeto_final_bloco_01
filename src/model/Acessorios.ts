import { Produto } from "./Produto";

export class Acessorio extends Produto {
  private _fabricante: string;
  private _garantia: number;

  constructor(
    id: number,
    nome: string,
    tipo: number,
    preco: number,
    quantidade: number,
    fabricante: string,
    garantia: number,
  ) {
    super(id, nome, tipo, preco, quantidade);
    this._fabricante = fabricante;
    this._garantia = garantia;
  }

  public get fabricante() {
    return this._fabricante;
  }
  public set fabricante(fabricante: string) {
    this._fabricante = fabricante;
  }

  public get garantia() {
    return this._garantia;
  }
  public set garantia(garantia: number) {
    this._garantia = garantia;
  }

  public visualizar(): void {
    super.visualizar();
    console.log(`Fabricante: ${this._fabricante}`);
    console.log(`Garantia: ${this._garantia} meses`);
  }
}
