const express = require("express");

const customerRouter = express.Router();
const customerController = require("../controller/customer-controller");

customerRouter.get("/", customerController.all);
customerRouter.post("/", customerController.save);
customerRouter.get("/:cnpj", customerController.findByCnpf);
customerRouter.put("/:id", customerController.update);
customerRouter.delete("/:id", customerController.delete);

module.exports = customerRouter;
