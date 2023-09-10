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
}
