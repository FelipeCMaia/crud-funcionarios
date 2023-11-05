import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilitarios } from 'src/app/shared/classes/utilitarios';
import { Produto } from 'src/app/shared/models/produto';
import { CarrinhoService } from 'src/app/shared/services/carrinho.service';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { ViaCepService } from 'src/app/shared/services/viaCep.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  constructor(private readonly carrinhoService: CarrinhoService,
    private readonly viaCepService: ViaCepService,
    private readonly clienteService: ClienteService,
    private readonly router: Router,
    ) {}

  async ngOnInit(): Promise<void> {
    const id = Utilitarios.obterClienteId();

    if(id) {
      const { data } = await this.clienteService.listarEnderecos(+id);

      this.enderecosCliente = data;
    }
  }

  enderecosCliente: any[] = [];

  carrinho = this.carrinhoService.ObterCarrinho();

  endereco: any;

  cep: string = "";

  valorFrete = 0;

  aumentarQtd(produto: Produto) {
    this.carrinhoService.aumentarQuantidade(produto);
  }

  async removerQtd(produto: Produto) {
    await this.carrinhoService.diminuirQuantidade(produto);
  }

  async removerProduto(produto: Produto) {
    await this.carrinhoService.RemoverProduto(produto);
  }

  async consultarCEP(cep: string) {
    this.endereco = null;

    const viaCep = await this.viaCepService.consultar(cep);

    if(!viaCep) return;

    this.endereco = {};

    this.endereco.logradouro = viaCep?.logradouro;
    this.endereco.bairro = viaCep?.bairro;
    this.endereco.cidade = viaCep.localidade;
  }

  proseguir() {
    if(Utilitarios.obterClienteId()) {
      this.router.navigate(['loja/forma-pagamento'])
      return;
    }

    this.router.navigate(['loja/cadastro-cliente'])
  }
}
