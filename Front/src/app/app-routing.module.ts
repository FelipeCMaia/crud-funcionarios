import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UsuarioListarComponent } from './pages/usuario/usuario-listar/usuario-listar.component';
import { UsuarioEditarComponent } from './pages/usuario/usuario-editar/usuario-editar.component';
import { MenuComponent } from './shared/components/menu/menu.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'usuario-listar',
    component: UsuarioListarComponent,
  },
  {
    path: 'usuario-editar',
    component: UsuarioEditarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
