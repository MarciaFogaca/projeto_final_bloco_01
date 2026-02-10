import { Produto } from "./Produto";

export class Peca extends Produto {
    constructor(id: number, nome: string, tipo: number, preco: number, private _garantia: number) {
        super(id, nome, tipo, preco);
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Garantia: ${this._garantia} meses`);
    }
}