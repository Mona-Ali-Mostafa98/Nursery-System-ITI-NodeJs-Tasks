const express = require("express");
const passwordController = require("./../Controller/passwordController");
const router = express.Router();
const validationResult = require("../Middlewares/validations/validationResult");
const { changePasswordValidator } = require("../Middlewares/validations/changePasswordValidator");

router.patch("/change-password",changePasswordValidator, validationResult, passwordController.changePassword);

module.exports = router;
