import { Produto } from "./produto";

export class Carrinho {
  constructor() {
    this.produtos = new Array<CarrinhoItem>();
    this.total = 0;
  }

  produtos: CarrinhoItem[];
  endereco: Endereco;
  total: number;
  valorFrete: number;
}

export class CarrinhoItem {

  constructor(produto: Produto, quantidade: number) {
    this.produto = produto;
    this.quantidade = quantidade;
  }

  produto: Produto;
  quantidade: number;

}

export class Endereco {

}
