const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: Number,
        require: true
    },
    location: {
        type: Object,
        require: true
    }
}, { timestamps: true });

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
