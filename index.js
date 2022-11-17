const express = require('express');
const edgesRouter = require('./routes/edges.routes');
const path = require('path');
const bodyParser = require('body-parser');
const { createProxyMiddleware } = require('http-proxy-middleware');

const PORT = process.env.PORT || 3000;
const app = express();

const dirname = path.resolve();
app.use(express.static(path.resolve(dirname, 'html')));

app.use(
    '/geoserver',
    createProxyMiddleware({
        target: 'http://localhost:8080',
        changeOrigin: true
    })
);

app.use(bodyParser.json());
app.use(express.json());
app.use('/api', edgesRouter);

app.listen(PORT, () => console.log('server started on port ${PORT}'));

