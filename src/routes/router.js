const express = require("express");
const { authentication, logout } = require("../controllers/authenticationController");
const deliveryManRouter = require("./delivery-man-router");
const deliveryRouter = require("./delivery-router");
const customerRouter = require("./customer-router");
const router = express.Router();

router.get("/", (_, res) => res.send("It's working"));

const API_VERSION = '/api/v1';

router.post(`${API_VERSION}/login`, authentication);
router.delete(`${API_VERSION}/logout`, logout);

router.use("/api/v1/deliverymen", deliveryManRouter);
router.use("/api/v1/deliveries", deliveryRouter);
router.use("/api/v1/customers", customerRouter);

module.exports = router;