const { body, param, query } = require("express-validator");

exports.insertValidator = [
/*
  body("_id")
    .isMongoId()
    .withMessage("teacher id should be object ID"),
*/

  body("username")
    .isString()
    .withMessage("teacher username should be a string")
    .isLength({ min: 2 })
    .withMessage("teacher username length should be at least 2 characters"),

  body("fullname")
    .isString()
    .withMessage("teacher fullName should be string")
    .isLength({ min: 2 })
    .withMessage(" teacher fullName length > 2"),
    // checkExact([], { locations: ['body'] }),
    
  body('password')
    // .isStrongPassword()
    // .withMessage("password should be strong")
    .isLength({ min: 8 })
    .withMessage("teacher password min length 8"),

  body('email')
    .isEmail()
    .withMessage("teacher email is invalid"),

  body('image')
    .custom((value, { req }) => {
        if (!req.file) {
          throw new Error("teacher image is required");
        }
        return true;
    })
];

exports.updateValidator = [
  body("_id")
    // .optional()
    .isMongoId()
    .withMessage("teacher id required and should be object ID"),

  body("username")
    .optional()
    .isString()
    .withMessage("teacher username should be a string")
    .isLength({ min: 2 })
    .withMessage("teacher username length should be at least 2 characters"),

  body("fullname")
    .optional()
    .isString()
    .withMessage("teacher fullname should be string")
    .isLength({ min: 5 })
    .withMessage(" teacher fullname lenght>5"),
    // checkExact([], { locations: ['body'] }),
  body('password')
    .optional()
    // .isStrongPassword()
    .isLength({ min: 8 })
    .withMessage("teacher password min length 8"),

  body('email')
    .optional()
    .isEmail()
    .withMessage("teacher email is invalid"),

  body('image')
    .optional()
    .custom((value, { req }) => {
        if (!req.file) {
            throw new Error("teacher image is required");
        }
        return true;
    })
];

exports.deleteValidator = [param('id').isMongoId().withMessage('Teacher id Must be an objectID')];

exports.getByIdValidator = [param('id').isMongoId().withMessage('Teacher id Must be an objectID')];

exports.changePasswordValidator = [
    body('id')
        .isMongoId().
        withMessage('Teacher id Must be an objectID'),

    body('newPassword')
        .isLength({ min: 8 })
        .withMessage("teacher password min length 8"),
];