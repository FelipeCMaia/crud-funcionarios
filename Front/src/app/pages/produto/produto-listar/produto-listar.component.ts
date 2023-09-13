import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Utilitarios } from 'src/app/shared/classes/utilitarios';
import { UsuarioTipo } from 'src/app/shared/enum/UsuarioTipo';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-produto-listar',
  templateUrl: './produto-listar.component.html',
  styleUrls: ['./produto-listar.component.css']
})
export class ProdutoListarComponent implements OnInit {
  constructor(
    private produtoservice: ProdutoService,
    private router: Router,
    private spinner: NgxSpinnerService,
    ) {}

  ngOnInit(): void {
    this.pesquisar();
  }

  filtros: any = {};

  produtos: any[] = [];

  EUsuarioTipo = UsuarioTipo;

  usuarioTipo = Utilitarios.obterUsuarioTipo();

  async pesquisar() {
    try {
      const { data } = await this.produtoservice.listar(this.filtros);

      this.produtos = data
    } catch (error) {
      alert('erro ao consultar dados')
    }

  }

  novo() {
    this.router.navigate(['produto-editar'])
  }

  async alterarStatus(id: string) {

    const { value } = await Utilitarios.ConfirmaAcao('Alterar Status', 'Deseja realmente alterar o status deste produto?', 'warning', true, 'Sim', 'Não');

    if(!value) return;

    this.spinner.show();
      await this.produtoservice.alterarStatus(id);

      setTimeout(async () => {
        await this.pesquisar();
      }, 10);
    this.spinner.hide();
  }

  campoLiberado() {
    return this.usuarioTipo === this.EUsuarioTipo.Admin;
  }

}
