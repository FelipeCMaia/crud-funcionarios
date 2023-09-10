import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UsuarioListarComponent } from './pages/usuario/usuario-listar/usuario-listar.component';
import { UsuarioEditarComponent } from './pages/usuario/usuario-editar/usuario-editar.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { ProdutoListarComponent } from './pages/produto/produto-listar/produto-listar.component';
import { ProdutoEditarComponent } from './pages/produto/produto-editar/produto-editar.component';
import { ProdutoVisualizarComponent } from './pages/produto/produto-visualizar/produto-visualizar.component';

const routes: Routes = [
  {
    path: '',
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
    path: 'usuario-editar/:id',
    component: UsuarioEditarComponent,
  },
  {
    path: 'usuario-editar',
    component: UsuarioEditarComponent,
  },
  {
    path: 'produto-listar',
    component: ProdutoListarComponent,
  },
  {
    path: 'produto-editar/:id',
    component: ProdutoEditarComponent,
  },
  {
    path: 'produto-editar',
    component: ProdutoEditarComponent,
  },
  {
    path: 'produto-visualizar/:id',
    component: ProdutoVisualizarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
