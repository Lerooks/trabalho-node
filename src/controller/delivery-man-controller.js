const DeliveryManService = require("../service/delivery-man-service");

module.exports = {
    async all(req, res) {
        const deliveryMen = await DeliveryManService.all();

        res.send(deliveryMen);
    },
    find(req, res) {
        res.send({
            method: "find"
        });
    },
    save(req, res) {
        res.send({
            method: "save"
        });
    },
    update(req, res) {
        res.send({
            method: "update"
        });
    },
    disable(req, res) {
        res.send({
            method: "disable"
        });
    },
};
