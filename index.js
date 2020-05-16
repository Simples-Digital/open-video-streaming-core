const express = require('express');
const { get, post } = require('./src/upload');

const app = express();

const port = 8080;

app.get('/upload', get);
app.post('/upload', post);

app.listen(port);
