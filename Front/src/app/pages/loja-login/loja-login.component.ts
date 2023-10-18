import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Utilitarios } from 'src/app/shared/classes/utilitarios';
import { ClienteService } from 'src/app/shared/services/cliente.service';

@Component({
  selector: 'app-loja-login',
  templateUrl: './loja-login.component.html',
  styleUrls: ['./loja-login.component.css']
})
export class LojaLoginComponent {
  constructor(private usuarioservice: ClienteService, private router: Router,) {}
  ngOnInit(): void { }

  email: string;
  senha: string;

  async login() {
    try {
      const { data } = await this.usuarioservice.login(this.email, this.senha);

      Utilitarios.gravarCliente(data.cliente.nome_completo);
      Utilitarios.gravarClienteId(data.cliente.id);

      this.router.navigate(['loja/produtos'])

    } catch (error) {
      alert('Email ou senha invalidos')
    }

  }
}
