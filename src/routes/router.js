const express = require("express");
const { authentication, logout } = require("../controllers/authenticationController");
const router = express.Router();

router.get("/", (_, res) => res.send("It's working"));

const API_VERSION = '/api/v1';

router.post(`${API_VERSION}/login`, authentication);
router.delete(`${API_VERSION}/logout`, logout);

module.exports = router;