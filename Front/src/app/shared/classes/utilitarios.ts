import Swal, { SweetAlertIcon } from "sweetalert2";

export class Utilitarios {
  static gravarToken(token: string) {
    localStorage.setItem('tokeJwt', token);
  }

  static obterToken() {
    return localStorage.getItem('tokenJwt');
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
}
