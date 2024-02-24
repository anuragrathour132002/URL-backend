const User = require('../models/User');
const Url = require('../models/Url');
const Analytics = require('../models/Analytics');

exports.profile = async (req, res) => {
    try {

        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }

        res.status(200)
            .json({
                success: true,
                user
            })

    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

exports.deleteAccount = async (req, res) => {
    try {
        const userId = req.user._id;
        await User.findByIdAndDelete(userId);
        res.clearCookie('token');
        res.status(200).json({
            success: true,
            message: "Account Deleted Successfully"
        });
    } catch (error) {
        console.error("Error deleting account:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete account"
        });
    }
};

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
};