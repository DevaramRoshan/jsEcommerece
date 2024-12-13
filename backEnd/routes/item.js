const express = require("express");
const multer = require("multer");
const router = express.Router();
const {
    handleAddItem,
    handleDeleteItem,
    handleUpdateItemData,
    handleAllGetItemData,
    handleGetItemByCategory
} = require("../controllers/item");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        return cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

router.post("/", upload.single("image"), handleAddItem);
router.delete("/:id", handleDeleteItem);
router.put("/:id", handleUpdateItemData);
router.get("/", handleAllGetItemData);
router.get("/:categoryName", handleGetItemByCategory);


module.exports = router;