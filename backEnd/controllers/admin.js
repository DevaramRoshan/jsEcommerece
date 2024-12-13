const adminModel = require("../models/admin");

async function handleAdminVerification(req, res) {
    const body = req.body;
    const getCredentials = await adminModel.find({ email: body.email });
    if ((getCredentials[0].email == body.email) && (getCredentials[0].password == body.password)) {
        return res.status(200).json({
            message: "verified",
            adminName: getCredentials[0].Name,
        })
    }
    else {
        return res.status(401).json({
            message: "unauthorized"
        })
    }
}

module.exports = {
    handleAdminVerification
}