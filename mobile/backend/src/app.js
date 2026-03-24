const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const usersRoutes = require("./routes/users.routes");
const bookingsRoutes = require("./routes/bookings.routes");
const servicesRoutes = require("./routes/services.routes");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Booking API attiva" });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/bookings", bookingsRoutes);
app.use("/api/services", servicesRoutes);

app.use(errorHandler);

module.exports = app;
