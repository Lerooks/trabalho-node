const express = require("express");
const { authentication, logout } = require("../controller/authentication-controller");
const deliveryManRouter = require("./delivery-man-router");
const deliveryRouter = require("./delivery-router");
const customerRouter = require("./customer-router");
const associateRouter = require("./associate-router");
const router = express.Router();
const auth = require('../middlewares/auth');

router.get("/", (_, res) => res.send({ alive: true }));

const API_VERSION = '/api/v1';

// middlewares
router.post(`${API_VERSION}/login`, authentication);
router.post(`${API_VERSION}/logout`,logout);

router.use(`${API_VERSION}/deliverymen`, deliveryManRouter);
router.use(`${API_VERSION}/deliveries`, deliveryRouter);
router.use(`${API_VERSION}/customers`, customerRouter);
router.use(`${API_VERSION}/associates`, associateRouter);

module.exports = router;