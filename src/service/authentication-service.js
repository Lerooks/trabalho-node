const DeliveryMan = require('../model/delivery-man-model');
const Associate = require('../model/associate-model');
const LoginUserCommand = require('../command/login-user-command');
const redisClient = require('../../redis-client');

module.exports = {
    async authenticate(payload) {
        let user, role;
        const { login, password } = payload

        if (LoginUserCommand.isCpf(login)) {
            user = await DeliveryMan.findOne({ where: { cpf: login } })
            if (user && user.disabled)
                throw new Error('user disable on database, please contact us')
            role = 'deliver_man'
        }
        else if (LoginUserCommand.isCnpj(login)) {
            user = await Associate.findOne({ where: { cnpj: login } })
            role = 'associate'
        }
        else
            throw new Error("user and password invalid");

        if (!user)
            throw new Error("user and password invalid");

        if (LoginUserCommand.compareSync(password, user.password)) {
            return [LoginUserCommand.generateToken(user.id, role), user];
        }

        throw new Error("user and password invalid");
    },
    async invalidToken(token) {
        // add blacklist
        let re = await redisClient.setAsync(token, JSON.stringify(token));
        console.log(re);

    }
};
