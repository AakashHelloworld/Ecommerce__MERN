const express = require("express");
const shopReviewController = require("../RouteController/reviewShopController");
const authController = require("../RouteController/authController")


const router = express.Router();

router.route("/").get(shopReviewController.getShopReviews).post(authController.protect,shopReviewController.createReviews);

module.exports = router;