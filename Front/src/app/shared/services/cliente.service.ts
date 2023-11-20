import { Injectable } from '@angular/core';
import { AxiosService } from './axios.service';
import { AxiosInstance } from 'axios';
import { Utilitarios } from '../classes/utilitarios';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  axiosInstance: AxiosInstance;

  constructor(private readonly axiosService: AxiosService) {
    this.axiosInstance = axiosService.Criar();
  }

  login(email: string, senha: string) {
    return this.axiosInstance.post('cliente/login', { email, senha });
  }

  carregar(id: string) {
    return this.axiosInstance.get('cliente/' + id);
  }

  listar(filtros: any) {
    return this.axiosInstance.post('cliente/pesquisar', filtros);
  }

  cadastrar(registro: any) {
    return this.axiosInstance.post('cliente', registro);
  }

  atualizar(registro: any) {
    return this.axiosInstance.put('cliente', registro);
  }

  excluir(id: string) {
    return this.axiosInstance.post('cliente', + id);
  }

  listarEnderecos(id: number) {
    return this.axiosInstance.get('cliente/listar-enderecos/' + id);
  }

  gravarVenda(cliente_id: number, registro: any) {
    return this.axiosInstance.post('cliente/concluir-venda/' + cliente_id, registro);
  }

  listarCompras() {
    return this.axiosInstance.get('cliente/vendas/' + Utilitarios.obterClienteId()!);
  }

  carregarVenda(id: string) {
    return this.axiosInstance.get('cliente/pedido/' + id);
  }
}
