const express = require("express");
const router = express.Router();
const { handleAdminVerification } = require("../controllers/admin");

router.post("/verify", handleAdminVerification);

module.exports = router;