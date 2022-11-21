const express = require('express');
const authController = require("../RouteController/authController")
const orderController = require("../RouteController/orderController");

const router = express.Router();

router.route('/').get(authController.protect, authController.restrictTo('admin'), orderController.getAllOrders).post(authController.protect, authController.restrictTo('user'), orderController.createOrder)

router.route('/:orderId').patch(authController.protect, authController.restrictTo('admin'), orderController.updateOrder).delete(authController.protect, authController.restrictTo('admin'), orderController.deleteOrder);

module.exports = router; 