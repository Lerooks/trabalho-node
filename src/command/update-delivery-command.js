const Joi = require("joi");
const DeliveryStatus = require("../enum/delivery-status");

class UpdateDeliveryCommand {
  static schema = Joi.object({
    id: Joi.number().required(),
    description: Joi.string().required(),
    value: Joi.number().required(),
    status: Joi.number().required(),
    client_id: Joi.number().required(),
    deliveryman_id: Joi.number().required(),
  }).required();

  static async from(data) {
    await this.schema.validateAsync(data);

    return {
      ...data,
    };
  }
}

module.exports = UpdateDeliveryCommand;
