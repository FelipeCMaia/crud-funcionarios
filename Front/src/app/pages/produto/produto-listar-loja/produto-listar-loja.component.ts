import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-produto-listar-loja',
  templateUrl: './produto-listar-loja.component.html',
  styleUrls: ['./produto-listar-loja.component.css']
})
export class ProdutoListarLojaComponent implements OnInit {
  constructor(private produtoService: ProdutoService, private route: Router){}

  produtos: any[] = [];

  ngOnInit(): void {
    this.listarProduto();
  }

  async listarProduto() {
    const { data } = await this.produtoService.listarLoja();

    this.produtos = data;
  }

  navegarProduto(id: number) {
    this.route.navigate(['loja/produto', id]);
  }
}
