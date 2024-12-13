const express = require("express");
const router = express.Router();
const { handleAddCategory, handleDeletCategory, handleGetAllCategory } = require("../controllers/category");

router.get("/", handleGetAllCategory);
router.post("/", handleAddCategory);
router.delete("/:category", handleDeletCategory);

module.exports = router;