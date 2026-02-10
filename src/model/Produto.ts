export abstract class Produto {
    constructor(
        private _id: number,
        private _nome: string,
        private _tipo: number,
        private _preco: number
    ) {}

    
    public get id() { return this._id; }
    public set id(id: number) { this._id = id; }
    
    

    public visualizar(): void {
        console.log("\n*****************************************************");
        console.log("Dados do Produto");
        console.log("*****************************************************");
        console.log(`ID: ${this._id} | Nome: ${this._nome} | Preço: R$ ${this._preco.toFixed(2)}`);
    }
}