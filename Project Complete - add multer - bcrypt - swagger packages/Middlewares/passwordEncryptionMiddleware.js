const bcrypt = require('bcrypt');

async function encryptPassword(req, res, next) {
    try {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            req.body.password = hashedPassword;
        }
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = encryptPassword;
