const express = require('express');
const router = express.Router();

const {
    getAllUser
} = require('../controllers/admin.controller');

router.route('/all-users').get(getAllUser);


module.exports = router;