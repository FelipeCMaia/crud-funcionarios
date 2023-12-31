import Swal, { SweetAlertIcon } from "sweetalert2";

export class Utilitarios {
  static gravarToken(token: string) {
    localStorage.setItem('tokeJwt', token);
  }

  static obterToken() {
    return localStorage.getItem('tokenJwt');
  }

  static gravarCliente(nomeCliente: string) {
    localStorage.setItem('cliente', nomeCliente);
  }

  static obterCliente() {
    return localStorage.getItem('cliente');
  }

  static removerCliente() {
    localStorage.removeItem('cliente');
  }

  static gravarClienteId(nomeClienteId: string) {
    localStorage.setItem('clienteId', nomeClienteId);
  }

  static obterClienteId() {
    return localStorage.getItem('clienteId');
  }

  static removerClienteId() {
    localStorage.removeItem('clienteId');
  }

  static gravarUsuarioTipo(tipo: string) {
    localStorage.setItem('usuarioTipo', tipo);
  }

  static obterUsuarioTipo() {
    return localStorage.getItem('usuarioTipo');
  }

  static ConfirmaAcao(
    titulo: string,
    texto: string,
    tipo: SweetAlertIcon,
    showCancelButton: boolean,
    confirmButtonText: string,
    cancelButtonText: string
  ) {
    return Swal.fire({
      title: titulo,
      text: texto,
      icon: tipo,
      showCancelButton: showCancelButton,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
    });
  }

  static validarCPF(cpf: string) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
    // Elimina CPFs invalidos conhecidos
    if (
      cpf.length != 11 ||
      cpf == '00000000000' ||
      cpf == '11111111111' ||
      cpf == '22222222222' ||
      cpf == '33333333333' ||
      cpf == '44444444444' ||
      cpf == '55555555555' ||
      cpf == '66666666666' ||
      cpf == '77777777777' ||
      cpf == '88888888888' ||
      cpf == '99999999999'
    )
      return false;
    // Valida 1o digito
    let add = 0;
    for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(9))) return false;
    // Valida 2o digito
    add = 0;
    for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(10))) return false;
    return true;
  }
}
