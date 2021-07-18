const express = require("express");
const { authentication, logout } = require("../controller/authentication-controller");
const deliveryManRouter = require("./delivery-man-router");
const deliveryRouter = require("./delivery-router");
const customerRouter = require("./customer-router");
const router = express.Router();

router.get("/", (_, res) => res.send("It's working"));

const API_VERSION = '/api/v1';

router.post(`${API_VERSION}/login`, authentication);
router.delete(`${API_VERSION}/logout`, logout);

router.use(`${API_VERSION}/deliverymen`, deliveryManRouter);
router.use(`${API_VERSION}/deliveries`, deliveryRouter);
router.use(`${API_VERSION}/customers`, customerRouter);

module.exports = router;