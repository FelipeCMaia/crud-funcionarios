import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UsuarioListarComponent } from './pages/usuario/usuario-listar/usuario-listar.component';
import { UsuarioEditarComponent } from './pages/usuario/usuario-editar/usuario-editar.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { ProdutoListarComponent } from './pages/produto/produto-listar/produto-listar.component';
import { ProdutoEditarComponent } from './pages/produto/produto-editar/produto-editar.component';
import { ProdutoVisualizarComponent } from './pages/produto/produto-visualizar/produto-visualizar.component';
import { MenuLojaComponent } from './shared/components/menu-loja/menu-loja.component';
import { ProdutoListarLojaComponent } from './pages/produto/produto-listar-loja/produto-listar-loja.component';
import { CadastroClienteComponent } from './pages/cadastro-cliente/cadastro-cliente.component';
import { LojaLoginComponent } from './pages/loja-login/loja-login.component';
import { CarrinhoComponent } from './pages/compra/carrinho/carrinho.component';
import { FormaPagamentoComponent } from './pages/compra/forma-pagamento/forma-pagamento.component';
import { ResumoComponent } from './pages/compra/resumo/resumo.component';
import { MinhaCompraComponent } from './pages/compra/minha-compra/minha-compra.component';

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
  {
    path: 'loja',
    component: MenuLojaComponent,
    children: [
      {
        path: 'produtos',
        component: ProdutoListarLojaComponent
      },
      {
        path: 'produto/:id',
        component: ProdutoVisualizarComponent
      },
      {
        path: 'cadastro-cliente',
        component: CadastroClienteComponent,
      },
      {
        path: 'meu-perfil',
        component: CadastroClienteComponent,
      },
      {
        path: 'carrinho',
        component: CarrinhoComponent,
      },
      {
        path: 'compras',
        component: MinhaCompraComponent,
      },
      {
        path: 'resumo',
        component: ResumoComponent,
      },
      {
        path: 'forma-pagamento',
        component: FormaPagamentoComponent,
      },
    ]
  },
  {
    path: 'login',
    component: LojaLoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
