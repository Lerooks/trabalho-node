const Sequelize = require("sequelize");

class DeliveryMan extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        cpf: Sequelize.STRING,
        password: Sequelize.STRING,
        phone: Sequelize.STRING,
        disabled: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        tableName: "delivery_men",
      }
    );
  }
}

module.exports = DeliveryMan;
