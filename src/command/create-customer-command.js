const Joi = require("joi");

class CreateCustomerCommand {
  static schema = Joi.object({
    name: Joi.string().required(),
    cnpj: Joi.string().required(),
    address: Joi.string().required(),
  }).required();

  static async from(data) {
    await this.schema.validateAsync(data);

    return {
      ...data,
    };
  }
}

module.exports = CreateCustomerCommand;
