const express = require('express');
const bp = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');

// upload routes
const { get, post } = require('../src/upload/upload');

const app = express();

// enable files upload
app.use(
  fileUpload({
    createParentPath: true,
  })
);

// add other middleware
app.use(cors());
app.use(bp.json());

app.use(bp.urlencoded({ extended: true }));

app.get('/upload', get);
app.post('/upload', post);

module.exports = {
  app,
};
