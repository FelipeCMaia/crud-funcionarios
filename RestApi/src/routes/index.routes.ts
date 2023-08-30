import { Router } from "express";
import { autenticacaoRoutes } from "./autenticacao.routes";
import { usuarioRoutes } from "./usuario.routes";

const routes = Router();

routes.use('/autenticacao', autenticacaoRoutes);
routes.use('/usuario', usuarioRoutes);

routes.get("/teste", async (_, response) => {
  const data = {    
    data: new Date(),
  };

  return response.json(data);
}); 

export default routes;