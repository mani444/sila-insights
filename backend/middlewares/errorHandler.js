const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 400 : res.statusCode;

  res.status(statusCode);
  return res.json({
    message: error.message,
    stack: process.env.NODE_MODE == 'development' ? error.stack : null,
  });
};

export default errorHandler;
