import { Router } from "express";
import { ClienteService } from "../services/cliente.service";
import { VendaService } from "../services/venda.service";

export const clienteRoutes = Router();

const clienteService = new ClienteService();
const vendaService = new VendaService();

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

clienteRoutes.get('/vendas/:id', async (req, res) => {
  const { id } = req.params;

  return res.json(await clienteService.listarVendas(+id));
});


clienteRoutes.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  return res.json(await clienteService.autenticar(email, senha));
});

clienteRoutes.get('/listar-enderecos/:id', async (req, res) => {
  const { id } = req.params;

  return res.json(await clienteService.listarEnderecos(+id));
});

clienteRoutes.post('/concluir-venda/:cliente_id', async (req, res) => {
  const { cliente_id } = req.params;
  const registro = req.body;

  return res.json(await vendaService.gravarVenda(registro, +cliente_id));
});

clienteRoutes.get('/listar-compras/:id', async (req, res) => {
  const { id } = req.params;

  return res.json(await clienteService.listarEnderecos(+id));
});

clienteRoutes.get('/pedido/:id', async (req, res) => {
  const { id } = req.params;

  return res.json(await vendaService.carregar(+id));
});
