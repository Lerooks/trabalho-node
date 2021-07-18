const express = require("express");

const associateRouter = express.Router();
const associateController  = require("../controller/associate-controller");

associateRouter.get("/", associateController.all);
associateRouter.post("/", associateController.save);
associateRouter.get("/:cnpj", associateController.findByCnpj);
associateRouter.put("/:id", associateController.update);
associateRouter.delete("/:id", associateController.delete);

module.exports = associateRouter;