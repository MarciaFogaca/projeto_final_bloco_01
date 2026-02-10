import { Cliente } from "../model/Cliente";

export class ClienteController {
  private listaClientes: Cliente[] = [];

  registrar(cliente: Cliente): void {
    this.listaClientes.push(cliente);
  }

  listarTodos(): void {
    console.log("\n--- Lista de Clientes ---");
    this.listaClientes.forEach((cliente) => cliente.visualizar());
  }

  buscarPorId(id: number): Cliente | null {
    for (let cliente of this.listaClientes) {
      if (cliente.id === id) return cliente;
    }
    return null;
  }
}
