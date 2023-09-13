import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Utilitarios } from 'src/app/shared/classes/utilitarios';
import { UsuarioTipo } from 'src/app/shared/enum/UsuarioTipo';
import { ProdutoService } from 'src/app/shared/services/produto.service';

export class Arquivo {
  constructor() {
    this.imagemPadrao = false;
  }

  url: string;
  file: File;
  imagemPadrao: boolean;
}

@Component({
  selector: 'app-produto-editar',
  templateUrl: './produto-editar.component.html',
  styleUrls: ['./produto-editar.component.css']
})
export class ProdutoEditarComponent {

  constructor(
    private readonly router: Router,
    private readonly produtoService: ProdutoService,
    private readonly toastr: ToastrService,
    private readonly activatedRoute: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    this.idRegistro = this.activatedRoute.snapshot.paramMap.get('id')

    if(this.idRegistro) {
      this.carregar();
    }
  }



  @ViewChild('fileInput')
  fileInput: ElementRef;

  produto: any = {
    status: true,
  };

  fileList: Arquivo[] = [];

  idRegistro: string | null;

  EUsuarioTipo = UsuarioTipo;

  usuarioTipo = Utilitarios.obterUsuarioTipo();

  voltar() {
    this.router.navigate(['produto-listar'])
  }

  adicionarImagem() {

  }

  inputImagemSelecionado(event: Event) {
    const files = (event.target as HTMLInputElement).files;

    if(!files) {
      this.toastr.error('Sem arquivos encontrados')
      return;
    }

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.readAsDataURL(files[i]);
      reader.onload = (event: any) => {
        this.fileList.push({
          file: files[i],
          imagemPadrao: false,
          url: event.target.result,
        });
      }
    }

    this.fileInput.nativeElement.value = '';
    this.fileInput.nativeElement.reset();
  }

  imagemPadraoMudar(ii: number) {
    this.fileList.forEach(file => {
      file.imagemPadrao = false;
    });

    this.fileList[ii].imagemPadrao = true;
  }

  removerImagem(ii: number) {
    this.fileList.splice(ii, 1);
  }

  async gravar() {
    try {
      delete this.produto.confirmarSenha;

      if(this.idRegistro) {
        await this.produtoService.atualizar(this.produto);
      } else {
        await this.produtoService.cadastrar(this.produto);
      }

      this.router.navigate(['produto-listar'])
    } catch (error) {
      alert('erro ao gravar o produto');
    }
  }

  cancelar() {
    this.router.navigate(['produto-listar']);
  }

  async carregar() {
    const { data } = await this.produtoService.carregar(this.idRegistro!);

    this.produto = data;

    return;
  }

  campoLiberado() {
    return this.usuarioTipo !== this.EUsuarioTipo.Admin;
  }
}
