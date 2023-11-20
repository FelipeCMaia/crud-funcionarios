import { Produto } from "./produto";

export class Carrinho {
  constructor() {
    this.produtos = new Array<CarrinhoItem>();
    this.valor_total = 0;
    this.id = (new Date()).getMilliseconds();
  }

  id: any;
  produtos: CarrinhoItem[];
  endereco: any;
  valor_total: number;
  valor_frete: number;
  forma_pagamento: string = 'boleto';
}

export class CarrinhoItem {

  constructor(produto: Produto, quantidade: number) {
    this.produto = produto;
    this.quantidade = quantidade;
    this.produto_id = produto.id;
  }

  produto_id: number;
  produto: Produto;
  quantidade: number;
}

export class Endereco {

}
