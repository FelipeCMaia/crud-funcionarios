import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/shared/services/cliente.service';

@Component({
  selector: 'app-minha-compra-visualizar',
  templateUrl: './minha-compra-visualizar.component.html',
  styleUrls: ['./minha-compra-visualizar.component.css']
})
export class MinhaCompraVisualizarComponent implements OnInit {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly cliente: ClienteService,
  ) {}

  ngOnInit(): void {
    this.idPedido = this.activatedRoute.snapshot.paramMap.get('id')

    this.carregarPedido();
  }

  idPedido: string | null;

  registro: any = {};


  async carregarPedido() {
    const { data } = await this.cliente.carregarVenda(this.idPedido!);

    this.registro = data;
  }

  obterValorCarrinho() {
    let v = 0;

    if(this.registro.VendaItem)
      v = (this.registro.VendaItem as Array<any>).reduce((acc, item) => {
      console.log(item)
        console.log(item.Produto.valor)

      return acc + (+item.Produto.valor) * (+item.quantidade);
    }, 0);

    console.log(v)

    return v;
  }
}
