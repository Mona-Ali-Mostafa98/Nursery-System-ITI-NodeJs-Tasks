const express = require("express");
const controller = require("./../Controller/authController");
const upload = require("../Middlewares/multerMiddleware");
const {insertValidator} = require("../Middlewares/validations/teacherValidator");
const validationResult = require("../Middlewares/validations/validationResult");
const encryptPassword = require("../Middlewares/passwordEncryptionMiddleware");
const router = express.Router();

router.post("/login", controller.login);
router.post("/register",upload.single('image'), insertValidator, validationResult, encryptPassword, controller.register);

module.exports = router;
