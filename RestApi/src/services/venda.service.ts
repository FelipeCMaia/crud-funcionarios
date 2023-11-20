import { Prisma, prisma } from "../database/prismaClient";
import { ClienteService } from "./cliente.service";

export class VendaService {
  async gravarVenda(venda: any, cliente_id: number) {
    let endereco_id = venda.endereco.id;
    const clienteService = new ClienteService();

    if(!endereco_id) {
      const { id } = await clienteService.gravarEndereco(venda.endereco, cliente_id);

      endereco_id = id;
    }

    const vendaDB =  await prisma.venda.create({
      data: {
        forma_pagamento: venda.forma_pagamento,
        status: 'Aguardando Pagamento',
        valor_frete: venda.valor_frete,
        valor_total: venda.valor_total,
        cliente_id,
        cliente_endereco_id: endereco_id,
      }
    });

    const vendaItens = venda.produtos.map((p: any) => (
       {
        produto_id: p.produto_id,
        quantidade: p.quantidade,
        venda_id: vendaDB.id,
      }
    ));

    await prisma.vendaItem.createMany({
      data: vendaItens
    });

    return vendaDB;
  }

  async carregar(id: number) {
    console.log(id)

    const retorno = await prisma.venda.findUnique({
      where: {
        id
      },
      include: {
        VendaItem: {
          include: {
            Produto: {
              include: {
                ProdutoAnexo: true,
              }
            },
          }
        },
        ClienteEndereco: true,
      }
    })

    retorno?.VendaItem.forEach(pa => {
      pa.Produto?.ProdutoAnexo.forEach(ppa => {
        ppa.caminho = `${process.env.BASE_URL!}${pa.produto_id}/${ppa.caminho}`
      })
    });

    return retorno;
  }

  async pesquisar(filtros: any) {
    let strSQL = 'SELECT * FROM Venda where 1 = 1 order by data_cadastro';

    const retorno = await prisma.$queryRawUnsafe(strSQL);

    return retorno;
  }

  async atualizar(vendaStatus: string, vendaId: number) {
    const venda = await prisma.venda.findUnique({
      where: {
        id: vendaId
      }
    });


    venda!.status = vendaStatus;

    await prisma.venda.update({
      data: {
        status: vendaStatus,
      },
      where: {
        id: vendaId
      }
    })

    return;
  }
}
