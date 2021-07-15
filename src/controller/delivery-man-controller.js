const DeliveryManService = require("../service/delivery-man-service");
const CreateDeliveryManCommand = require("../command/create-delivery-man-command");
const UpdateDeliveryManCommand = require("../command/update-delivery-man-command");
const DisableDeliveryManCommand = require("../command/disable-delivery-man-command");

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
      const command = CreateDeliveryManCommand.from(payload);
      const deliveryMan = await DeliveryManService.save(command);

      res.status(201).send(deliveryMan);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
  async update(req, res) {
    try {
      const payload = req.body;
      const command = UpdateDeliveryManCommand.from(payload);
      const updated = await DeliveryManService.updateByCpf(command);
      const deliveryMan = await DeliveryManService.findByCpf(command.cpf);

      res.status(200).send(deliveryMan);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
  async disable(req, res) {
    try {
      const params = req.params;
      const command = DisableDeliveryManCommand.from(params);
      const updated = await DeliveryManService.disable(command);
      const deliveryMan = await DeliveryManService.findById(command.id);

      res.status(200).send(deliveryMan);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
};
