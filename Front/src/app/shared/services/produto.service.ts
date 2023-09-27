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

  pesquisar(filtros: any) {
    return this.axiosInstance.post('produto/pesquisar', filtros);
  }

  listarLoja() {
    return this.axiosInstance.get('produto/listar-loja');
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

  uploadImagem(id: string, formData: any, principal: number) {
    return this.axiosInstance.post(`produto/gravar-imagens/${id}/${principal}`, formData, {
      headers: {
        "Content-Type": 'multipart/form-data',
      }
    });
  }
}
