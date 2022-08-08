const methodNotAllowed = (res, res, next) => {
  next({
    status: 405,
    message: `${req.method} not allowed for ${req.orginaUrl}`,
  });
};

module.exports = methodNotAllowed;
