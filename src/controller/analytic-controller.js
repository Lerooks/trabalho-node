const AnalyticsService = require("../service/analytics-service");

module.exports = {
    async admin(_, res) {
        try {
            const deliveries = await AnalyticsService.findAdminReport();
            res.send(deliveries);
        } catch (error) {
            res.status(404).send({ error: error.message });
        }
    },
    async financial(_, res) {
        try {
            const associate = await AnalyticsService.findFinancialReport();
            res.send(associate);
        } catch (error) {
            res.status(404).send({ error: error.message });
        }
    }
}