const Sequelize = require("sequelize");
const dbConfig = require("./config/dbconfig");

// import models
// example: const Patient = require("../models/Patient");

const connection = new Sequelize(dbConfig);

module.exports = connection;