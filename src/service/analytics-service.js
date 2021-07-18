const sequelize = require("sequelize")
const Delivery = require("../model/delivery-model");
const DeliveryMan = require("../model/delivery-man-model");
const DeliveryStatusEnum = require("../enum/delivery-status");
const Customers = require("../model/customer-model");

module.exports = {
    async findAdminReport() {
        const [countCustomer, countDelivery, countDeliveryMan, topFiveDelivery] = await Promise.all([
            Customers.count(),
            Delivery.count(),
            DeliveryMan.count(),
            Delivery.count({
                group: 'deliveryman_id',
                include: DeliveryMan.findAll({
                    attributes: ['name']
                })
            })

        ])
        return {
            countCustomer,
            countDelivery,
            countDeliveryMan,
            topFiveDelivery
        }
    },

    async findFinancialReport() {

    }
};
