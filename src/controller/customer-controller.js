const CustomerService = require("../service/customer-service");
const CreateCustomerCommand = require("../command/create-customer-command");
const UpdateCustomerCommand = require("../command/update-customer-command");
const DeleteCustomerCommand = require("../command/delete-customer-command");

module.exports = {
  async all(req, res) {
    try {
      const customers = await CustomerService.all();
      res.send(customers);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },
  async findByCnpj(req, res) {
    const { cnpj } = req.params;
    try {
      const customer = await CustomerService.findByCnpj(cnpj);
      res.send(customer);
    } catch (error) {
      res.status(404).send({ error: error.message });
    }
  },
  async save(req, res) {
    try {
      const payload = req.body;
      const command = await CreateCustomerCommand.from(payload);
      const customer = await CustomerService.save(command);

      res.status(201).send(customer);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
  async update(req, res) {
    try {
      const payload = req.body;
      const command = await UpdateCustomerCommand.from(payload);
      const updated = await CustomerService.updateByCnpj(command);
      const customer = await CustomerService.findByCnpj(command.cnpj);

      res.status(200).send(customer);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
  async delete(req, res) {
    try {
      const params = req.params;
      const command = await DeleteCustomerCommand.from(params);
      const deleted = await CustomerService.delete(command);

      res.status(204).send(null);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
};
