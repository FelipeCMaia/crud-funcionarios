import { Router } from "express";
import { AutenticacaoService } from "../services/autenticacao.service";

export const autenticacaoRoutes = Router();

autenticacaoRoutes.post('/', async (req, res) => {
  const autenticacaService = new AutenticacaoService();
  const { email, senha } = req.body;

  return res.json(await autenticacaService.autenticar(email, senha));
});