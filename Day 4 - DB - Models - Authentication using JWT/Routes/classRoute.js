// classRoute.js

const express = require("express");
const controller = require("./../Controller/classController");
const { insertValidator, updateValidator, deleteValidator, getByIdValidator} = require("../Middlewares/validations/classValidator");
const validationResult = require("../Middlewares/validations/validationResult");

const router = express.Router();

router.route("/classes")
  .get(controller.getAllClasses)
  .post(insertValidator, validationResult, controller.insertClass)
  .patch(updateValidator, validationResult, controller.updateClass);

router.get("/classes/child/:id",getByIdValidator, validationResult, controller.getAllClassChildren);

router.route("/classes/teacher/:id")
  .get(getByIdValidator, validationResult, controller.getAllClassSupervisorInfo);

router.route("/classes/:id")
  .get(getByIdValidator, validationResult, controller.getClassById)
  .delete(deleteValidator, validationResult, controller.deleteClassById);

module.exports = router;
