import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilitarios } from 'src/app/shared/classes/utilitarios';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private usuarioservice: UsuarioService, private router: Router,) {}
  ngOnInit(): void { }

  email: string;
  senha: string;

  async login() {
    try {
      const { data } = await this.usuarioservice.login(this.email, this.senha);

      Utilitarios.gravarUsuarioTipo(data.usuario.usuario_tipo_id.toString());

      this.router.navigate(['menu'])

    } catch (error) {
      alert('Email ou senha invalidos')
    }

  }
}
