const { authenticate, invalidToken } = require("../service/authentication-service");
const LoginUserCommand = require("../command/login-user-command");

module.exports = {
    async authentication(req, res) {
        try {
            const command = await LoginUserCommand.from(req.body);

            LoginUserCommand.isCpfOrCpnj(command.login)
            const token = await authenticate(command);

            res.status(200).send({ token });
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    },
    async logout(req, res) {
        try {
            let token = req.headers['x-access-token'];
            if (!token) throw Error('token undefined')

            if (invalidToken(token))
                res.status(200).send()

            throw Error('logout not possible')
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }
}