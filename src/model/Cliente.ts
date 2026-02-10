
export class Cliente {
    private _id: number;
    private _nome: string;
    private _contato: string;

    constructor(id: number, nome: string, contato: string) {
        this._id = id;
        this._nome = nome;
        this._contato = contato;
    }

    public get id() { return this._id; }
    public get nome() { return this._nome; }
    public get contato() { return this._contato; }

    public visualizar(): void {
        console.log("\n*****************************************************");
        console.log("Dados do Cliente");
        console.log("*****************************************************");
        console.log(`ID: ${this._id}`);
        console.log(`Nome: ${this._nome}`);
        console.log(`Contato: ${this._contato}`);
    }
}