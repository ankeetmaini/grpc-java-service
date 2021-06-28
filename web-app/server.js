const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({
  target: 'http://proxy:8080'
});
const app = express();
const publicPath = path.resolve(__dirname, 'dist');

app.use(express.static(publicPath));
app.all('/api/*', (req, res) => {
  req.url = req.url.replace('/api', '');
  proxy.web(req, res, (e) => console.error(e));
});
app.listen(3000, () => {
  console.log("node app started at 3000")
});
