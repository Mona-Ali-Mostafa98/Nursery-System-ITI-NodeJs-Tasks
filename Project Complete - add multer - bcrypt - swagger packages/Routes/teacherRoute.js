const express = require("express");
const controller = require("./../Controller/teacherController");
const { insertValidator, updateValidator, deleteValidator, getByIdValidator} = require("../Middlewares/validations/teacherValidator");
const validationResult = require("../Middlewares/validations/validationResult");
const upload = require("../Middlewares/multerMiddleware");
const encryptPassword = require('../Middlewares/passwordEncryptionMiddleware');

const router = express.Router();

router.route("/teachers")
  .get(controller.getAllTeachers)
  .post(upload.single('image'), insertValidator, validationResult, encryptPassword, controller.insertTeacher)
  .patch(updateValidator, validationResult, encryptPassword, controller.updateTeacher);

router.get("/teachers/supervisors", controller.getAllClassSupervisors);

router.route("/teachers/:id")
  .get(getByIdValidator, validationResult, controller.getTeacherById)
  .delete(deleteValidator, validationResult, controller.deleteTeacherById);


module.exports = router;
