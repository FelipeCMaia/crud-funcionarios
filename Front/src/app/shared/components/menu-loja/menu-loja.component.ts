import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilitarios } from '../../classes/utilitarios';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-loja',
  templateUrl: './menu-loja.component.html',
  styleUrls: ['./menu-loja.component.css']
})
export class MenuLojaComponent implements OnInit {
  constructor(private router: Router) {}

  nomeCliente: string | null = null;

  faCartShopping = faCartShopping;

  ngOnInit(): void {
    this.nomeCliente = Utilitarios.obterCliente();
  }

  navegarDash() {
    this.router.navigate(['loja/produtos']);
  }

  sair() {
    Utilitarios.removerCliente();
    Utilitarios.removerClienteId();
  }
}
