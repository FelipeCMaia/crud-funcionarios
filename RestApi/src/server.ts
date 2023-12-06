import 'dotenv/config';
import 'express-async-errors';

import createServer from './utils/server';

const PORT = process.env.PORT || 4000;

const app = createServer();

app.get('/', (req, res) => {
  return res.json('OK');
})

const server = app.listen(PORT, () => {
  console.log('listening on http://localhost:' + PORT);
})

export default server;
