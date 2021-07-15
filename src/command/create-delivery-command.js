const Assert = require("../utils/assert");

class CreateDeliveryCommand {
  static from(data) {
    Assert.keyExists(data, 'description', 'Field "description" is required');
    Assert.keyExists(data, 'value', 'Field "value" is required');
    Assert.keyExists(data, 'deliveryman_id', 'Field "deliveryman_id" is required');

    Assert.stringNotEmpty(data['description'], 'Field "description" is empty');
    Assert.stringNotEmpty(data['value'], 'Field "value" is empty');
    Assert.stringNotEmpty(data['deliveryman_id'], 'Field "deliveryman_id" is empty');

    return {
      ...data,
    };
  }
}

module.exports = CreateDeliveryCommand;
