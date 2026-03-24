import express from "express";
import { createBooking, getMyBookings } from "../controllers/bookings.controller.js";

const router = express.Router();

router.get("/", getMyBookings);
router.post("/", createBooking);

export default router;