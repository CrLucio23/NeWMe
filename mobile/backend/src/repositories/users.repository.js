const pool = require("../config/db");

const createUser = async ({ name, email, passwordHash, role = "user" }) => {
  const query = `
    INSERT INTO users (name, email, password_hash, role)
    VALUES ($1, $2, $3, $4)
    RETURNING id, name, email, role, created_at
  `;
  const values = [name, email, passwordHash, role];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

const findUserByEmail = async (email) => {
  const query = `
    SELECT id, name, email, password_hash, role, created_at
    FROM users
    WHERE email = $1
  `;
  const { rows } = await pool.query(query, [email]);
  return rows[0] || null;
};

const findUserById = async (id) => {
  const query = `
    SELECT id, name, email, role, created_at
    FROM users
    WHERE id = $1
  `;
  const { rows } = await pool.query(query, [id]);
  return rows[0] || null;
};

const getAllUsers = async () => {
  const query = `
    SELECT id, name, email, role, created_at
    FROM users
    ORDER BY id DESC
  `;
  const { rows } = await pool.query(query);
  return rows;
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
  getAllUsers,
};
