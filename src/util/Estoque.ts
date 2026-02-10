import { ProdutoController } from "../controller/ProdutoController";
import { Ferramenta } from "../model/Ferramenta";
import { Peça } from "../model/Peça";
import { Acessorio } from "../model/Acessorios";
import { Colors } from "./Colors";

export function carregarEstoque(produtos: ProdutoController): void {
  produtos.cadastrar(
    new Ferramenta(
      produtos.gerarId(),
      "Chave Pentalobe - torque",
      1,
      350.0,
      15,
      "Wera",
    ),
  );

  produtos.cadastrar(
    new Peça(produtos.gerarId(), "Topcase Macbook Air M1", 2, 1250.0, 8, 12),
  );

  produtos.cadastrar(
    new Acessorio(
      produtos.gerarId(),
      "Cabo USB-C Apple 2m",
      3,
      150.0,
      40,
      "Apple",
      12,
    ),
  );

  produtos.cadastrar(
    new Acessorio(
      produtos.gerarId(),
      "Película Nano Mac Pro 14",
      3,
      250.0,
      25,
      "Hprime",
      0,
    ),
  );

  produtos.cadastrar(
    new Acessorio(
      produtos.gerarId(),
      "Hub USB-C 7 em 1",
      3,
      450.0,
      10,
      "Baseus",
      6,
    ),
  );

  console.log(
    Colors.fg.greenstrong +
      "\nEstoque do E-commerce carregado com sucesso!" +
      Colors.reset,
  );
}
