const express = require('express');
const ctrl = require('../controllers/users');
const router = express.Router();
const validate = require('../middleware/validates');
const { auth } = require('../middleware/auth');

router.post('/signup',validate.loginAndSignup, ctrl.signup);

router.post('/login',validate.loginAndSignup, ctrl.login);

router.get('/current', auth, ctrl.current);

router.post('/logout',auth, ctrl.logout);

module.exports = router;