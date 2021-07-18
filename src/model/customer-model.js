const Sequelize = require("sequelize");

class Customers extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        cnpj: Sequelize.STRING,
        address: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: false,
        tableName: "customers",
      }
    );
  }
}

module.exports = Customers;
