const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/env");
const AppError = require("../utils/appError");

const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(new AppError("Token mancante", 401));
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    next();
  } catch (error) {
    next(new AppError("Token non valido o scaduto", 401));
  }
};

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new AppError("Accesso negato", 403));
    }

    next();
  };
};

module.exports = {
  protect,
  authorize,
};
