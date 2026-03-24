const pool = require("../config/db");

const createBooking = async ({
  userId,
  serviceId,
  bookingDate,
  slot,
  notes,
}) => {
  const query = `
    INSERT INTO bookings (user_id, service_id, booking_date, slot, notes)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id, user_id, service_id, booking_date, slot, status, notes, created_at
  `;
  const values = [userId, serviceId, bookingDate, slot, notes || ""];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

const getBookingsByUserId = async (userId) => {
  const query = `
    SELECT
      b.id,
      b.booking_date,
      b.slot,
      b.status,
      b.notes,
      s.id AS service_id,
      s.name AS service_name,
      s.duration_minutes,
      s.price
    FROM bookings b
    JOIN services s ON s.id = b.service_id
    WHERE b.user_id = $1
    ORDER BY b.booking_date ASC, b.slot ASC
  `;
  const { rows } = await pool.query(query, [userId]);
  return rows;
};

const getAllBookings = async () => {
  const query = `
    SELECT
      b.id,
      b.booking_date,
      b.slot,
      b.status,
      b.notes,
      u.id AS user_id,
      u.name AS user_name,
      u.email AS user_email,
      s.id AS service_id,
      s.name AS service_name
    FROM bookings b
    JOIN users u ON u.id = b.user_id
    JOIN services s ON s.id = b.service_id
    ORDER BY b.booking_date ASC, b.slot ASC
  `;
  const { rows } = await pool.query(query);
  return rows;
};

const findBookingById = async (id) => {
  const query = `
    SELECT *
    FROM bookings
    WHERE id = $1
  `;
  const { rows } = await pool.query(query, [id]);
  return rows[0] || null;
};

const updateBookingStatus = async (id, status) => {
  const query = `
    UPDATE bookings
    SET status = $1, updated_at = NOW()
    WHERE id = $2
    RETURNING *
  `;
  const { rows } = await pool.query(query, [status, id]);
  return rows[0] || null;
};

const deleteBooking = async (id) => {
  const query = `
    DELETE FROM bookings
    WHERE id = $1
    RETURNING id
  `;
  const { rows } = await pool.query(query, [id]);
  return rows[0] || null;
};

module.exports = {
  createBooking,
  getBookingsByUserId,
  getAllBookings,
  findBookingById,
  updateBookingStatus,
  deleteBooking,
};
