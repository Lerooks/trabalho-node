const Customer = require("../model/customer-model");

module.exports = {
  async all() {
    return await Customer.findAll();
  },
  async findById() {
    const customer = await Customer.findOne({
      where: {
        id,
      },
    });
    if (!customer) {
      throw new Error("Customer not found");
    }
    return customer;
  },
  async findByCnpj(cnpj) {
    const customer = await Customer.findOne({
      where: {
        cnpj,
      },
    });

    if (!customer) {
      throw new Error("Customer not found");
    }

    return customer;
  },
  async save(command) {
    try {
      const isCnpjDuplicated = await Customer.findOne({
        where: {
          cnpj: command["cnpj"],
        },
      });
      if (isCnpjDuplicated) {
        throw new Error("Duplicated field 'cnpj'");
      }
      const customer = await Customer.create(command);

      return customer;
    } catch (error) {
      throw new Error(error);
    }
  },
  async updateByCnpj(command) {
    try {
      const updated = await Customer.update(command, {
        where: {
          cnpj: command["cnpj"],
        },
      });
      return updated;
    } catch (error) {
      throw new Error(error);
    }
  },
  async updateById(command) {
    try {
      const updated = await Customer.update(command, {
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
      await Customer.destroy({
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
