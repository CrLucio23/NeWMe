const asyncHandler = require("../utils/asyncHandler");
const AppError = require("../utils/appError");
const bookingsRepository = require("../repositories/bookings.repository");
const bookingsService = require("../services/bookings.service");

const createBooking = asyncHandler(async (req, res) => {
  const { serviceId, bookingDate, slot, notes } = req.body;

  if (!serviceId || !bookingDate || !slot) {
    throw new AppError("serviceId, bookingDate e slot sono obbligatori", 400);
  }

  const booking = await bookingsService.createBooking({
    userId: req.user.id,
    serviceId,
    bookingDate,
    slot,
    notes,
  });

  res.status(201).json({
    success: true,
    message: "Prenotazione creata con successo",
    data: booking,
  });
});

const getMyBookings = asyncHandler(async (req, res) => {
  const bookings = await bookingsRepository.getBookingsByUserId(req.user.id);

  res.status(200).json({
    success: true,
    results: bookings.length,
    data: bookings,
  });
});

const getAllBookings = asyncHandler(async (req, res) => {
  const bookings = await bookingsRepository.getAllBookings();

  res.status(200).json({
    success: true,
    results: bookings.length,
    data: bookings,
  });
});

const updateStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;

  if (!status) {
    throw new AppError("status obbligatorio", 400);
  }

  const booking = await bookingsRepository.updateBookingStatus(
    req.params.id,
    status,
  );

  if (!booking) {
    throw new AppError("Prenotazione non trovata", 404);
  }

  res.status(200).json({
    success: true,
    message: "Stato aggiornato",
    data: booking,
  });
});

const removeBooking = asyncHandler(async (req, res) => {
  const booking = await bookingsRepository.findBookingById(req.params.id);

  if (!booking) {
    throw new AppError("Prenotazione non trovata", 404);
  }

  if (req.user.role !== "admin" && booking.user_id !== req.user.id) {
    throw new AppError("Non autorizzato", 403);
  }

  await bookingsRepository.deleteBooking(req.params.id);

  res.status(200).json({
    success: true,
    message: "Prenotazione eliminata",
  });
});

module.exports = {
  createBooking,
  getMyBookings,
  getAllBookings,
  updateStatus,
  removeBooking,
};
