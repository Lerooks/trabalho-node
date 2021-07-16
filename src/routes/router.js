const express = require("express");
const deliveryManRouter = require("./delivery-man-router");
const deliveryRouter = require("./delivery-router");
const customerRouter = require("./customer-router");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("It's working");
});

router.use("/api/v1/deliverymen", deliveryManRouter);
router.use("/api/v1/deliveries", deliveryRouter);
router.use("/api/v1/customers", customerRouter);

module.exports = router;