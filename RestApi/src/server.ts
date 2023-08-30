import express, { NextFunction, Request, Response } from 'express';
import 'dotenv/config';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';

import routes from './routes/index.routes';
import { AppError } from './error/AppError';

const PORT = process.env.PORT || 4000;

const app = express();

app.set("trust proxy", true);

app.use(cors());

app.use(express.static(path.join(__dirname, '..','public')));

app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  console.log(err);

  if (err instanceof AppError) { 
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }  

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.get('/', (req, res) => {
  return res.json('OK');
})


app.listen(PORT, () => {
  console.log('listening on http://localhost:' + PORT);
})