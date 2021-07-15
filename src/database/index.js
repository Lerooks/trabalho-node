const Sequelize = require("sequelize");
const config = require("./config/database-config");

const DeliveryMan = require("../model/delivery-man-model");
const Delivery = require("../model/delivery-model");

const connection = new Sequelize(config);

DeliveryMan.init(connection);
Delivery.init(connection);

Delivery.belongsTo(DeliveryMan, {
    as: "delivery_man",
    foreignKey: "deliveryman_id"
});

DeliveryMan.hasMany(Delivery, {
    as: "deliveries",
    foreignKey: "deliveryman_id"
});

module.exports = connection;