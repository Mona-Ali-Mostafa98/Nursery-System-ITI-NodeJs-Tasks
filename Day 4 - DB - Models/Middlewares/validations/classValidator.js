const { body, param } = require("express-validator");

exports.insertValidator = [
  body("_id")
    .isInt()
    .withMessage("Class ID should be an integer"),
  
  body("name")
    .isString()
    .withMessage("Class name should be a string")
    .isLength({ min: 2 })
    .withMessage("Class name should have a minimum length of 2 characters"),
  
  body("supervisor")
    .isMongoId()
    .withMessage("Supervisor ID should be an integer"),
  
  body("children")
    .isArray()
    .withMessage("Children should be an array"),

  body("children.*")
    .isInt()
    .withMessage("Child ID in children array should be an integer")
];

exports.updateValidator = [
  body("_id")
    .optional()
    .isInt()
    .withMessage("Class ID should be an integer"),
  
  body("name")
    .optional()
    .isString()
    .withMessage("Class name should be a string")
    .isLength({ min: 2 })
    .withMessage("Class name should have a minimum length of 2 characters"),
  
  body("supervisor")
    .optional()
    .isMongoId()
    .withMessage("Supervisor ID should be an integer"),
  
  body("children")
    .optional()
    .isArray()
    .withMessage("Children should be an array"),
  
  body("children.*")
    .optional()
    .isInt()
    .withMessage("Child ID in children array should be an integer")
];

exports.deleteValidator = [
  param("id")
    .isInt()
    .withMessage("Class ID must be an integer")
];

exports.getByIdValidator = [
  param("id")
    .isInt()
    .withMessage("Class ID must be an integer")
];
