const Sequelize = require("sequelize");

class Associate extends Sequelize.Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                cnpj: Sequelize.STRING,
                password: Sequelize.STRING,
                address: Sequelize.STRING,
            },
            {
                sequelize,
                timestamps: false,
                tableName: "associates",
            }
        );
    }
}

module.exports = Associate;