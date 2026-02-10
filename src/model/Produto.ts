export abstract class Produto {
    constructor(
        private _id: number,
        private _nome: string,
        private _tipo: number,
        private _preco: number
    ) {}

    
    public get id() { return this._id; }
    public set id(id: number) { this._id = id; }

   
    public get nome() { return this._nome; }
    public set nome(nome: string) { this._nome = nome; }

    public get tipo() { return this._tipo; }
    public set tipo(tipo: number) { this._tipo = tipo; }

    public get preco() { return this._preco; }
    public set preco(preco: number) { this._preco = preco; }
    

    public visualizar(): void {
        let tipoStr: string = (this._tipo === 1) ? "Ferramenta" : "Peça";
        console.log("\n*****************************************************");
        console.log("Dados do Produto");
        console.log("*****************************************************");
        console.log(`ID: ${this._id} | Nome: ${this._nome} | Tipo: ${tipoStr} | Preço: R$ ${this._preco.toFixed(2)}`);
    }
}