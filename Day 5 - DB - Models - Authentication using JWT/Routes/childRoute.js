const express = require("express");
const controller = require("./../Controller/childController");
const { insertValidator, updateValidator, deleteValidator, getByIdValidator} = require("../Middlewares/validations/childValidator");
const validationResult = require("../Middlewares/validations/validationResult");

const router = express.Router();

router.route("/childs")
  .get(controller.getAllChilds)
  .post(insertValidator, validationResult, controller.insertChild)
  .patch(updateValidator, validationResult, controller.updateChild);

router.route("/childs/:id")
  .get(getByIdValidator, validationResult, controller.getChildById)
  .delete(deleteValidator, validationResult, controller.deleteChildById);


module.exports = router;
