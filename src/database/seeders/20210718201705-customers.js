'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "customers",
      [
        {
          name: "Flavia Farias",
          cnpj: "12345678902",
          address: "Local 4",
        },
        {
          name: "Joao Vitor",
          cnpj: "12345678903",
          address: "Local 1",
        },
        {
          name: "Igor Silva",
          cnpj: "12345678904",
          address: "Local 2",
        },
        {
          name: "Maria Santa",
          cnpj: "12345678905",
          address: "Local 3",
        },
        {
          name: "Antonio Lucas",
          cnpj: "12345678906",
          address: "Local 4",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete
      ("customers", null, {});
  },
};
