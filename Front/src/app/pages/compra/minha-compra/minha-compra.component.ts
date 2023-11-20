import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/shared/services/cliente.service';

@Component({
  selector: 'app-minha-compra',
  templateUrl: './minha-compra.component.html',
  styleUrls: ['./minha-compra.component.css']
})
export class MinhaCompraComponent implements OnInit {

  constructor(private clienteService: ClienteService) {}

  compras: any = [];

  async ngOnInit(): Promise<void> {
    const { data } = await this.clienteService.listarCompras();

    this.compras = data;
  }


}
