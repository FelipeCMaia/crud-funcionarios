import { Router } from "express";
import { autenticacaoRoutes } from "./autenticacao.routes";
import { usuarioRoutes } from "./usuario.routes";
import { produtoRoutes } from "./produto.routes";
import { clienteRoutes } from "./cliente.routes";

const routes = Router();

routes.use('/autenticacao', autenticacaoRoutes);
routes.use('/usuario', usuarioRoutes);
routes.use('/produto', produtoRoutes);
routes.use('/cliente', clienteRoutes);

routes.get("/teste", async (_, response) => {
  const data = {
    data: new Date(),
  };

  return response.json(data);
});

export default routes;
