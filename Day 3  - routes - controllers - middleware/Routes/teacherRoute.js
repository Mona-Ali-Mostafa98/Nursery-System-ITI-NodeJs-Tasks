const express = require("express");
const controller = require("./../Controller/teacherController");
const { insertValidator, updateValidator, deleteValidator, getByIdValidator} = require("../Middlewares/validations/teacherValidator");
const validationResult = require("../Middlewares/validations/validationResult");

const router = express.Router();

router.route("/teachers")
  .get(controller.getAllTeachers)
  .post(insertValidator, validationResult, controller.insertTeacher)
  .patch(updateValidator, validationResult, controller.updateTeacher);

router.get("/teachers/supervisors", controller.getAllClassSupervisors);

router.route("/teachers/:_id")
  .get(getByIdValidator, validationResult, controller.getTeacherById)
  .delete(deleteValidator, validationResult, controller.deleteTeacherById);


module.exports = router;
