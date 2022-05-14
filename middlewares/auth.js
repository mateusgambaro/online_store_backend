const jwt = require('jsonwebtoken');

const segredo = 'senhaSuperSecreta13122100';

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    const err = new Error('Token not found');
    err.statusCode = 401;
    return next(err);
  }

  try {
    const payload = jwt.verify(token, segredo);


    req.user = payload

    return next()
  } catch (err) {
    err.statusCode = 401;
    return next(err);
  }
};