export abstract class Produto {
  constructor(
    private _id: number,
    private _nome: string,
    private _tipo: number,
    private _preco: number,
    private _quantidade: number,
  ) {}

  public get id() {
    return this._id;
  }
  public get nome() {
    return this._nome;
  }
  public get preco() {
    return this._preco;
  }
  public get tipo() {
    return this._tipo;
  }
  public get quantidade() {
    return this._quantidade;
  }

  public set id(id: number) {
    this._id = id;
  }
  public set nome(nome: string) {
    this._nome = nome;
  }
  public set preco(preco: number) {
    this._preco = preco;
  }
  public set quantidade(quantidade: number) {
    this._quantidade = quantidade;
  }

  public visualizar(): void {
    let tipoStr = "";
    switch (this._tipo) {
      case 1:
        tipoStr = "Ferramenta";
        break;
      case 2:
        tipoStr = "Peça";
        break;
      case 3:
        tipoStr = "Acessório";
        break;
    }

    console.log("\n*****************************************************");
    console.log("                DADOS DO PRODUTO                     ");
    console.log("*****************************************************");
    console.log(`ID: ${this._id}`);
    console.log(`Nome: ${this._nome}`);
    console.log(`Tipo: ${tipoStr}`);
    console.log(`Preço: R$ ${this._preco.toFixed(2)}`);
    console.log(`Estoque: ${this._quantidade} unidades`);
  }
}
