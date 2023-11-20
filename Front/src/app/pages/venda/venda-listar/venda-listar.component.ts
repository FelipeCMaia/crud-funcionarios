import { Component, OnInit } from '@angular/core';
import { VendaService } from 'src/app/shared/services/venda.service';

@Component({
  selector: 'app-venda-listar',
  templateUrl: './venda-listar.component.html',
  styleUrls: ['./venda-listar.component.css']
})
export class VendaListarComponent implements OnInit {
  constructor(private vendaService: VendaService) {

  }

  ngOnInit(): void {
    this.pesquisar();
  }

  vendas: any = [];

  async pesquisar() {
    const { data } = await this.vendaService.listar({});

    this.vendas = data;
  }

}
