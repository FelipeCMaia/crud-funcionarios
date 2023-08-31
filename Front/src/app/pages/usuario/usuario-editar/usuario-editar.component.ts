import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent implements OnInit {
  usuario: any = {
    usuario_tipo_id: null,
  };

  ngOnInit(): void {
    this.idRegistro = this.activatedRouter.snapshot.paramMap.get('id')

    if(this.idRegistro) {
      this.carregar();
    }
  }

  constructor(
    private usuarioservice: UsuarioService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    ) {}

  idRegistro: string | null;

  async gravar() {
    try {
      delete this.usuario.confirmarSenha;

      if(this.idRegistro) {
        await this.usuarioservice.atualizar(this.usuario);
      } else {
        await this.usuarioservice.cadastrar(this.usuario);
      }

      this.router.navigate(['usuario-listar'])
    } catch (error) {
      alert('erro ao gravar o usuario');
    }
  }

  cancelar() {
    this.router.navigate(['usuario-listar']);
  }

  async carregar() {
    const { data } = await this.usuarioservice.carregar(this.idRegistro!);

    this.usuario = data;

    this.usuario.senha = null;

    return;
  }
}
