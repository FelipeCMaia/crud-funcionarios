import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { UsuarioListarComponent } from './pages/usuario/usuario-listar/usuario-listar.component';
import { UsuarioEditarComponent } from './pages/usuario/usuario-editar/usuario-editar.component';
import { FormsModule } from '@angular/forms';
import { ProdutoListarComponent } from './pages/produto/produto-listar/produto-listar.component';
import { ProdutoEditarComponent } from './pages/produto/produto-editar/produto-editar.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { ProdutoVisualizarComponent } from './pages/produto/produto-visualizar/produto-visualizar.component';
import { ProdutoListarLojaComponent } from './pages/produto/produto-listar-loja/produto-listar-loja.component';
import { MenuLojaComponent } from './shared/components/menu-loja/menu-loja.component';
import { LojaLoginComponent } from './pages/loja-login/loja-login.component';
import { CadastroClienteComponent } from './pages/cadastro-cliente/cadastro-cliente.component';
import { CarrinhoComponent } from './pages/compra/carrinho/carrinho.component';
import { FormaPagamentoComponent } from './pages/compra/forma-pagamento/forma-pagamento.component';
import { ResumoComponent } from './pages/compra/resumo/resumo.component';
import { MinhaCompraComponent } from './pages/compra/minha-compra/minha-compra.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConclusaoComponent } from './pages/compra/conclusao/conclusao.component';
import { MinhaCompraVisualizarComponent } from './pages/compra/minha-compra-visualizar/minha-compra-visualizar.component';
import { VendaListarComponent } from './pages/venda/venda-listar/venda-listar.component';
import { VendaEditarComponent } from './pages/venda/venda-editar/venda-editar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    UsuarioListarComponent,
    UsuarioEditarComponent,
    ProdutoListarComponent,
    ProdutoEditarComponent,
    ProdutoVisualizarComponent,
    ProdutoListarLojaComponent,
    MenuLojaComponent,
    LojaLoginComponent,
    CadastroClienteComponent,
    CarrinhoComponent,
    FormaPagamentoComponent,
    ResumoComponent,
    MinhaCompraComponent,
    ConclusaoComponent,
    MinhaCompraVisualizarComponent,
    VendaListarComponent,
    VendaEditarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
