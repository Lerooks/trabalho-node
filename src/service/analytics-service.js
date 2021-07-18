const sequelize = require("sequelize")
const Delivery = require("../model/delivery-model");
const DeliveryMan = require("../model/delivery-man-model");
const { FINISHED } = require("../enum/delivery-status");
const Customers = require("../model/customer-model");

module.exports = {
    async findAdminReport() {
        const [
            countCustomer,
            countDelivery,
            countDeliveryMan,
            topFiveDeliverManDelivery,
            topFiveCustomersDelivery
        ] = await Promise.all([
            Customers.count(),
            Delivery.count(),
            DeliveryMan.count(),
            DeliveryMan.findAll({
                attributes: {
                    exclude: ['disabled', 'password', 'phone'],
                    include: [
                        [
                            sequelize.literal(`(select count(*) from deliveries WHERE deliveries.deliveryman_id = DeliveryMan.id and deliveries.status = ${FINISHED})`),
                            'deliveries_total'
                        ]
                    ]
                },
                order: [
                    [sequelize.literal('deliveries_total'), 'desc']
                ],
                limit: 5
            }),
            Customers.findAll({
                attributes: {
                    include: [
                        [
                            sequelize.literal('(select count(*) from deliveries WHERE deliveries.customers_id = Customers.id)'),
                            'deliveries_total'
                        ]
                    ]
                },
                order: [
                    [sequelize.literal('deliveries_total'), 'desc']
                ],
                limit: 5
            })
        ])

        return {
            countCustomer,
            countDelivery,
            countDeliveryMan,
            topFiveDeliverManDelivery,
            topFiveCustomersDelivery
        }
    },

    async findFinancialReport() {

    }
};
