const Assert = require("../utils/assert");

class DeleteCustomerCommand {
  
  static from(data) {
      Assert.keyExists(data, 'id', 'Field "id" is required');
      Assert.stringNotEmpty(data['id'], 'Field "id" is empty');

      return {
        ...data,
      };
    }
  }
  
  module.exports = DeleteCustomerCommand;
  