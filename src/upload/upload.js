const { FILES_IS_UNDEFINED_ERROR, FORBIDDEN_UPLOAD_ERROR } = require('../settings/default_messages');

const get = (req, res) => {
  res.status(200).json({ message: 'Hello, from uploads!' });
  return 0;
};

const post = (req, res) => {
  // TODO: Get file from express and store it in cache for next microservice to work

  if (!req.headers.email || !req.headers.user_key) {
    res.status(FORBIDDEN_UPLOAD_ERROR.status).json(FORBIDDEN_UPLOAD_
  }

  if (req.files == undefined) {
    res.status(FILES_IS_UNDEFINED_ERROR.status).json(FILES_IS_UNDEFINED_ERROR);
    return;
  }

  res.status(200).json({ message: 'OK' });
};

module.exports = {
  get,
  post,
};
