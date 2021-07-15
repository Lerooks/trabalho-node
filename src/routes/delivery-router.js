  
const express = require("express");

const deliveryRouter = express.Router();
const deliveryController = require("../controller/delivery-controller");

deliveryRouter.get("/", deliveryController.all);
deliveryRouter.get("/:id", deliveryController.findById);
deliveryRouter.post("/", deliveryController.save);
deliveryRouter.put("/:id", deliveryController.update);
deliveryRouter.delete("/:id", deliveryController.delete);

module.exports = deliveryRouter;
