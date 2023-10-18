import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Utilitarios } from 'src/app/shared/classes/utilitarios';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { ViaCepService } from 'src/app/shared/services/viaCep.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent {
  constructor(
    private viaCepService: ViaCepService,
    private toastr: ToastrService,
    private clienteService: ClienteService,
    private router: Router,
  ){}

  enderecos: any[] = [];
  registro: any = {};

  faturamento: any = 0;

  async consultarCEP(endereco: any) {
    const viaCep = await this.viaCepService.consultar(endereco.cep);

    if(!viaCep) return;

    endereco.logradouro = viaCep?.logradouro;
    endereco.bairro = viaCep?.bairro;
    endereco.cidade = viaCep.localidade;
  }

  adicionarEndereco() {
    this.enderecos.push({});
  }

  removerEndereco(index: number) {
    const atualizaFaturamento = this.enderecos[index].faturamento === index

    this.enderecos.splice(index, 1);

    if(atualizaFaturamento) this.faturamento = 0
  }

  async gravar() {
    delete this.registro.confirmarSenha;

    if(!this.registro.nome_completo) {
      this.toastr.error('Informe seu nome', 'Atenção');
      return;
    }

    const nomePartes: string[] = this.registro.nome_completo.split(' ');

    if(nomePartes.length < 2) {
      this.toastr.error('É necessário informar nome e sobrenome', 'Atenção');
      return;
    }

    if(!!nomePartes.find(nome => nome.length < 3)) {
      this.toastr.error('É necessario informar um nome de no minimo 3 letras', 'Atenção');
      return;
    }

    if(!this.registro.email) {
      this.toastr.error('Informe seu Email', 'Atenção');
      return;
    }

    if(!this.registro.cpf) {
      this.toastr.error('Informe seu CPF', 'Atenção');
      return;
    }

    if(!this.registro.cpf) {
      this.toastr.error('Informe seu CPF', 'Atenção');
      return;
    }

    if(!Utilitarios.validarCPF(this.registro.cpf)) {
      this.toastr.error('CPF inválido', 'Atenção');
      return;
    }

    if(!this.registro.data_nascimento) {
      this.toastr.error('Informe sua Data de Nascimento', 'Atenção');
      return;
    }

    if(!this.registro.senha) {
      this.toastr.error('Informe sua Senha', 'Atenção');
      return;
    }

    this.registro.enderecos = this.enderecos;

    this.registro.enderecos[this.faturamento].faturamento = true;

    try {
      await this.clienteService.cadastrar(this.registro);

      this.router.navigate(['/']);

      this.toastr.success('Cadastro efetuado com sucesso');
    } catch (error) {
      this.toastr.error('Erro ao gravar usuario', 'Erro');
    }
  }
}
