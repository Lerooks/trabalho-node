const Joi = require("joi");
const DeliveryStatus = require("../enum/delivery-status");

class UpdateDeliveryCommand {
  static schema = Joi.object({
    id: Joi.number().required(),
    description: Joi.string(),
    value: Joi.number(),
    status: Joi.number(),
    customer_id: Joi.number(),
    deliveryman_id: Joi.number(),
  });

  static async from(data) {
    await this.schema.validateAsync(data);

    return {
      ...data,
    };
  }
}

module.exports = UpdateDeliveryCommand;
