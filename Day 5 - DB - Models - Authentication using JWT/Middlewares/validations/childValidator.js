const { body, param, query } = require("express-validator");

exports.insertValidator = [
  body("_id")
    .optional()
    .isInt()
    .withMessage("Child ID should be an integer"),

  body("fullname")
    .isString()
    .withMessage("Child fullname should be a string")
    .isLength({ min: 2 })
    .withMessage("Child fullname length should be at least 2 characters"),

  body("age")
    .isInt({ min: 0 })
    .withMessage("Age should be a non-negative integer"),

  body("level")
    .isIn(["PreKG", "KG1", "KG2"])
    .withMessage("Level must be one of: PreKG, KG1, KG2"),

  body("address.city")
    .isString()
    .withMessage("City should be a string"),

  body("address.street")
    .isString()
    .withMessage("Street should be a string"),

  body("address.building")
    .isString()
    .withMessage("Building should be a string"),

  body('password')
      // .isStrongPassword()
      // .withMessage("password should be strong")
      .isLength({ min: 8 })
      .withMessage("child password min length 8"),

  body('email')
      .isEmail()
      .withMessage("child email is invalid"),
];

exports.updateValidator = [
  body("_id")
    // .optional()
    .isInt()
    .withMessage("Child ID is required and should be an integer"),

  body("fullname")
    .optional()
    .isString()
    .withMessage("Child fullname should be a string")
    .isLength({ min: 2 })
    .withMessage("Child fullname length should be at least 2 characters"),

  body("age")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Age should be a non-negative integer"),

  body("level")
    .optional()
    .isIn(["PreKG", "KG1", "KG2"])
    .withMessage("Level must be one of: PreKG, KG1, KG2"),

  body("address.city")
    .optional()
    .isString()
    .withMessage("City should be a string"),

  body("address.street")
    .optional()
    .isString()
    .withMessage("Street should be a string"),

  body("address.building")
    .optional()
    .isString()
    .withMessage("Building should be a string"),

  body('password')
      .optional()
      // .isStrongPassword()
      // .withMessage("password should be strong")
      .isLength({ min: 8 })
      .withMessage("child password min length 8"),

  body('email')
      .optional()
      .isEmail()
      .withMessage("child email is invalid")
];

exports.deleteValidator = [param('id').isInt().withMessage('Child id Must be an int')];

exports.getByIdValidator = [param('id').isInt().withMessage('Child id Must be an int')];