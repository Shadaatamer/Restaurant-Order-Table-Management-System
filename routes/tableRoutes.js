const express = require("express");
const tableController = require("../controllers/tableController");

const router = express.Router();

router
  .route("/")
  .get(tableController.getAllTables)
  .post(tableController.createTable);

router.route("/:id").patch(tableController.updateTableAvailability);

module.exports = router;
