const mongoose = require("mongoose");
const itemSchema = mongoose.Schema({
    itemName: {
        type: String,
        require: true,
        unique: true
    },
    quantity: {
        type: String,
        require: true
    },
    categoryName: {
        type: String,
        require: true
    },
    itemDescription: {
        type: String
    },
    rating: {
        type: String
    },
    price: {
        type: String
    },
    imgPath: {
        type: String
    }
}, { timestamps: true });

const itemModel = mongoose.model("itemData", itemSchema);
module.exports = itemModel;