const express = require("express");
const reviewController = require("../RouteController/reviewController")
const authController = require("../RouteController/authController")


const router = express.Router({mergeParams:true});

router.route('/').get(reviewController.getReviews).post(authController.protect, authController.restrictTo('user'), reviewController.createReviews);

module.exports = router;