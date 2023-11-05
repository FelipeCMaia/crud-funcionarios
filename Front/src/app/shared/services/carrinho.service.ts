import { Injectable } from "@angular/core"
import { ToastrService } from "ngx-toastr";
import { Utilitarios } from "../classes/utilitarios";
import { Carrinho, CarrinhoItem } from "../models/carrinho"
import { Produto } from "../models/produto"

@Injectable({
  providedIn: 'root',
})

export class CarrinhoService {
  constructor(private toastr: ToastrService){
    const carrinhoJson = localStorage.getItem('carrinho');

    if(carrinhoJson) this.carrinho = JSON.parse(carrinhoJson);
  }

  carrinho: Carrinho = new Carrinho();

  ObterCarrinho(): Carrinho {
    return this.carrinho;
  }

  AdicionarProduto(produto: Produto, quantidade: number): void {
    const carrinhoIndex = this.ObterProdutoCarrinhoIndex(produto.id);

    if(carrinhoIndex > -1) {

      this.carrinho.produtos[carrinhoIndex].quantidade += quantidade;

      if (this.carrinho.produtos[carrinhoIndex].quantidade > produto.quantidade) {
        this.carrinho.produtos[carrinhoIndex].quantidade -= quantidade;
        throw new Error("Não há produtos disponiveis para realizar a operação");
      }

      this.SalvarCarrinho(this.carrinho);
      return;
    }

    const carrinhoItem = new CarrinhoItem(produto, quantidade);

    this.carrinho.produtos.push(carrinhoItem);

    this.SalvarCarrinho(this.carrinho);
  }

  async RemoverProduto(produto: Produto) {
    const { value } = await Utilitarios.ConfirmaAcao("Remover Produto", "Deseja remover este produto do carrinho", "warning", true, "Sim", "Não");

    if(!value) return;

    const produtoIndex = this.carrinho.produtos.findIndex(p => p.produto.id === produto.id);

    this.carrinho.produtos.splice(produtoIndex, 1);

    this.SalvarCarrinho(this.carrinho);
  }

  async diminuirQuantidade(produto: Produto) {
    const carrinhoIndex = this.ObterProdutoCarrinhoIndex(produto.id);

    const produtoQuantidade = this.carrinho.produtos[carrinhoIndex].quantidade;

    if(produtoQuantidade === 1) {
      await this.RemoverProduto(produto);
      this.SalvarCarrinho(this.carrinho);
      return;
    }

    this.carrinho.produtos[carrinhoIndex].quantidade--;

    this.SalvarCarrinho(this.carrinho);
  }

  aumentarQuantidade(produto: Produto) {
    const carrinhoIndex = this.ObterProdutoCarrinhoIndex(produto.id);

    this.carrinho.produtos[carrinhoIndex].quantidade++;

    this.SalvarCarrinho(this.carrinho);
  }

  SalvarCarrinho(carrinho: Carrinho) {
    this.CalcularValorCarrinho();

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }

  ObterProdutoCarrinhoIndex(idProduto: number) {
    return this.carrinho.produtos.findIndex(p => p.produto.id === idProduto);
  }

  LimparCarrinho() {
    this.carrinho = new Carrinho();

    this.SalvarCarrinho(new Carrinho());
  }

  CalcularValorCarrinho() {
    let total = 0;

    this.carrinho.produtos.forEach(p => {
      total += p.produto.valor * p.quantidade;
    });

    this.carrinho.total = total;
  }
}
