const mongoose = require("mongoose");
const categorySchema = mongoose.Schema({
    categoryName: {
        type: String,
        require: true,
        unique: true
    },
    itemCount: {
        type: String,
    }
}, { timestamps: true });

const categoryModel = mongoose.model("categoryData", categorySchema);

module.exports = categoryModel;