import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [
    provideNgxMask(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
