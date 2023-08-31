import { Router } from "express";
import { UsuarioService } from "../services/usuario.service";

export const usuarioRoutes = Router();

const usuarioService = new UsuarioService();

usuarioRoutes.get('/', async (req, res) => {
  const filtros = req.query;

  return res.json(await usuarioService.pesquisar(filtros));
});

usuarioRoutes.get('/:id', async (req, res) => {
  const { id } = req.params;

  return res.json(await usuarioService.carregar(+id));
});

usuarioRoutes.post('/', async (req, res) => {
  const registro = req.body;

  return res.json(await usuarioService.gravar(registro));
});

usuarioRoutes.put('/', async (req, res) => {  
  const registro = req.body;

  return res.json(await usuarioService.atualizar(registro))
});

usuarioRoutes.delete('/:id', async (req, res) => {
  const { id } = req.params;

  return res.json(await usuarioService.remover(+id));
});