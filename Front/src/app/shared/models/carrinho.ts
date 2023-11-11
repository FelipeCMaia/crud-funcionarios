import { Produto } from "./produto";

export class Carrinho {
  constructor() {
    this.produtos = new Array<CarrinhoItem>();
    this.total = 0;
    this.id = (new Date()).getMilliseconds();
  }

  id: any;
  produtos: CarrinhoItem[];
  endereco: any;
  total: number;
  valorFrete: number;
  formaPagamento: string = 'boleto';
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
