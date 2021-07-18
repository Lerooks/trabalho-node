  
const express = require("express");

const deliveryManRouter = express.Router();
const deliveryManController = require("../controller/delivery-man-controller");

deliveryManRouter.get("/", deliveryManController.all);
deliveryManRouter.post("/", deliveryManController.save);
deliveryManRouter.get("/:cpf", deliveryManController.findByCpf);
deliveryManRouter.put("/:id", deliveryManController.update);
deliveryManRouter.put("/:id/disable", deliveryManController.disable);
deliveryManRouter.get('/:id/analytics/financial', deliveryManController.report)

module.exports = deliveryManRouter;
