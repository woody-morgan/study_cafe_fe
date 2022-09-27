/* eslint-disable @typescript-eslint/no-var-requires */
const http = require('http');
const https = require('https');
const next = require('next');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const enableHttps = process.env.ENABLE_HTTPS === 'true';
const app = next({ dev });
const handle = app.getRequestHandler();
const express = require('express');
const fs = require('fs');

const httpsOptions = {
  key: fs.readFileSync('./localhost.key'),
  cert: fs.readFileSync('./localhost.crt'),
};

app.prepare().then(() => {
  const app = express();
  const server = enableHttps ? https.createServer(httpsOptions, app) : http.createServer(app);

  app.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> Ready on ${port}`);
  });
});
