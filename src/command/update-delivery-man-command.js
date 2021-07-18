const Joi = require("joi");

class UpdateDeliveryManCommand {
  static schema = Joi.object({
    name: Joi.string().required(),
    cpf: Joi.string().required(),
    password: Joi.string().required(),
    phone: Joi.string().required(),
  }).required();

  static async from(data) {
    await this.schema.validateAsync(data);

    return {
      ...data,
    };
  }
}

module.exports = UpdateDeliveryManCommand;
