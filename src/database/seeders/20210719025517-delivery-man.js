"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "delivery_men",
      [
        {
          name: "Cristiane Cecília Fernanda Dias",
          cpf: "68449848555",
          password:
            "$2a$12$xWdHEBk7pVxtQaGtR/klVehbZAoZ7fVe/dcnE5qnQtdOnJAD0Ihbq", // senha123
          phone: "91985699858",
          disabled: false,
        },
        {
          name: "Rafael Kauê Viana",
          cpf: "16662550094",
          password:
            "$2a$12$xWdHEBk7pVxtQaGtR/klVehbZAoZ7fVe/dcnE5qnQtdOnJAD0Ihbq",
          phone: "41995346592",
          disabled: false,
        },
        {
          name: "Elaine Maitê Pietra Ferreira",
          cpf: "78621086042",
          password:
            "$2a$12$xWdHEBk7pVxtQaGtR/klVehbZAoZ7fVe/dcnE5qnQtdOnJAD0Ihbq",
          phone: "31989427234",
          disabled: false,
        },
        {
          name: "Gabriela Sandra Santos",
          cpf: "60865138486",
          password:
            "$2a$12$xWdHEBk7pVxtQaGtR/klVehbZAoZ7fVe/dcnE5qnQtdOnJAD0Ihbq",
          phone: "75996281431",
          disabled: false,
        },
        {
          name: "Priscila Cecília Silvana Mendes",
          cpf: "82554369798",
          password:
            "$2a$12$xWdHEBk7pVxtQaGtR/klVehbZAoZ7fVe/dcnE5qnQtdOnJAD0Ihbq",
          phone: "19983899654",
          disabled: false,
        },
        {
          name: "Marcos Cláudio da Luz",
          cpf: "37166153741",
          password:
            "$2a$12$xWdHEBk7pVxtQaGtR/klVehbZAoZ7fVe/dcnE5qnQtdOnJAD0Ihbq",
          phone: "79996029536",
          disabled: false,
        },
        {
          name: "Márcia Isabelle Lúcia Peixoto",
          cpf: "74534830181",
          password:
            "$2a$12$xWdHEBk7pVxtQaGtR/klVehbZAoZ7fVe/dcnE5qnQtdOnJAD0Ihbq",
          phone: "49996551117",
          disabled: false,
        },
        {
          name: "Pietro Daniel Enrico Ramos",
          cpf: "35991512612",
          password:
            "$2a$12$xWdHEBk7pVxtQaGtR/klVehbZAoZ7fVe/dcnE5qnQtdOnJAD0Ihbq",
          phone: "33985685522",
          disabled: false,
        },
        {
          name: "Erick José Victor Pinto",
          cpf: "92338193458",
          password:
            "$2a$12$xWdHEBk7pVxtQaGtR/klVehbZAoZ7fVe/dcnE5qnQtdOnJAD0Ihbq",
          phone: "95994957874",
          disabled: false,
        },
        {
          name: "Kamilly Daiane Peixoto",
          cpf: "43083552300",
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
