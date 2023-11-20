import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { VendaService } from 'src/app/shared/services/venda.service';

@Component({
  selector: 'app-venda-editar',
  templateUrl: './venda-editar.component.html',
  styleUrls: ['./venda-editar.component.css']
})
export class VendaEditarComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private vendaService: VendaService, private toastr: ToastrService,) {

  }

  ngOnInit(): void {
    this.idRegistro = this.activatedRoute.snapshot.paramMap.get('id')

    this.carregar();
  }

  idRegistro: string | null;

  registro: any = {};

  async carregar(){
    const { data } = await this.vendaService.carregar(this.idRegistro!);

    this.registro = data;
  }

  async atualizar() {
    await this.vendaService.atualizar(this.registro, +this.idRegistro!);

    this.toastr.success('Status Atualizado', 'Sucesso');
  }
}
