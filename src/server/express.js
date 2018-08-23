import express from 'express'; 
import path from 'path';
const server = express();
import parser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import router from './routes';

const isProd = process.env.NODE_ENV === 
"production"
if (!isProd) {
  const webpack = require('webpack'); 
  const config = require('../../config/webpack.dev.js');
  const compiler = webpack(config); 
  const webpackDevMiddleware = require('webpack-dev-middleware')(
    compiler,
    config.devServer
  );
  const webpackHotMiddleware = require('webpack-hot-middleware')(
    compiler,
    config.devServer
  );
  //This is in order, webpack dev middleware after webpack hot middleware after static middleware 
  server.use(webpackDevMiddleware); 
  server.use(webpackHotMiddleware);
}
const compression = require('compression');
server.use(compression()); 

const staticMiddleware = express.static('dist'); 
server.use(staticMiddleware);

server.use('/api', router);
server.use(parser.json());
server.use(parser.urlencoded({extended: true}));
// server.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`); 
}); 

