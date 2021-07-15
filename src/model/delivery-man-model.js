const Sequelize = require("sequelize");

class DeliveryMan extends Sequelize.Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                cpf: Sequelize.STRING,
                password: Sequelize.STRING,
                phone: Sequelize.STRING,
            },
            {
                sequelize,
                timestamps: false,
                tableName: 'delivery_men'
            }
        );
    }
}

module.exports = DeliveryMan;