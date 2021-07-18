const express = require("express");

const analyticRouter = express.Router();
const analyticController = require("../controller/analytic-controller");

analyticRouter.get("/admin", analyticController.admin);
analyticRouter.get("/financial", analyticController.financial);

module.exports = analyticRouter;