import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarrinhoService } from 'src/app/shared/services/carrinho.service';
import { faBarcode, faCreditCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forma-pagamento',
  templateUrl: './forma-pagamento.component.html',
  styleUrls: ['./forma-pagamento.component.css']
})
export class FormaPagamentoComponent {
  constructor(private toastr: ToastrService, private router: Router, private carrinhoService: CarrinhoService) {}

  dadosCartao: any = {};

  carrinho = this.carrinhoService.ObterCarrinho();

  faBarcode = faBarcode;
  faCreditCard = faCreditCard;

  finalizar() {
    if((!this.dadosCartao.nome || !this.dadosCartao.numero || !this.dadosCartao.qtd || !this.dadosCartao.data || !this.dadosCartao.codigo ) && this.carrinho.forma_pagamento != 'boleto' ) {
      this.toastr.error('Preencha todas as informacoes do cartao');
      return;
    }

    this.carrinhoService.SalvarCarrinho(this.carrinho);

    this.router.navigate(['loja/resumo']);

  }
}
