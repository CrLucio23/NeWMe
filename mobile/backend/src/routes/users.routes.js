const express = require("express");
const { getMe, getUsers } = require("../controllers/users.controller");
const { protect, authorize } = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/me", protect, getMe);
router.get("/", protect, authorize("admin"), getUsers);

module.exports = router;
