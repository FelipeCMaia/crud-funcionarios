import { Router } from "express";
import { ProdutoService } from "../services/produto.service";
import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const { id } = req.params;

    const path = `${process.env.CAMINHO_IMAGEM!}${id}/`

    console.log('sei la')

    cb(null, path)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)

    console.log(uniqueSuffix)

    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
});

const upload = multer({ storage: storage });

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

produtoRoutes.post('/gravar-imagens/:id', upload.single('file'), async (req, res) => {
  const { id } = req.params;

  console.log(req.body);

  //await produtoService.gravarImagens(+id)

  return res.json('OK');
})
