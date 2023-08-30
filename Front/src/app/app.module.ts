import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { UsuarioListarComponent } from './pages/usuario/usuario-listar/usuario-listar.component';
import { UsuarioEditarComponent } from './pages/usuario/usuario-editar/usuario-editar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    UsuarioListarComponent,
    UsuarioEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
