module.exports = () => {
    const leaveManagementService = require('../services/leaveManagement.services')();
    /**
     * Creating Leave Management Controllers
     */
    const getleave = async(req, res, next) => {
        try {
            const payload = req.params
            const { userId, leavebalance } = await leaveManagementService.getleave(payload);
            res.status(200).send({
                status: 200,
                message: { "params": payload, "result": "NOT IMPLEMENTED YET" }
            });
        } catch (error) {
            next(error);
        }
    }
    const applyleave = async(req, res, next) => {
        try {
            const payload = req.params
            const { userId, leavebalance } = await leaveManagementService.getleave(payload);
            res.status(200).send({
                status: 200,
                message: { "params": payload, "result": "NOT IMPLEMENTED YET" }
            });
        } catch (error) {
            next(error);
        }
    }
    return {
        getleave,
        applyleave
    };
};