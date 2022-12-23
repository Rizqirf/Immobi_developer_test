const errorHandler = (err, req, res, next) => {
  let name = err.name;
  let code;
  let message;
  switch (name) {
    case "bad_request":
      code = 400;
      message = "Please fill in the requiered fields";
      break;
    case "SequelizeUniqueConstraintError":
    case "SequelizeValidationError":
      code = 400;
      message = err.errors[0].message;
      break;
    case "data_not_found":
      code = 404;
      message = `Data tidak ditemukan`;
      break;
    default:
      code = 500;
      message = "Internal Server Error";
      break;
  }
  res.status(code).json({ message });
};

module.exports = errorHandler;
