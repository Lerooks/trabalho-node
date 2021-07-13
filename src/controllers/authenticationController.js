const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// ela recebe id do usuário que está logado, gera um número aleatório
function generateToken(id) {
    process.env.JWT_SECRET = Math.random().toString(36).slice(-20);
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: 82800, // expira em 24 horas;
    })
    return token
}

module.exports = {
    async authentication(req, res) {
        const email = req.body.email;
        const password = req.body.password;

        if (!email || !password)
            return req.status(400).json({ msg: "Campos obrigatórios vazios! " });
        try {
            const user = await User.findOne({
                where: { email }
            })
            if (!user)
                return res.status(404).json({ msg: "Usuário e senha inválidos" })
            else
                if (bcrypt.compareSync(password, user.password)) {
                    const token = generateToken(user.id);
                    return res
                        .status(200)
                        .json({ msg: "Autenticação válida", token })
                } else {
                    return res.status(404).json({ msg: "Usuário e senha inválidos" })
                }
        } catch (error) {
            res.status(404).json(error)
        }
    },
    async logout(req, res) {
        try {
            // logout
            console.log(req.body);
            req.status(400).json({ msg: "Campos obrigatórios vazios! " });
        } catch (error) {
            res.status(404).json(error)
        }
    }
}