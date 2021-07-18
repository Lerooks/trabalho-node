'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "associates",
      [
        {
          name: "Carlos Carlindo",
          cnpj: "123123123",
          password: "senha123",
          address: "Local 1",
        },
        {
          name: "Ana Machado",
          cnpj: "555333222",
          password: "senha123",
          address: "Local 2",
        },
        {
          name: "Jr. junior",
          cnpj: "111222333",
          password: "senha123",
          address: "Local 1",
        },
        {
          name: "Mariana Silva",
          cnpj: "333222111",
          password: "senha123",
          address: "Local 2",
        },
        {
          name: "Bob Cunha",
          cnpj: "666777999",
          password: "senha123",
          address: "Local 3",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete
      ("associates", null, {});
  },
};
