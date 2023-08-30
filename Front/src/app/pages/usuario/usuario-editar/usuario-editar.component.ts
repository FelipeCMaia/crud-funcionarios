import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent implements OnInit {
  usuario: any = {};

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(
    private usuarioservice: UsuarioService,
    private router: Router,
    ) {}

  async gravar() {
    try {
      await this.usuarioservice.cadastrar(this.usuario);

      this.router.navigate(['usuairo-listar'])
    } catch (error) {
      alert('erro ao gravar o usuario');
    }

  }
}
