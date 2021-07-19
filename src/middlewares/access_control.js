const jwt = require('jsonwebtoken');
const AccessControl = require('accesscontrol');

let grantArray = [
    { role: 'associate', resource: 'deliveries', action: 'read:any', attributes: '*' },
    { role: 'associate', resource: 'deliverymen', action: 'read:any', attributes: '*' },
    { role: 'associate', resource: 'customers', action: 'read:any', attributes: '*' },
    { role: 'associate', resource: 'analytics', action: 'read:any', attributes: '*' },
    { role: 'associate', resource: 'associates', action: 'read:any', attributes: '*' },
]

const ac = new AccessControl(grantArray);
function checkDeliveryManPermission(req, route) {
    if (req.originalUrl.search('analytics/financial') > 0) {
        return true
    }
    else if (req.method === 'PUT' && route === 'deliverymen') {
        return true;
    } else if (['PUT', 'GET'].includes(req.method) && route === 'deliveries')
        return true

    return false
}

async function accessControl(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ msg: "token undefined" });
    try {
        let decode = jwt.decode(token);
        let route = req.baseUrl.replace('/api/v1/', '')
        const role = decode.role;
        req.role = role;

        if (role === 'deliver_man' && checkDeliveryManPermission(req, route)) {
            return next()
        } else if (role != 'deliver_man') {
            const permission = ac.can(role).read(route);
            if (permission.granted)
                return next()
        }
        return res.status(403).json({ msg: 'Forbidden' })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Forbidden' })
    }
}

module.exports = accessControl;