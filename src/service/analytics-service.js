const sequelize = require("sequelize")
const Delivery = require("../model/delivery-model");
const DeliveryMan = require("../model/delivery-man-model");
const { FINISHED, PENDING } = require("../enum/delivery-status");
const Customers = require("../model/customer-model");

module.exports = {
    async findAdminReport() {
        const [
            countCustomer,
            countDelivery,
            countDeliveryMan,
            countDeliveryPending,
            countDeliveryFinish,
            topFiveDeliverManDelivery,
            topFiveCustomersDelivery
        ] = await Promise.all([
            Customers.count(),
            Delivery.count(),
            DeliveryMan.count(),
            Delivery.count({
                where: { status: PENDING }
            }),
            Delivery.count({
                where: { status: FINISHED }
            }),
            Delivery.count(),
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
            topFiveCustomersDelivery,
            percentagePending: (countDeliveryPending / countDelivery * 100).toFixed(2),
            percentageFinish: (countDeliveryFinish / countDelivery * 100).toFixed(2)
        }
    },
    async findFinancialReport() {
        const valueTotal = await Delivery.sum('value', {
            where: { status: FINISHED }
        })

        return {
            valueTotal: valueTotal.toFixed(2),
            valueDeliveryMan: (valueTotal * 0.70).toFixed(2),
            valueAssociate: (valueTotal * 0.30).toFixed(2)

        }
    }
};
