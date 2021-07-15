const Assert = require("../utils/assert");

class UpdateDeliveryCommand {
  static from(data) {
    Assert.keyExists(data, "id", 'Field "id" is required');
    Assert.keyExists(data, "description", 'Field "description" is required');
    Assert.keyExists(data, "value", 'Field "value" is required');
    Assert.keyExists(data, "status", 'Field "status" is required');
    Assert.keyExists(
      data,
      "deliveryman_id",
      'Field "deliveryman_id" is required'
    );

    Assert.stringNotEmpty(data["id"], 'Field "id" is empty');
    Assert.stringNotEmpty(data["description"], 'Field "description" is empty');
    Assert.stringNotEmpty(data["value"], 'Field "value" is empty');
    Assert.stringNotEmpty(data["status"], 'Field "status" is empty');
    Assert.stringNotEmpty(
      data["deliveryman_id"],
      'Field "deliveryman_id" is empty'
    );

    return {
      ...data,
    };
  }
}

module.exports = UpdateDeliveryCommand;
