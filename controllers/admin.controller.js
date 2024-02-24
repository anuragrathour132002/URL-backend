const User = require('../models/User');

exports.getAllUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            users
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}
