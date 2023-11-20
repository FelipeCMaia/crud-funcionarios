import { Router } from "express";
import { VendaService } from "../services/venda.service";

export const vendaRoutes = Router();

const vendaService = new VendaService();

vendaRoutes.post('/pesquisar', async (req, res) => {
  const filtros = req.body;

  return res.json(await vendaService.pesquisar(filtros));
});

vendaRoutes.get('/:id', async (req, res) => {
  const { id } = req.params;

  return res.json(await vendaService.carregar(+id));
});

vendaRoutes.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  return res.json(await vendaService.atualizar(status, +id));
});
