const express = require("express");
const deliveryManRouter = require("./delivery-man-router");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("It's working");
});

router.use("/api/v1/deliverymen", deliveryManRouter);

module.exports = router;