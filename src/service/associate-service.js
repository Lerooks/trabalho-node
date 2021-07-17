const Associate = require("../model/associate-model");

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

        if(!associate) {
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
        if(!associate) {
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
            if(isCnpjDuplicated){
                throw new Error("Duplicated field 'cnpj'");
            }
            const associate = await Associate.create(command);
            return associate;
        }catch(error){
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
        }catch (error) {
            throw new Error(error);
        }
    },
    async updateById (command) {
        try {
            const updated = await Associate.update(command, {
                where: {
                    id: command["id"],
                },
            });
            return updated;
        }catch(error){
            throw new Error(error);
        }
    },
    async delete(command) {
        try{
            await Associate.destroy({
                where: {
                    id: command["id"],
                },
            });
            return true;
        }catch(error) {
            throw new Error(error);
        }
    },
};