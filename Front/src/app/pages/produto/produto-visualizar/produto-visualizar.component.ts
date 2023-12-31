import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarrinhoService } from 'src/app/shared/services/carrinho.service';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-produto-visualizar',
  templateUrl: './produto-visualizar.component.html',
  styleUrls: ['./produto-visualizar.component.css']
})
export class ProdutoVisualizarComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly produtoService: ProdutoService,
    private readonly toastr: ToastrService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly carrinho: CarrinhoService,
    ) {}

    idRegistro: string | null = null;
    produto: any = {};

  ngOnInit(): void {
    this.idRegistro = this.activatedRoute.snapshot.paramMap.get('id')

    if(this.idRegistro) {
      this.carregar();
    }
  }


  async carregar() {
    const { data } = await this.produtoService.carregar(this.idRegistro!);

    this.produto = data;

    return;
  }

  adicionarCarrinho() {


    this.carrinho.AdicionarProduto(this.produto, 1);

    this.toastr.success('Produto adicionado ao carrinho', 'Sucesso');

    this.router.navigate(['/loja/produtos'])
  }
}
