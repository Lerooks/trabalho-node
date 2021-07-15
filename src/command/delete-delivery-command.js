const Joi = require("joi");

class DeleteDeliveryCommand {
  static schema = Joi.object({
    id: Joi.number().required(),
  }).required();

  static async from(data) {
    await this.schema.validateAsync(data);

    return {
      ...data,
    };
  }
}

module.exports = DeleteDeliveryCommand;
