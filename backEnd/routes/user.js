const expess = require("express");
const router = expess.Router();
const {
    handleAddNewUser,
    handleGetAllUsers,
    handleGetUserById
} = require("../controllers/user");

router.post("/", handleAddNewUser);
router.get("/", handleGetAllUsers);
router.get("/:id", handleGetUserById);


module.exports = router;