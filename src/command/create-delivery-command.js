const Joi = require("joi");

class CreateDeliveryCommand {
  static schema = Joi.object({
    description: Joi.string().required(),
    value: Joi.number().required(),
    deliveryman_id: Joi.number().required(),
  }).required();

  static async from(data) {
    await this.schema.validateAsync(data);

    return {
      ...data,
    };
  }
}

module.exports = CreateDeliveryCommand;
