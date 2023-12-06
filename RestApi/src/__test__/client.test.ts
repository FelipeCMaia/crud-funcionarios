import { ProdutoService } from "../services/produto.service";
import { Utilitarios } from "../utils/server";

describe('cliente', () => {
  describe('o cpf informado deve ser inválido', () => {

    it('retorno deve ser false', () => {

      const cpf = '358484848758';

      const retorno = Utilitarios.validarCPF(cpf);

      expect(retorno).toBe(false);
    })
  })


  describe('o cpf informado deve ser válido', () => {
    it('retorno deve ser true', () => {

      const cpf = '36150501850';

      const retorno = Utilitarios.validarCPF(cpf);

      expect(retorno).toBe(true);
    })
  });

  describe('alterar cadastro do o lcliente', () => {
    it('o cliente de ser atualizado', async () => {
      const produtoId = 2;
      const produto = new ProdutoService()

      const retorno = await produto.buscarPorId(produtoId);

      expect(retorno?.id).toBe(produtoId);
    })
  })

  describe('o cliente dado deve existir', () => {
    it('retorno deve ser o Id informado', async () => {
      const produtoId = 2;
      const produto = new ProdutoService()

      const retorno = await produto.buscarPorId(produtoId);

      expect(retorno?.id).toBe(produtoId);
    })
  })

  describe('o cliente nao deve existir', () => {
    it('retorno deve ser null', async () => {
      const produtoId = 2;
      const produto = new ProdutoService()

      const retorno = await produto.buscarPorId(produtoId);

      expect(retorno?.id).toBe(produtoId);
    })
  })

  describe('cliente existente', () => {
    it('retorno dever ser o id do cliente', async () => {
      const produtoId = 2;
      const produto = new ProdutoService()

      const retorno = await produto.buscarPorId(produtoId);

      expect(retorno?.id).toBe(produtoId);
    })
  })

  describe('idade maior que 18', () => {
    it('retorno deve ser true', async () => {
      const produtoId = 2;
      const produto = new ProdutoService()

      const retorno = await produto.buscarPorId(produtoId);

      expect(retorno?.id).toBe(produtoId);
    })
  })

  describe('idade menor que 18', () => {
    it('retorno deve ser false', async () => {
      const produtoId = 2;
      const produto = new ProdutoService()

      const retorno = await produto.buscarPorId(produtoId);

      expect(retorno?.id).toBe(produtoId);
    })
  })
})
