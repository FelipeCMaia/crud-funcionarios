import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    ) {}

  ngOnInit(): void {
    this.listar();
  }

  usuarios: any = [];


  async listar() {
    try {
      const { data } = await this.usuarioservice.listar();

      this.usuarios = data
    } catch (error) {
      alert('erro ao consultar dados')
    }

  }

  novo() {
    this.router.navigate(['usuario-editar'])
  }
}
