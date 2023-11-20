import { Router } from "express";
import { ProdutoService } from "../services/produto.service";
import multer from 'multer';
import * as fs from 'fs';

const storage = multer.diskStorage({
  destination: function (req: any, file: any, cb: any) {
    const { id } = req.params;

    const path = `${process.env.CAMINHO_IMAGEM!}${id}/`;


    if (!fs.existsSync(path)){
        fs.mkdirSync(path);
    }

    cb(null, path)
  },
  filename: function (req: any, file: Express.Multer.File, cb: any) {
    const fileExt = file.originalname.split('.').slice(-1)

    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)

    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + fileExt);
  }
});

const upload = multer({ storage: storage });

export const produtoRoutes = Router();

const produtoService = new ProdutoService();

produtoRoutes.post('/pesquisar', async (req, res) => {
  const filtros = req.body;

  return res.json(await produtoService.pesquisar(filtros));
});

produtoRoutes.get('/listar-loja', async (req, res) => {
  const filtros = req.body;
  try {

  return res.json(await produtoService.pesquisarLoja());
  } catch (error) {
    console.log(error)
  }
});

produtoRoutes.get('/:id', async (req, res) => {
  const { id } = req.params;

  return res.json(await produtoService.carregar(+id));
});

produtoRoutes.post('/', async (req, res) => {
  const registro:any = req.body;

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

produtoRoutes.post('/gravar-imagens/:id/:principal', upload.single('file'), async (req, res) => {
  const { id, principal } = req.params;

  await produtoService.gravarImagens(req.file!.filename, +id, +principal);

  return res.json('OK');
})
