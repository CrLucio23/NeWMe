const pool = require("../config/db");

const getAllServices = async () => {
  const query = `
    SELECT id, name, description, duration_minutes, price
    FROM services
    ORDER BY id ASC
  `;
  const { rows } = await pool.query(query);
  return rows;
};

const findServiceById = async (id) => {
  const query = `
    SELECT id, name, description, duration_minutes, price
    FROM services
    WHERE id = $1
  `;
  const { rows } = await pool.query(query, [id]);
  return rows[0] || null;
};

module.exports = {
  getAllServices,
  findServiceById,
};
