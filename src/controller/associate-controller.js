const AssociateService = require("../service/associate-service");
const CreateAssociateCommand = require("../command/create-associate-command");
const UpdateAssociateCommand = require("../command/update-associate-command");
const DeleteAssociateCommand = require("../command/delete-associate-command.js");
const FindAssociateQuery = require("../query/find-associate-query");

module.exports = {
    async all(req, res){
        try {
            const associates = await AssociateService.all();
            res.send(associates);
        }catch(error){
            res.status(500).send({ error: error.message});
        }
    },
    async findById(req, res) {
        const {id} = req.params;
        try{
            const associate = await AssociateService.findById(id);
            res.send(associate);
        }catch(error) {
            res.status(404).send({error: error.message});
        }
    },
    async findByCnpj(req, res) {
        const {cnpj} = req.params;
        try{
            const associate = await AssociateService.findByCnpj(cnpj);
            res.send(associate);
        }catch(error){
            res.status(404).send({error: error.message});
        }
    },
    async save(req, res){
        try{
            const payload = req.body;
            const command = await CreateAssociateCommand.from(payload);
            const associate = await AssociateService.save(command);

            res.status(201).send(associate);
        }catch(error){
            res.status(400).send({error: error.message});
        }
    },
    async update(req, res){
        try {
            const payload = req.body;
            const command = await UpdateAssociateCommand.from(payload);
            const updated = await AssociateService.updateByCnpj(command);
            const associate = await AssociateService.findById(command.id);

            res.status(200).send(associate);
        }catch(error){
            res.status(400).send({error: error.message});
        }
    },
    async delete(req, res) {
        try {
            const params = req.params;
            const command = await DeleteAssociateCommand.from(params);
            const deleted = await AssociateService.delete(command);

            res.status(204).send(null);
        } catch(error){
            res.status(400).send({ error: error.message});
        }
    },

};