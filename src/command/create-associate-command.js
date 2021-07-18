const Joi = require("joi");

class CreateAssociateCommand {
  static schema = Joi.object({
    name: Joi.string().required(),
    cnpj: Joi.string().required(),
    password: Joi.string().required(),
    address: Joi.string().required(),
  }).required();

  static async from(data) {
    await this.schema.validateAsync(data);

    return {
      ...data,
    };
  }
}

module.exports = CreateAssociateCommand;
