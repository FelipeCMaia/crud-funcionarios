import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Utilitarios } from 'src/app/shared/classes/utilitarios';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit {
  constructor(
    private usuarioservice: UsuarioService,
    private router: Router,
    private toastr: ToastrService,
    ) {}

  ngOnInit(): void {
    this.pesquisar();
  }

  filtros: any = {};

  usuarios: any = [];


  async pesquisar() {
    try {
      const { data } = await this.usuarioservice.listar(this.filtros);

      this.usuarios = data
    } catch (error) {
      alert('erro ao consultar dados')
    }

  }

  novo() {
    this.router.navigate(['usuario-editar'])
  }

  async mudarStatus(usuario: any) {
    const { value } = await Utilitarios.ConfirmaAcao('Mudar Status', 'Deseja mesmo mudar o status?', 'warning', true, 'Sim', 'Não')

    if(!value) return;

    usuario.ativo = !usuario.ativo;

    await this.usuarioservice.atualizar(usuario);

    this.toastr.success('Status atualizado', 'Sucesso');

    this.pesquisar();
  }
}
