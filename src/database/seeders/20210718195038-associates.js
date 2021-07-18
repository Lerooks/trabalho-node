'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "associates",
      [
        {
          name: "Carlos Carlindo",
          cnpj: "123123123",
          password: "$2a$12$xWdHEBk7pVxtQaGtR/klVehbZAoZ7fVe/dcnE5qnQtdOnJAD0Ihbq",
          address: "Local 1",
        },
        {
          name: "Ana Machado",
          cnpj: "555333222",
          password: "$2a$12$xWdHEBk7pVxtQaGtR/klVehbZAoZ7fVe/dcnE5qnQtdOnJAD0Ihbq",
          address: "Local 2",
        },
        {
          name: "Jr. junior",
          cnpj: "111222333",
          password: "$2a$12$xWdHEBk7pVxtQaGtR/klVehbZAoZ7fVe/dcnE5qnQtdOnJAD0Ihbq",
          address: "Local 1",
        },
        {
          name: "Mariana Silva",
          cnpj: "333222111",
          password: "$2a$12$xWdHEBk7pVxtQaGtR/klVehbZAoZ7fVe/dcnE5qnQtdOnJAD0Ihbq",
          address: "Local 2",
        },
        {
          name: "Bob Cunha",
          cnpj: "666777999",
          password: "$2a$12$xWdHEBk7pVxtQaGtR/klVehbZAoZ7fVe/dcnE5qnQtdOnJAD0Ihbq",
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
