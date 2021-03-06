const DeliveryMan = require("../model/delivery-man-model");
const Delivery = require("../model/delivery-model");
const Customer = require("../model/customer-model");
const DeliveryManService = require("../service/delivery-man-service");
const CustomerService = require("../service/customer-service");

module.exports = {
  async all(query) {
    const where = {};

    if (query.hasOwnProperty("status")) {
      where.status = query.status;
    }

    if (query.hasOwnProperty("deliveryman_id")) {
      where.deliveryman_id = query.deliveryman_id;
    }

    if (
      query.hasOwnProperty("role") &&
      query.role == "deliver_man" &&
      query.userId
    )
      where.deliveryman_id = query.userId;

    const deliveries = Delivery.findAll({
      include: [
        {
          model: DeliveryMan,
          as: "delivery_man",
        },
        {
          model: Customer,
          as: "customer",
        },
      ],
      where,
    });

    return await deliveries;
  },
  async findById(id) {
    const delivery = await Delivery.findOne({
      where: {
        id,
      },
      include: [
        {
          model: DeliveryMan,
          as: "delivery_man",
        },
        {
          model: Customer,
          as: "customer",
        },
      ],
    });

    if (!delivery) {
      throw new Error("Delivery not found");
    }

    return delivery;
  },
  async save(command) {
    try {
      const deliveryMan = await DeliveryManService.findById(
        command["deliveryman_id"]
      );

      if (!deliveryMan) {
        throw new Error("Delivery Man not found");
      }
      
      const customer = await CustomerService.findById(command["customer_id"]);

      if (!customer) {
        throw new Error("Customer not found");
      }

      const delivery = await Delivery.create(command);

      return delivery;
    } catch (error) {
      throw new Error(error);
    }
  },
  async update(command) {
    try {
      const delivery = await Delivery.findByPk(command.id);

      if (!delivery) {
        throw new Error("Delivery not found");
      }

      if (
        command.role === "deliver_man" &&
        command.userId !== delivery.deliveryman_id
      )
        return false;

      const updated = await Delivery.update(command, {
        where: {
          id: command["id"],
        },
      });

      return updated;
    } catch (error) {
      throw new Error(error);
    }
  },
  async delete(command) {
    try {
      await Delivery.destroy({
        where: {
          id: command["id"],
        },
      });

      return true;
    } catch (error) {
      throw new Error(error);
    }
  },
};
