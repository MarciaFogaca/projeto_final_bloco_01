import { Cliente } from "./Cliente";
import { Produto } from "./Produto";

export class OrdemServico {
    private _idOS: number;
    private _cliente: Cliente;
    private _produto: Produto;

    constructor(idOS: number, cliente: Cliente, produto: Produto) {
        this._idOS = idOS;
        this._cliente = cliente;
        this._produto = produto;
    }

    public visualizar(): void {
        console.log("\n=====================================================");
        console.log(`ORDEM DE SERVIÇO Nº: ${this._idOS}`);
        console.log("=====================================================");
        
        this._cliente.visualizar();
        this._produto.visualizar();
    }
}