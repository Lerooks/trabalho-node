const express = require("express");
const { authentication, logout } = require("../controller/authentication-controller");
const deliveryManRouter = require("./delivery-man-router");
const deliveryRouter = require("./delivery-router");
const customerRouter = require("./customer-router");
const associateRouter = require("./associate-router");
const analyticsRouter = require("./analytic-router");
const router = express.Router();
const auth = require('../middlewares/auth');
const accessControl = require('../middlewares/access_control');

router.get("/", (_, res) => res.send({ alive: true }));

const API_VERSION = '/api/v1';

// middlewares
router.post(`${API_VERSION}/login`, authentication);
router.post(`${API_VERSION}/logout`, logout);

router.use(`${API_VERSION}/deliverymen`, auth, accessControl, deliveryManRouter);
router.use(`${API_VERSION}/deliveries`, auth, accessControl, deliveryRouter);
router.use(`${API_VERSION}/customers`, auth, accessControl, customerRouter);
router.use(`${API_VERSION}/associates`, accessControl, associateRouter);
router.use(`${API_VERSION}/analytics`, auth, accessControl, analyticsRouter);

module.exports = router;