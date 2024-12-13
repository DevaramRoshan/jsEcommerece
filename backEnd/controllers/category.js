const categoryModel = require("../models/category");
const itemModel = require("../models/item");

async function handleAddCategory(req, res) {
    const body = req.body;
    const result = await categoryModel.create({
        categoryName: body.categoryName,
        itemCount: body.itemCount
    });
    return res.status(201).json({ ...result, message: "category added!!" });
}

async function handleGetAllCategory(req, res) {
    const result = await categoryModel.find({});
    res.status(200).json(result);
}
async function handleDeletCategory(req, res) {
    const body = req.params.category;
    const deleteAllCategoryItem = await itemModel.deleteMany({ categoryName: body });
    const result = await categoryModel.deleteOne({ categoryName: body });
    res.status(200).json({
        message: "category deleted",
        result: result
    });
}

module.exports = {
    handleAddCategory,
    handleDeletCategory,
    handleGetAllCategory
}