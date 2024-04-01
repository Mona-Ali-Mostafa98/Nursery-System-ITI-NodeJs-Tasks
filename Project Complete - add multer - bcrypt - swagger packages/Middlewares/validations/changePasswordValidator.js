const { body} = require("express-validator");

exports.changePasswordValidator = [
    body('_id')
        .notEmpty()
        .withMessage('user id is required'),

    body('newPassword')
        .isLength({ min: 8 })
        .withMessage("user password min length 8"),
];