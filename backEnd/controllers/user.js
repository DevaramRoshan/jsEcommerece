const userModel = require("../models/user");

async function handleAddNewUser(req, res) {
    const body = req.body;
    const result = await userModel.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        gender: body.gender,
        password: body.password,
        location: body.location,
        mobileNumeber: body.mobileNumber
    });

    return res.status(201).json({
        message: "user created successfully",
        id: result.id
    });
}

async function handleGetAllUsers(req, res) {
    const result = await userModel.find({});
    return res.status(200).json(result);
}
async function handleGetUserById(req, res) {
    const result = await userModel.findById(req.params.id);
    return res.status(200).json(result);
}

module.exports = {
    handleAddNewUser,
    handleGetAllUsers,
    handleGetUserById
}