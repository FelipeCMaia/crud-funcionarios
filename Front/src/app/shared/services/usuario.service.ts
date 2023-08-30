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
    return this.axiosInstance.post('', { email, senha });
  }
}
