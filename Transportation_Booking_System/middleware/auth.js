const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authenticate = async(req, res, next) => {
    try {
        const token = req.header('Authorization');
        console.log(token)
        const user = jwt.verify(token, 'ajayshgdyudgwyuegwgwe7434734hsd');
        const getUser = await User.findByPk(user.userId);
        req.user = getUser;
        next();
    } catch (err) {
        // console.log("Error=============================================>", err);
        // Instead of sending 404, you might want to send 401 (Unauthorized) or 403 (Forbidden)
        res.status(401).json({ success: false, message: 'Unauthorized' });
    }
}

module.exports = { authenticate };