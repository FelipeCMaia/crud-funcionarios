import { Prisma, Usuario } from "@prisma/client";
import { prisma } from "../database/prismaClient";
import { AppError } from "../error/AppError";
import { encriptarMD5 } from "../extensions/encrypt";

export class UsuarioService {
  async gravar(usuario: Prisma.UsuarioUncheckedCreateInput): Promise<any> {
    const usuarioEmailExiste = await this.buscarPorEmail(usuario.email)

    if(usuarioEmailExiste) throw new AppError('Usuário já cadastrado com esse email');

    const usuariocpfExiste = await this.buscarPorCpf(usuario.cpf);

    if(usuariocpfExiste) throw new AppError('Usuário já cadastrado com esse cpf');

    usuario.senha = encriptarMD5(usuario.senha as string);

    const novoUsuario = await prisma.usuario.create({
      data: usuario
    });

    return novoUsuario;
  }

  async atualizar(usuario: Prisma.UsuarioUncheckedUpdateInput) {    
    const usuariocpfExiste = await this.buscarPorCpf(usuario.cpf as string);

    if(usuariocpfExiste && usuariocpfExiste.email != usuario.email) throw new AppError('Usuário já cadastrado com esse cpf');

    usuario.senha = usuario.senha ? encriptarMD5(usuario.senha as string) : usuariocpfExiste?.senha;

    const novoUsuario = await prisma.usuario.update({
      data: usuario,
      where: {
        email: usuario.email as string
      },
    });

    return novoUsuario;
  }

  async pesquisar(filtros: any) {
    let strSQL = 'SELECT * FROM Usuario where 1 = 1';
    strSQL += filtros.nome ? ` and nome like '%${filtros.nome}%'` : '';

    const retorno = await prisma.$queryRawUnsafe(strSQL);

    return retorno;
  }

  async remover(usuarioId: number) {
    return prisma.usuario.delete({
      where: {
        id: usuarioId,
      }
    });
  }

  async carregar(usuarioId: number) {
    return prisma.usuario.findFirst({
      where: {
        id: usuarioId,
      },
    });
  }

  async buscarPorEmail(email: string): Promise<Usuario | null> {
    return prisma.usuario.findFirst({
      where: { email },
    });
  }

  async buscarPorCpf(cpf: string): Promise<Usuario | null> {
    return prisma.usuario.findFirst({
      where: { cpf },
    });
  }
}