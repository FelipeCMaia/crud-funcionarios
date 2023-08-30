import { Injectable } from '@angular/core';
import { AxiosService } from './axios.service';
import { AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  axiosInstance: AxiosInstance;

  constructor(private readonly axiosService: AxiosService) {
    this.axiosInstance = axiosService.Criar();
  }

  login(email: string, senha: string) {
    return this.axiosInstance.post('autenticacao', { email, senha });
  }

  carregar(id: string) {
    return this.axiosInstance.get('usuario/' + id);
  }

  listar() {
    return this.axiosInstance.get('usuario');
  }

  cadastrar(registro: any) {
    return this.axiosInstance.post('usuario', registro);
  }

  atualizar(registro: any) {
    return this.axiosInstance.put('usuario', registro);
  }

  excluir(id: string) {
    return this.axiosInstance.post('usuario', + id);
  }
}
