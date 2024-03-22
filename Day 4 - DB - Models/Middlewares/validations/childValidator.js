const { body, param, query } = require("express-validator");

exports.insertValidator = [
  body("_id")
    .isInt()
    .withMessage("Child ID should be an integer"),

  body("fullName")
    .isString()
    .withMessage("Child fullName should be a string")
    .isLength({ min: 2 })
    .withMessage("Child fullName length should be at least 2 characters"),

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
    .withMessage("Building should be a string")
];

exports.updateValidator = [
  body("_id")
    .optional()
    .isInt()
    .withMessage("Child ID should be an integer"),

  body("fullName")
    .optional()
    .isString()
    .withMessage("Child fullName should be a string")
    .isLength({ min: 2 })
    .withMessage("Child fullName length should be at least 2 characters"),

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
    .withMessage("Building should be a string")
];

exports.deleteValidator = [param('id').isInt().withMessage('Child id Must be an int')];

exports.getByIdValidator = [param('id').isInt().withMessage('Child id Must be an int')];