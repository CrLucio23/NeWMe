const asyncHandler = require("../utils/asyncHandler");
const AppError = require("../utils/appError");
const authService = require("../services/auth.service");

const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new AppError("name, email e password sono obbligatori", 400);
  }

  const result = await authService.registerUser({ name, email, password });

  res.status(201).json({
    success: true,
    message: "Registrazione completata",
    data: result,
  });
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new AppError("email e password sono obbligatori", 400);
  }

  const result = await authService.loginUser({ email, password });

  res.status(200).json({
    success: true,
    message: "Login effettuato con successo",
    data: result,
  });
});

module.exports = {
  register,
  login,
};
