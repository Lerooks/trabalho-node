const Associate = require("../model/associate-model");
const LoginUserCommand = require("../command/login-user-command");

module.exports = {
  async all() {
    return await Associate.findAll({
      order: [["name", "ASC"]],
    });
  },
  async findById(id) {
    const associate = await Associate.findOne({
      where: {
        id,
      },
    });

    if (!associate) {
      throw new Error("Associate not found");
    }

    return associate;
  },
  async findByCnpj(cnpj) {
    const associate = await Associate.findOne({
      where: {
        cnpj,
      },
    });
    if (!associate) {
      throw new Error("Associate not found");
    }
    return associate;
  },
  async save(command) {
    try {
      const isCnpjDuplicated = await Associate.findOne({
        where: {
          cnpj: command["cnpj"],
        },
      });

      if (isCnpjDuplicated) {
        throw new Error("Duplicated field 'cnpj'");
      }

      if (!LoginUserCommand.validPassword(command.password)) {
        throw new Error(
          "Minimum eight characters, at least one letter, one number and one special character"
        );
      }

      command.password = LoginUserCommand.generatePassword(command.password);
      const associate = await Associate.create(command);

      return associate;
    } catch (error) {
      throw new Error(error);
    }
  },
  async updateByCnpj(command) {
    try {
      const updated = await Associate.update(command, {
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
      const updated = await Associate.update(command, {
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
    const associate = await Associate.findOne({
      where: {
        id: command["id"],
      },
    });

    if (!associate) {
      throw new Error("Associate not found");
    }

    try {
      await Associate.destroy({
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
