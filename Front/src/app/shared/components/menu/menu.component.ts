import { Component } from '@angular/core';
import { Utilitarios } from '../../classes/utilitarios';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  usuarioTipo = Utilitarios.obterUsuarioTipo();

}
