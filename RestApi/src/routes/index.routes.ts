import { Router } from "express";
import { autenticacaoRoutes } from "./autenticacao.routes";
import { usuarioRoutes } from "./usuario.routes";
import { produtoRoutes } from "./produto.routes";
import { clienteRoutes } from "./cliente.routes";
import { vendaRoutes } from "./venda.routes";

const routes = Router();

routes.use('/autenticacao', autenticacaoRoutes);
routes.use('/usuario', usuarioRoutes);
routes.use('/produto', produtoRoutes);
routes.use('/cliente', clienteRoutes);
routes.use('/venda', vendaRoutes);

routes.get("/teste", async (_, response) => {
  const data = {
    data: new Date(),
  };

  return response.json(data);
});

export default routes;
