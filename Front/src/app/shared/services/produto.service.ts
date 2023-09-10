import { Injectable } from '@angular/core';
import { AxiosService } from './axios.service';
import { AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  axiosInstance: AxiosInstance;

  constructor(private readonly axiosService: AxiosService) {
    this.axiosInstance = axiosService.Criar();
  }

  carregar(id: string) {
    return this.axiosInstance.get('produto/' + id);
  }

  listar(filtros: any) {
    return this.axiosInstance.post('produto/pesquisar', filtros);
  }

  cadastrar(registro: any) {
    return this.axiosInstance.post('produto', registro);
  }

  atualizar(registro: any) {
    return this.axiosInstance.put('produto', registro);
  }

  excluir(id: string) {
    return this.axiosInstance.post('produto', + id);
  }

  alterarStatus(id: string) {
    return this.axiosInstance.post('produto/alterar-status/' + id);
  }
}
