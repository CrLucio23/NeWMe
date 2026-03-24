const express = require("express");
const servicesRepository = require("../repositories/services.repository");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const services = await servicesRepository.getAllServices();

    res.status(200).json({
      success: true,
      results: services.length,
      data: services,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
