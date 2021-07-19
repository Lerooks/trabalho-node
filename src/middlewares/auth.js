const jwt = require('jsonwebtoken');
const redisClient = require('../../redis-client');

async function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ msg: "token undefined" });

    const rawData = await redisClient.getAsync(token);
    if (rawData) return res.status(401).send();

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err)
            return res.status(401).json({ msg: "token invalid" })
        req.userId = decoded.id;
        next();
    })
}

module.exports = verifyJWT;