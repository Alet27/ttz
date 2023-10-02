const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;

const wsProxy = createProxyMiddleware('/ws', {
    target: 'wss://fstream.binance.com',
    changeOrigin: true,
    ws: true,
});

app.use(wsProxy);

app.listen(port, () => {
    console.log(`прокси сервер запущен http://localhost:${port}`);
});
