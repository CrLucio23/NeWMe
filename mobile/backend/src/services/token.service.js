const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpiresIn } = require("../config/env");

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    jwtSecret,
    { expiresIn: jwtExpiresIn },
  );
};

module.exports = {
  generateToken,
};
