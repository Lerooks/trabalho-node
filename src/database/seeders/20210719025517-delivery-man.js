"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "delivery_men",
      [
        {
          name: "Cristiane Cecília Fernanda Dias",
          cpf: "999.077.220-73",
          password:
            "$2a$12$xWdHEBk7pVxtQaGtR/klVehbZAoZ7fVe/dcnE5qnQtdOnJAD0Ihbq", // senha123
          phone: "91985699858",
          disabled: false,
        },
        {
          name: "Rafael Kauê Viana",
          cpf: "910.142.360-61",
          password:
            "$2a$12$xWdHEBk7pVxtQaGtR/klVehbZAoZ7fVe/dcnE5qnQtdOnJAD0Ihbq",
          phone: "41995346592",
          disabled: false,
        },
        {
          name: "Elaine Maitê Pietra Ferreira",
          cpf: "655.593.430-13",
          password:
            "$2a$12$xWdHEBk7pVxtQaGtR/klVehbZAoZ7fVe/dcnE5qnQtdOnJAD0Ihbq",
          phone: "31989427234",
          disabled: false,
        },
        {
          name: "Gabriela Sandra Santos",
          cpf: "482.705.230-11",
          password:
            "$2a$12$xWdHEBk7pVxtQaGtR/klVehbZAoZ7fVe/dcnE5qnQtdOnJAD0Ihbq",
          phone: "75996281431",
          disabled: false,
        },
        {
          name: "Priscila Cecília Silvana Mendes",
          cpf: "004.432.120-15",
          password:
            "$2a$12$xWdHEBk7pVxtQaGtR/klVehbZAoZ7fVe/dcnE5qnQtdOnJAD0Ihbq",
          phone: "19983899654",
          disabled: false,
        },
        {
          name: "Marcos Cláudio da Luz",
          cpf: "754.476.890-23",
          password:
            "$2a$12$xWdHEBk7pVxtQaGtR/klVehbZAoZ7fVe/dcnE5qnQtdOnJAD0Ihbq",
          phone: "79996029536",
          disabled: false,
        },
        {
          name: "Márcia Isabelle Lúcia Peixoto",
          cpf: "441.258.830-09",
          password:
            "$2a$12$xWdHEBk7pVxtQaGtR/klVehbZAoZ7fVe/dcnE5qnQtdOnJAD0Ihbq",
          phone: "49996551117",
          disabled: false,
        },
        {
          name: "Pietro Daniel Enrico Ramos",
          cpf: "971.761.160-24",
          password:
            "$2a$12$xWdHEBk7pVxtQaGtR/klVehbZAoZ7fVe/dcnE5qnQtdOnJAD0Ihbq",
          phone: "33985685522",
          disabled: false,
        },
        {
          name: "Erick José Victor Pinto",
          cpf: "337.597.790-50",
          password:
            "$2a$12$xWdHEBk7pVxtQaGtR/klVehbZAoZ7fVe/dcnE5qnQtdOnJAD0Ihbq",
          phone: "95994957874",
          disabled: false,
        },
        {
          name: "Kamilly Daiane Peixoto",
          cpf: "288.726.360-94",
          password:
            "$2a$12$xWdHEBk7pVxtQaGtR/klVehbZAoZ7fVe/dcnE5qnQtdOnJAD0Ihbq",
          phone: "61994413472",
          disabled: false,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("delivery_men", null, {});
  },
};
