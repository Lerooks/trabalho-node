const Joi = require("joi");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

class LoginUserCommand {
    static schema = Joi.object({
        login: Joi.string().required(),
        password: Joi.string().required()
    }).required();

    static async from(data) {
        await this.schema.validateAsync(data);

        return {
            ...data,
        };
    }

    static isCpf(cpf) {
        return /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(cpf)
    }

    static isCnpj(cpnj) {
        return /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/.test(cpnj)
    }

    static isCpfOrCpnj(payload) {
        if (/(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/.test(payload))
            return true
        throw Error('Not a cpf or cpnj')
    }

    static generateToken(id) {
        process.env.JWT_SECRET = Math.random().toString(36).slice(-20);
        const token = jwt.sign({ id }, process.env.JWT_SECRET, {
            expiresIn: 82800, // expira em 24 horas;
        })
        return token
    }

    static generatePassword(password) {
        // calcular o hash da senha
        const salt = bcrypt.genSaltSync(12); // sequencia aleatoria de letra e caracteres
        return bcrypt.hashSync(password, salt);
    }

    static compareSync(hash, password){
        return bcrypt.compareSync(hash, password)
    }

    static validPassword(password){
        return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)
    }

}

module.exports = LoginUserCommand;
