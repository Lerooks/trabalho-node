const Assert = require("../utils/assert");

class DeleteDeliveryCommand {
  
  static from(data) {
      Assert.keyExists(data, 'id', 'Field "id" is required');
      Assert.stringNotEmpty(data['id'], 'Field "id" is empty');

      return {
        ...data,
      };
    }
  }
  
  module.exports = DeleteDeliveryCommand;
  