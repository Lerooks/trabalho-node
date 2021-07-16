const Assert = require("../utils/assert");

class CreateCustomerCommand {
	static from(data){
		Assert.keyExists(data, 'name', 'Field "name" is required');
		Assert.keyExists(data, 'cnpj', 'Field "cnpj" is required');
		Assert.keyExists(data, 'address', 'Field "address" is required');

		Assert.stringNotEmpty(data['name'], 'Field "name" is empty');
		Assert.stringNotEmpty(data['cnpj'], 'Field "cnpj" is empty');
		Assert.stringNotEmpty(data['address'], 'Field "address" is empty');

		return {
			...data,
		};
	}
}

module.exports = CreateCustomerCommand;
