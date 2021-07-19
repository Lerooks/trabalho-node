"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "associates",
      [
        {
          name: "Carlos Carlindo",
          cnpj: "59.370.674/0001-20",
          password:
            "$2a$12$xWdHEBk7pVxtQaGtR/klVehbZAoZ7fVe/dcnE5qnQtdOnJAD0Ihbq",
          address: "Local 1",
        },
        {
          name: "Ana Machado",
          cnpj: "15.474.023/0001-05",
          password:
            "$2a$12$xWdHEBk7pVxtQaGtR/klVehbZAoZ7fVe/dcnE5qnQtdOnJAD0Ihbq",
          address: "Local 2",
        },
        {
          name: "Jr. junior",
          cnpj: "05.511.612/0001-62",
          password:
            "$2a$12$xWdHEBk7pVxtQaGtR/klVehbZAoZ7fVe/dcnE5qnQtdOnJAD0Ihbq",
          address: "Local 1",
        },
        {
          name: "Mariana Silva",
          cnpj: "07.906.213/0001-26",
          password:
            "$2a$12$xWdHEBk7pVxtQaGtR/klVehbZAoZ7fVe/dcnE5qnQtdOnJAD0Ihbq",
          address: "Local 2",
        },
        {
          name: "Bob Cunha",
          cnpj: "29.427.439/0001-87",
          password:
            "$2a$12$xWdHEBk7pVxtQaGtR/klVehbZAoZ7fVe/dcnE5qnQtdOnJAD0Ihbq",
          address: "Local 3",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("associates", null, {});
  },
};
