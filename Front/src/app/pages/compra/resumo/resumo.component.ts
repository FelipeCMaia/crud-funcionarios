import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Utilitarios } from 'src/app/shared/classes/utilitarios';
import { Produto } from 'src/app/shared/models/produto';
import { CarrinhoService } from 'src/app/shared/services/carrinho.service';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { ViaCepService } from 'src/app/shared/services/viaCep.service';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent {
  constructor(private readonly carrinhoService: CarrinhoService,
    private readonly viaCepService: ViaCepService,
    private readonly clienteService: ClienteService,
    private readonly router: Router,
    private toastr: ToastrService,
    ) {}

  async ngOnInit(): Promise<void> {

    const id = Utilitarios.obterClienteId();

    if(id) {
      const { data } = await this.clienteService.listarEnderecos(+id);

      this.enderecosCliente = data;
    }
  }

  idPedido: string | null;

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

  async proseguir() {
    const cliente_id = Utilitarios.obterClienteId();

    const { data } = await this.clienteService.gravarVenda(+cliente_id!, this.carrinho);

    this.toastr.success('Pedido concluído com sucesso');

    this.router.navigate(['loja/pedido-concluido', data.id]);

    this.carrinhoService.LimparCarrinho();
  }

  calcularTotal() {
    return this.carrinho.valor_total + (+this.valorFrete);
  }
}
