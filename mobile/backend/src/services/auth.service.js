const bcrypt = require("bcrypt");
const AppError = require("../utils/appError");
const usersRepository = require("../repositories/users.repository");
const { generateToken } = require("./token.service");

const registerUser = async ({ name, email, password }) => {
  const existingUser = await usersRepository.findUserByEmail(email);

  if (existingUser) {
    throw new AppError("Email già registrata", 409);
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await usersRepository.createUser({
    name,
    email,
    passwordHash,
  });

  const token = generateToken(user);

  return {
    user,
    token,
  };
};

const loginUser = async ({ email, password }) => {
  const user = await usersRepository.findUserByEmail(email);

  if (!user) {
    throw new AppError("Credenziali non valide", 401);
  }

  const isPasswordValid = await bcrypt.compare(password, user.password_hash);

  if (!isPasswordValid) {
    throw new AppError("Credenziali non valide", 401);
  }

  const token = generateToken(user);

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      created_at: user.created_at,
    },
  };
};

module.exports = {
  registerUser,
  loginUser,
};
