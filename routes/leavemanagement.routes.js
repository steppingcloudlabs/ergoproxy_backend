const express = require('express')
const router = express.Router()
const leaveManagementController = require("../controllers/leavemanagement.controller")();
/**
 * Leave Management Routes
 */
router
    .route("/userId/:userId/getleave")
    .get((req, res, next) =>
        leaveManagementController.getleave(req, res, next))
router
    .route("/userId/:userId/applyleave/leaverange/:start_date-:end_date")
    .post((req, res, next) =>
        leaveManagementController.applyleave(req, res, next))

module.exports = router;