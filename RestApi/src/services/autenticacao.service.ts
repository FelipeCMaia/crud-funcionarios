import { prisma } from "../database/prismaClient";
import { encriptarMD5 } from "../extensions/encrypt";
import { AppError } from "../error/AppError";

export class AutenticacaoService {
  async autenticar(email: string, senha: string): Promise<any> {
    if(!senha || !email) {
      throw new AppError('Usuário ou senha inválidos');
    }

    const hashSenha = encriptarMD5(senha);

    const usuario = await prisma.usuario.findUnique({
       where: { 
        email,
        senha: hashSenha,
      },
    });

    if(!usuario) {
      throw new AppError('Usuário ou senha inválidos');
    }

    return { usuario }
  }
}