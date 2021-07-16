const Sequelize = require("sequelize");
const DeliveryStatusEnum = require("../enum/delivery-status");

class Delivery extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
        status: {
          type: Sequelize.INTEGER,
          defaultValue: DeliveryStatusEnum.PENDING,
        },
        value: Sequelize.DECIMAL,
      },
      {
        sequelize,
        timestamps: false,
        tableName: "deliveries",
      }
    );
  }
}

module.exports = Delivery;
