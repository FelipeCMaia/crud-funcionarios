import { Router } from "express";
import { ProdutoService } from "../services/produto.service";

export const produtoRoutes = Router();

const produtoService = new ProdutoService();

produtoRoutes.post('/pesquisar', async (req, res) => {
  const filtros = req.body;

  return res.json(await produtoService.pesquisar(filtros));
});

produtoRoutes.get('/:id', async (req, res) => {
  const { id } = req.params;

  return res.json(await produtoService.carregar(+id));
});

produtoRoutes.post('/', async (req, res) => {
  const registro = req.body;

  return res.json(await produtoService.gravar(registro));
});

produtoRoutes.put('/', async (req, res) => {
  const registro = req.body;

  delete registro.id;

  return res.json(await produtoService.atualizar(registro))
});

produtoRoutes.delete('/:id', async (req, res) => {
  const { id } = req.params;

  return res.json(await produtoService.remover(+id));
});

produtoRoutes.post('/alterar-status/:id', async (req, res) => {
  const { id } = req.params;

  return res.json(await produtoService.alterarStatus(+id));
})
