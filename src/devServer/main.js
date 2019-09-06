/*
Not using for now, may again in the future though...

require('@babel/register');
//const path = require('path');
const webpack = require('webpack');
const express = require('express');

const config = require('../../webpack.dev.js');

const server = express();
const compiler = webpack(config);
const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, config.devServer);
const webpackHotMiddleware = require('webpack-hot-middleware')(compiler, config.devServer);

server.use(webpackDevMiddleware);
server.use(webpackHotMiddleware);
server.use(express.static('dist'));

const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
*/