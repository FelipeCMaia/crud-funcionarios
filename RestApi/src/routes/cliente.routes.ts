import { Router } from "express";
import { ClienteService } from "../services/cliente.service";

export const clienteRoutes = Router();

const clienteService = new ClienteService();

clienteRoutes.post('/pesquisar', async (req, res) => {
  const filtros = req.body;

  return res.json(await clienteService.pesquisar(filtros));
});

clienteRoutes.get('/:id', async (req, res) => {
  const { id } = req.params;

  return res.json(await clienteService.carregar(+id));
});

clienteRoutes.post('/', async (req, res) => {
  const registro = req.body;

  return res.json(await clienteService.gravar(registro));
});

clienteRoutes.put('/', async (req, res) => {
  const registro = req.body;

  return res.json(await clienteService.atualizar(registro))
});

clienteRoutes.delete('/:id', async (req, res) => {
  const { id } = req.params;

  return res.json(await clienteService.remover(+id));
});


clienteRoutes.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  return res.json(await clienteService.autenticar(email, senha));
});
