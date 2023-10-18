import { Injectable } from '@angular/core';
import axios from 'axios';
import { ViaCep } from '../dto/via-cep';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ViaCepService {
  constructor(private toastr: ToastrService) {}

  async consultar(cep: string): Promise<ViaCep | null> {
    if (!cep) return null;

    const cepLimpo = cep.toString().replace(/\D/g, '');

    try {
      const { data } = await axios.get(
        `https://viacep.com.br/ws/${cepLimpo}/json/`
      );

      return data;
    } catch (error) {
      this.toastr.error('Erro ao consultar api de CEP', 'Erro');

      return null;
    }
  }
}
