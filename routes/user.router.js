const express = require('express');

const router = express.Router();
const { getAllUser } = require('../controllers/user.controller');
const {
    isAuthenticated
} = require('../middleware/auth.middleware');

const {
    profile,
    deleteAccount,
} = require('../controllers/user.controller');


router.route('./getusers').get(getAllUser);
router.route('/profile').get(isAuthenticated, profile);
router.route('/delete').delete(isAuthenticated, deleteAccount);


module.exports = router;