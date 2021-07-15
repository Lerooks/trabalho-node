  
const express = require("express");

const deliveryManRouter = express.Router();
const deliveryManController = require("../controller/delivery-man-controller");

deliveryManRouter.get("/", deliveryManController.all);
deliveryManRouter.post("/", deliveryManController.save);
deliveryManRouter.get("/:cpf", deliveryManController.find);
deliveryManRouter.put("/:id", deliveryManController.update);
deliveryManRouter.put("/:id/disable", deliveryManController.disable);

module.exports = deliveryManRouter;
