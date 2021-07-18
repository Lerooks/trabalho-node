const Delivery = require("../model/delivery-model");
const DeliveryMan = require("../model/delivery-man-model");

module.exports = {
  async all() {
    return await DeliveryMan.findAll({
      include: [
        {
          model: Delivery,
          as: "deliveries",
        },
      ],
    });
  },
  async findById(id) {
    const deliveryMan = await DeliveryMan.findOne({
      where: {
        id,
      },
      include: [
        {
          model: Delivery,
          as: "deliveries",
        },
      ],
    });

    if (!deliveryMan) {
      throw new Error("Delivery Man not found");
    }

    return deliveryMan;
  },
  async findByCpf(cpf) {
    const deliveryMan = await DeliveryMan.findOne({
      where: {
        cpf,
      },
      include: [
        {
          model: Delivery,
          as: "deliveries",
        },
      ],
    });

    if (!deliveryMan) {
      throw new Error("Delivery Man not found");
    }

    return deliveryMan;
  },
  async save(command) {
    try {
      const isCpfDuplicated = await DeliveryMan.findOne({
        where: {
          cpf: command["cpf"],
        },
      });

      if (isCpfDuplicated) {
        throw new Error("Duplicated field 'cpf'");
      }

      const deliveryMan = await DeliveryMan.create(command);

      return deliveryMan;
    } catch (error) {
      throw new Error(error);
    }
  },
  async updateByCpf(command) {
    try {
      const updated = await DeliveryMan.update(command, {
        where: {
          cpf: command["cpf"],
        },
      });

      return updated;
    } catch (error) {
      throw new Error(error);
    }
  },
  async updateById(command) {
    try {
      const updated = await DeliveryMan.update(command, {
        where: {
          id: command["id"],
        },
      });

      return updated;
    } catch (error) {
      throw new Error(error);
    }
  },
  async disable(command) {
    try {
      const updated = await DeliveryMan.update(
        { disabled: true },
        {
          where: {
            id: command["id"],
          },
        }
      );

      return updated;
    } catch (error) {
      throw new Error(error);
    }
  },
};
