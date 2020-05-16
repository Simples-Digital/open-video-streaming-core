const get = (req, res) => {
  res.status(200).json({ message: 'Hello, from uploads!' });
  return 0;
};

const post = (req, res) => {
  // TODO: Get file from express and store it in cache for next microservice to work
};

module.exports = {
  get,
  post,
};
