const Delivery = require("../model/delivery-model");
const DeliveryMan = require("../model/delivery-man-model");
const LoginUserCommand = require('../command/login-user-command');
const { FINISHED } = require("../enum/delivery-status");

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

      if (!LoginUserCommand.validPassword(command.password)) {
        throw new Error("Minimum eight characters, at least one letter, one number and one special character");
      }

      if (!LoginUserCommand.isCpf(command.cpf)) {
        throw new Error("does not correspond to a cpf, please use: xxx.xxx.xxx-xx");
      }

      command.password = LoginUserCommand.generatePassword(command.password);
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
      if (command.role === 'deliver_man') return false

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
  async findDeliveryManAnalyticsQuery(command, role = '', userId) {
    try {
      const { id } = command;

      const deliveryMan = await DeliveryMan.findOne({ where: { id } });
      if (!deliveryMan) throw new Error('not find delivery man')

      if (role === 'deliver_man' && deliveryMan.id !== userId) return false

      const valueTotal = await Delivery.sum('value', {
        where: { status: FINISHED, deliveryman_id: deliveryMan.id }
      })

      return {
        valueTotal: valueTotal.toFixed(2),

      }
    } catch (error) {
      throw new Error(error);
    }
  }
};
