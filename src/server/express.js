import express from 'express'; 
import path from 'path';
const server = express(); 

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

const staticMiddleware = express.static('dist'); 
server.use(staticMiddleware);

// server.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));

const PORT = process.env.PORT || 2000;

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`); 
}); 

