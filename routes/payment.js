const express = require('express');
const router = express.Router();

const { isAuthenticatedUser } = require('../middlewares/auth');

const {processPayment, sendStripApiKey } = require('../controllers/paymentController');

//----------------------------------------------------------------

router.route('/payment/process').post(isAuthenticatedUser, processPayment);
router.route('/stripeapi').get(isAuthenticatedUser, sendStripApiKey);


module.exports = router;