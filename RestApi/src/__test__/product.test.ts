import { ProdutoService } from '../services/produto.service';

describe('produto', () => {
    describe('o produto informado não deve existir', () => {
      it('retorno deve ser nulo', async () => {
        const produto = new ProdutoService()

        const retorno = await produto.buscarPorId(55);

        expect(retorno).toBe(null);
      })
    })

    describe('o produto dado deve existir', () => {
      it('retorno deve ser o Id informado', async () => {
        const produtoId = 2;
        const produto = new ProdutoService()

        const retorno = await produto.buscarPorId(produtoId);

        expect(retorno?.id).toBe(produtoId);
      })
    })


})
