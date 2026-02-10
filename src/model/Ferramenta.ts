import { Produto } from "./Produto";

export class Ferramenta extends Produto {
    constructor(id: number, nome: string, tipo: number, preco: number, private _fabricante: string) {
        super(id, nome, tipo, preco);
    }

    public visualizar(): void {
        super.visualizar(); 
        console.log(`Fabricante: ${this._fabricante}`);
    }
}