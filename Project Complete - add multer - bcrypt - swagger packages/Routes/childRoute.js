const express = require("express");
const controller = require("./../Controller/childController");
const { insertValidator, updateValidator, deleteValidator, getByIdValidator} = require("../Middlewares/validations/childValidator");
const validationResult = require("../Middlewares/validations/validationResult");
const { isAdmin } = require("./../Middlewares/authMiddleware");
const encryptPassword = require('../Middlewares/passwordEncryptionMiddleware');

const router = express.Router();

router.route("/childs").all(isAdmin)
  .get(controller.getAllChilds)
  .post(insertValidator, validationResult, encryptPassword, controller.insertChild)
  .patch(updateValidator, validationResult, encryptPassword, controller.updateChild);

router.route("/childs/:id").all(isAdmin)
  .get(getByIdValidator, validationResult, controller.getChildById)
  .delete(deleteValidator, validationResult, controller.deleteChildById);


module.exports = router;
