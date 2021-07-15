const Assert = require("../utils/assert");

class CreateDeliveryManCommand {
  static from(data) {
    Assert.keyExists(data, 'name', 'Field "name" is required');
    Assert.keyExists(data, 'cpf', 'Field "cpf" is required');
    Assert.keyExists(data, 'password', 'Field "password" is required');
    Assert.keyExists(data, 'phone', 'Field "phone" is required');

    Assert.stringNotEmpty(data['name'], 'Field "name" is empty');
    Assert.stringNotEmpty(data['cpf'], 'Field "cpf" is empty');
    Assert.stringNotEmpty(data['password'], 'Field "password" is empty');
    Assert.stringNotEmpty(data['phone'], 'Field "phone" is empty');

    return {
      ...data,
    };
  }
}

module.exports = CreateDeliveryManCommand;
