const express = require('express');
const urlRouter = express.Router();

const {
    isAuthenticated
} = require('../middleware/auth.middleware');

const {
    anony_short,
    login_short,
    getMyUrls,
    viewUrl,
    deleteUrl,
    editUrl,
    updateUrlStatus
} = require('../controllers/url.controller');

urlRouter.route('/anony-short').post(anony_short);
urlRouter.route('/login-short').post(isAuthenticated, login_short);
urlRouter.route('/my-urls').get(isAuthenticated, getMyUrls);
urlRouter.route('/view/:hash').get(isAuthenticated, viewUrl);
urlRouter.route('/delete/:hash').delete(isAuthenticated, deleteUrl);
urlRouter.route('/edit/:hash').put(isAuthenticated, editUrl);
urlRouter.route('/update-status/:hash').patch(isAuthenticated, updateUrlStatus);

module.exports = urlRouter;