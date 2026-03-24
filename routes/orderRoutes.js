const express = require("express");
const orderController = require("../controllers/orderController");

const router = express.Router();

router
  .route("/")
  .get(orderController.getAllOrders)
  .post(orderController.createOrder);

router.route("/:id/complete").patch(orderController.completeOrder);

module.exports = router;
