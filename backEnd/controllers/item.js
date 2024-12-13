const itemModel = require("../models/item");
async function handleAddItem(req, res) {
    const file = req.file;
    const body = req.body;
    const result = await itemModel.create({
        itemName: body.itemName,
        quantity: body.quantity,
        categoryName: body.categoryName,
        rating: body.rating,
        price: body.price,
        itemDescription: body.itemDescription,
        imgPath: file.path
    });
    res.status(201).json({
        message: "item added successfully",
        result
    });
}
async function handleDeleteItem(req, res) {
    const id = req.params.id;
    const result = await itemModel.findByIdAndDelete(id);
    const updatedData = await itemModel.findById(result.id);
    if (updatedData == undefined) {
        res.status(201).json({
            message: "item delted",
            itemId: id
        });
    }
    else {
        res.status(401).json({
            message: "failed to delete item",
        });
    }
}

async function handleUpdateItemData(req, res) {
    const id = req.params.id;
    const body = req.body;
    const update = await itemModel.findByIdAndUpdate(id, body);
    const updatedData = await itemModel.findById(update.id);
    res.status(200).json(updatedData);
}

async function handleAllGetItemData(req, res) {
    const allItems = await itemModel.find({});
    res.status(200).json(allItems);
}

async function handleGetItemByCategory(req, res) {
    const categoryName = req.params.categoryName;
    const result = await itemModel.find({ categoryName: categoryName });
    res.status(200).json(result);
}

module.exports = {
    handleAddItem,
    handleDeleteItem,
    handleUpdateItemData,
    handleAllGetItemData,
    handleGetItemByCategory
}