const DeliveryManService = require("../service/delivery-man-service");
const CreateDeliveryManCommand = require("../command/create-delivery-man-command");
const UpdateDeliveryManCommand = require("../command/update-delivery-man-command");
const DisableDeliveryManCommand = require("../command/disable-delivery-man-command");
const FindDeliveryMenAnalyticsQuery = require("../query/find_delivery_men_analytics_query");

module.exports = {
  async all(req, res) {
    try {
      const deliveryMen = await DeliveryManService.all();
      res.send(deliveryMen);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },
  async findByCpf(req, res) {
    const { cpf } = req.params;

    try {
      const deliveryMan = await DeliveryManService.findByCpf(cpf);
      res.send(deliveryMan);
    } catch (error) {
      res.status(404).send({ error: error.message });
    }
  },
  async save(req, res) {
    try {
      const payload = req.body;
      const command = await CreateDeliveryManCommand.from(payload);
      const deliveryMan = await DeliveryManService.save(command);

      res.status(201).send(deliveryMan);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
  async update(req, res) {
    try {
      const payload = req.body;
      const command = await UpdateDeliveryManCommand.from(payload);
      const updated = await DeliveryManService.updateByCpf(command);
      const deliveryMan = await DeliveryManService.findByCpf(command.cpf);

      res.status(200).send(deliveryMan);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
  async disable(req, res) {
    try {
      const { role, params } = req
      let command = await DisableDeliveryManCommand.from(params);
      if (role) command.role = role
      const updated = await DeliveryManService.disable(command);
      const deliveryMan = await DeliveryManService.findById(command.id);
      if (!updated) return res.status(403).send({ error: 'dont have access' });

      res.status(200).send(deliveryMan);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
  async report(req, res) {
    try {
      const { role, userId, params } = req
      const command = await FindDeliveryMenAnalyticsQuery.from(params);
      const report = await DeliveryManService.findDeliveryManAnalyticsQuery(params, role, userId);
      if (!report) return res.status(403).send({ error: 'dont have access' });

      res.status(200).send(report);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }
};
