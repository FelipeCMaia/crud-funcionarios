import { Prisma, Produto } from "@prisma/client";
import { prisma } from "../database/prismaClient";
import { AppError } from "../error/AppError";

export class ProdutoService {
  async gravar(produto: Prisma.ProdutoUncheckedCreateInput): Promise<any> {
    const produtoCodigoExiste = await this.buscarPorCodigo(produto.codigo)

    if(produtoCodigoExiste) throw new AppError('Produto já cadastrado com esse código');

    const novoProduto = await prisma.produto.create({
      data: produto
    });

    return novoProduto;
  }

  async atualizar(produto: Prisma.ProdutoUncheckedUpdateInput) {
    if(!produto.codigo) throw new AppError('Codigo não encontrado')

    const produtoDb = await this.buscarPorCodigo(produto.codigo.toString());

    if(!produtoDb) throw new AppError('Produto não encontrado');

    delete produto.ProdutoAnexo;

    const novoProduto = await prisma.produto.update({
      data: produto,
      where: {
        id: produtoDb.id,
      },
    });

    return novoProduto;
  }

  async pesquisar(filtros: any) {
    let strSQL = 'SELECT p.* FROM Produto p ';
    strSQL += ' where 1 = 1 '
    strSQL += filtros.nome ? ` and p.nome like '%${filtros.nome}%'` : '';

    const retorno: any[] = await prisma.$queryRawUnsafe(strSQL);

    return retorno;
  }

  async pesquisarLoja() {
    let strSQL = 'SELECT p.*, pa.caminho, pa.produto_id FROM Produto p ';
    strSQL += ' left join ProdutoAnexo pa on pa.produto_id = p.id'
    strSQL += ' where 1 = 1 and pa.principal = 1 and p.status = 1'

    const retorno: any[] = await prisma.$queryRawUnsafe(strSQL);

    retorno.forEach(pa => {
      pa.caminho = `${process.env.BASE_URL!}${pa.produto_id}/${pa.caminho}`;
    })

    return retorno;
  }

  async remover(produtoId: number) {
    return prisma.produto.delete({
      where: {
        id: produtoId,
      }
    });
  }

  async carregar(produtoId: number) {
    const produto = await prisma.produto.findFirst({
      where: {
        id: produtoId,
      },
      include: {
        ProdutoAnexo: true,
      },
    });

    produto?.ProdutoAnexo.forEach(pa => {
      pa.caminho = `${process.env.BASE_URL!}${pa.produto_id}/${pa.caminho}`;
    })

    return produto;
  }

  async buscarPorCodigo(codigo: string): Promise<Produto | null> {
    return prisma.produto.findFirst({
      where: { codigo },
      include: {
        ProdutoAnexo: true,
      }
    });
  }

  async buscarPorId(id: number): Promise<Produto | null> {
    return prisma.produto.findFirst({
      where: { id },
      include: {
        ProdutoAnexo: true,
      }
    });
  }

  async alterarStatus(produtoId: number) {
    const produto = await this.buscarPorId(produtoId);

    if(!produto) throw new AppError('Produto não encontrado');

    produto.status = !produto.status;

    this.atualizar(produto);

  }

  async gravarImagens(imagem: string, produto_id: number, principal: number) {
    await prisma.produtoAnexo.create({
      data: {
        caminho: imagem,
        principal: !!principal,
        produto_id,
      }
    })
  }
}
