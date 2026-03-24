const asyncHandler = require("../utils/asyncHandler");
const AppError = require("../utils/appError");
const usersRepository = require("../repositories/users.repository");

const getMe = asyncHandler(async (req, res) => {
  const user = await usersRepository.findUserById(req.user.id);

  if (!user) {
    throw new AppError("Utente non trovato", 404);
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});

const getUsers = asyncHandler(async (req, res) => {
  const users = await usersRepository.getAllUsers();

  res.status(200).json({
    success: true,
    results: users.length,
    data: users,
  });
});

module.exports = {
  getMe,
  getUsers,
};
