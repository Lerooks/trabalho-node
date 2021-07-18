const Sequelize = require("sequelize");
const config = require("./config/database-config");

const DeliveryMan = require("../model/delivery-man-model");
const Customer = require("../model/customer-model");
const Delivery = require("../model/delivery-model");
const Associate = require("../model/associate-model");

const connection = new Sequelize(config);

DeliveryMan.init(connection);
Customer.init(connection);
Delivery.init(connection);
Associate.init(connection);

Delivery.belongsTo(DeliveryMan, {
    as: "delivery_man",
    foreignKey: "deliveryman_id"
});

DeliveryMan.hasMany(Delivery, {
    as: "deliveries",
    foreignKey: "deliveryman_id"
});

Delivery.belongsTo(Customer, {
    as: "customer",
    foreignKey: "customer_id"
});

Customer.hasMany(Delivery, {
    as: "deliveries",
    foreignKey: "customer_id"
});

module.exports = connection;