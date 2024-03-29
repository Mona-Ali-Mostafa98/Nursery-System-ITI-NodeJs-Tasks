const { body, param, query } = require("express-validator");

exports.insertValidator = [
  body("_id")
    .isMongoId()
    .withMessage("teacher id should be object ID"),

  body("fullname")
    .isString()
    .withMessage("teacher fullName should be string")
    .isLength({ min: 2 })
    .withMessage(" teacher fullName lenght>2"),
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
  body("fullname")
    .optional()
    .isString()
    .withMessage("teacher username should be string")
    .isLength({ min: 5 })
    .withMessage(" teacher userName lenght>5"),
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