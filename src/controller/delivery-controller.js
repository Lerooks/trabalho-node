const DeliveryService = require("../service/delivery-service");
const CreateDeliveryCommand = require("../command/create-delivery-command");
const UpdateDeliveryCommand = require("../command/update-delivery-command");
const DeleteDeliveryCommand = require("../command/delete-delivery-command");
const FindDeliveryQuery = require("../query/find-delivery-query");

module.exports = {
  async all(req, res) {
    try {
      const { role, userId } = req;
      const params = req.query;

      const query = FindDeliveryQuery.from(params);
      if (role)
        query.role = role;
      if (userId)
        query.userId = userId;

      const deliveryMen = await DeliveryService.all(query);
      res.send(deliveryMen);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },
  async findById(req, res) {
    const { id } = req.params;

    try {
      const delivery = await DeliveryService.findById(id);
      res.send(delivery);
    } catch (error) {
      res.status(404).send({ error: error.message });
    }
  },
  async save(req, res) {
    try {
      const payload = req.body;
      const command = await CreateDeliveryCommand.from(payload);
      const delivery = await DeliveryService.save(command);

      res.status(201).send(delivery);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
  async update(req, res) {
    try {
      const { role, userId } = req;
      const payload = req.body;
      let command = await UpdateDeliveryCommand.from(payload);
      if (role)
        command.role = role;
      if (userId)
        command.userId = userId;
      const updated = await DeliveryService.update(command);
      if (!updated)
        return res.status(403).send({ error: 'dont have access ' })

      const delivery = await DeliveryService.findById(command.id);

      res.status(200).send(delivery);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
  async delete(req, res) {
    try {
      const params = req.params;
      const command = await DeleteDeliveryCommand.from(params);
      const deleted = await DeliveryService.delete(command);

      res.status(204).send(null);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
};
