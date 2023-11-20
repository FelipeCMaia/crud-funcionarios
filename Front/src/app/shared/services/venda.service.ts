import { Injectable } from '@angular/core';
import { AxiosService } from './axios.service';
import { AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class VendaService {
  axiosInstance: AxiosInstance;

  constructor(private readonly axiosService: AxiosService) {
    this.axiosInstance = axiosService.Criar();
  }

  carregar(id: string) {
    return this.axiosInstance.get('venda/' + id);
  }

  listar(filtros: any) {
    return this.axiosInstance.post('venda/pesquisar', filtros);
  }

  atualizar(registro: any, id: number) {
    return this.axiosInstance.put('venda/' + id, registro);
  }
}
