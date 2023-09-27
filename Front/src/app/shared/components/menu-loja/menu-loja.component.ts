import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-loja',
  templateUrl: './menu-loja.component.html',
  styleUrls: ['./menu-loja.component.css']
})
export class MenuLojaComponent {
  constructor(private router: Router) {}

  navegarDash() {
    this.router.navigate(['loja/produtos']);
  }
}
