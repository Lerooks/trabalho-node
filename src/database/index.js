const Sequelize = require("sequelize");
const dbConfig = require("./config/dbconfig");

const DeliveryMan = require("../model/delivery-man-model");
const Customer = require("../model/customer-model");

const connection = new Sequelize(dbConfig);

DeliveryMan.init(connection);
Customer.init(connection);

module.exports = connection;
