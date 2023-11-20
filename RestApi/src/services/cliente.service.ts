import { Prisma, Cliente } from "@prisma/client";
import { prisma } from "../database/prismaClient";
import { AppError } from "../error/AppError";
import { encriptarMD5 } from "../extensions/encrypt";
import moment from "moment";

export class ClienteService {
  async gravar(cliente: any): Promise<any> {
    const clienteEmailExiste = await this.buscarPorEmail(cliente.email)

    if(clienteEmailExiste) throw new AppError('Usuário já cadastrado com esse email');

    const clientecpfExiste = await this.buscarPorCpf(cliente.cpf);

    const enderecos = cliente.enderecos;

    if(clientecpfExiste) throw new AppError('Usuário já cadastrado com esse cpf');

    cliente.senha = encriptarMD5(cliente.senha as string);

    cliente.data_nascimento = moment(cliente.data_nascimento, 'yyyy-MM-DD').toDate();

    delete cliente.enderecos;

    const novoCliente = await prisma.cliente.create({
      data: cliente
    });

    enderecos.forEach(async (end: any) => {
      const novoEndereco: Prisma.ClienteEnderecoUncheckedCreateInput = {
        ...end,
        cliente_id: novoCliente.id,
      }

      await prisma.clienteEndereco.create({
        data: novoEndereco,
      });
    })

    return novoCliente;
  }

  async atualizar(cliente: any) {
    const clientecpfExiste = await this.buscarPorCpf(cliente.cpf as string);

    if(clientecpfExiste && clientecpfExiste.email != cliente.email) throw new AppError('Usuário já cadastrado com esse cpf');

    const enderecos = cliente.enderecos;

    cliente.senha = cliente.senha ? encriptarMD5(cliente.senha as string) : clientecpfExiste?.senha;
    cliente.data_nascimento = moment(cliente.data_nascimento?.toString(), 'yyyy-MM-DD').toDate();

    delete cliente.enderecos;
    delete cliente.ClienteEndereco;

    const novoCliente = await prisma.cliente.update({
      data: cliente,
      where: {
        email: cliente.email as string
      },
    });

    await prisma.clienteEndereco.deleteMany({
      where: {
        cliente_id: clientecpfExiste?.id
      }
    });

    enderecos.forEach(async (end: any) => {
      const novoEndereco: Prisma.ClienteEnderecoUncheckedCreateInput = {
        ...end,
        cliente_id: clientecpfExiste?.id,
      }

      await prisma.clienteEndereco.create({
        data: novoEndereco,
      });
    })

    return novoCliente;
  }

  async pesquisar(filtros: any) {
    let strSQL = 'SELECT * FROM Cliente where 1 = 1';
    strSQL += filtros.nome ? ` and nome like '%${filtros.nome}%'` : '';

    const retorno = await prisma.$queryRawUnsafe(strSQL);

    return retorno;
  }

  async remover(clienteId: number) {
    return prisma.cliente.delete({
      where: {
        id: clienteId,
      }
    });
  }

  async listarEnderecos(cliente_id: number) {
    return prisma.clienteEndereco.findMany({
      where: {
        cliente_id,
      }
    });
  }

  async carregar(clienteId: number) {
    const retorno: any = await prisma.cliente.findFirst({
      where: {
        id: clienteId,
      },
      include: {
         ClienteEndereco: true,
      }
    });

    delete retorno?.senha;

    return retorno;
  }

  async buscarPorEmail(email: string): Promise<Cliente | null> {
    return prisma.cliente.findFirst({
      where: { email },
    });
  }

  async buscarPorCpf(cpf: string): Promise<Cliente | null> {
    return prisma.cliente.findFirst({
      where: { cpf },
    });
  }

  async autenticar(email: string, senha: string): Promise<any> {
    if(!senha || !email) {
      throw new AppError('Usuário ou senha inválidos');
    }

    const hashSenha = encriptarMD5(senha);

    const cliente = await prisma.cliente.findUnique({
       where: {
        email,
        senha: hashSenha,
      },
    });

    if(!cliente) {
      throw new AppError('Usuário ou senha inválidos');
    }

    return { cliente }
  }

  async gravarEndereco(endereco: any, cliente_id: number) {
    return await prisma.clienteEndereco.create({
      data: {
        ...endereco,
        cliente_id,
      }
    })
  }

  listarVendas(cliente_id: number) {
    return prisma.venda.findMany({
      where: {
        cliente_id,
      },
      include: {
        ClienteEndereco: true,
        VendaItem: true,
      }
    })
  }
}
