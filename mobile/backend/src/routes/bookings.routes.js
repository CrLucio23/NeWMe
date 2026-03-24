const express = require("express");
const {
  createBooking,
  getMyBookings,
  getAllBookings,
  updateStatus,
  removeBooking,
} = require("../controllers/bookings.controller");
const { protect, authorize } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/", protect, createBooking);
router.get("/me", protect, getMyBookings);
router.get("/", protect, authorize("admin"), getAllBookings);
router.patch("/:id/status", protect, authorize("admin"), updateStatus);
router.delete("/:id", protect, removeBooking);

module.exports = router;
