const AppError = require("../utils/appError");
const bookingsRepository = require("../repositories/bookings.repository");
const servicesRepository = require("../repositories/services.repository");

const createBooking = async ({
  userId,
  serviceId,
  bookingDate,
  slot,
  notes,
}) => {
  const service = await servicesRepository.findServiceById(serviceId);

  if (!service) {
    throw new AppError("Servizio non trovato", 404);
  }

  try {
    return await bookingsRepository.createBooking({
      userId,
      serviceId,
      bookingDate,
      slot,
      notes,
    });
  } catch (error) {
    if (error.code === "23505") {
      throw new AppError("Questo slot è già prenotato", 409);
    }

    throw error;
  }
};

module.exports = {
  createBooking,
};
