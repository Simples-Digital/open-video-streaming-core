const { FILES_IS_UNDEFINED_ERROR, FORBIDDEN_UPLOAD_ERROR } = require('../settings/default_messages');
const { save } = require('../filewriter/writer');

/**
 * @author David Alen <davidalen51@gmail.com>
 * @param {Request} req
 * @param {Response} res
 */
const get = (req, res) => {
  res.status(200).json({ message: 'Hello, from uploads!' });
};

/**
 * @author David Alen <davidalen51@gmail.com>
 * @param {Request} req
 * @param {Response} res
 */
const post = (req, res) => {
  if (!req.headers.email || !req.headers.user_key) {
    res.status(FORBIDDEN_UPLOAD_ERROR.status).json(FORBIDDEN_UPLOAD_ERROR);
    return;
  }

  if (req.files == undefined) {
    res.status(FILES_IS_UNDEFINED_ERROR.status).json(FILES_IS_UNDEFINED_ERROR);
    return;
  }

  if (req.files.video == undefined) {
    res.status(FILES_IS_UNDEFINED_ERROR.status).json(FILES_IS_UNDEFINED_ERROR);
    return;
  }

  save('usuario_01', req.files.video);

  res.status(200).json({ message: 'OK' });
};

module.exports = {
  get,
  post,
};
