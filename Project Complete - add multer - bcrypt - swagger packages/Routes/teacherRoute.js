const express = require("express");
const controller = require("./../Controller/teacherController");
const { insertValidator, updateValidator, deleteValidator, getByIdValidator} = require("../Middlewares/validations/teacherValidator");
const validationResult = require("../Middlewares/validations/validationResult");
const upload = require("../Middlewares/multerMiddleware");
const encryptPassword = require('../Middlewares/passwordEncryptionMiddleware');
const {isAdmin, isTeacherOrAdmin} = require("../Middlewares/authMiddleware");

const router = express.Router();

router.route("/teachers")
  .get(isAdmin, controller.getAllTeachers)
  .post(isAdmin, upload.single('image'), insertValidator, validationResult, encryptPassword, controller.insertTeacher)
  .patch(isTeacherOrAdmin, updateValidator, validationResult, encryptPassword, controller.updateTeacher);

router.get("/teachers/supervisors", isAdmin, controller.getAllClassSupervisors);

router.route("/teachers/:id")
  .get(isTeacherOrAdmin, getByIdValidator, validationResult, controller.getTeacherById)
  .delete(isAdmin, deleteValidator, validationResult, controller.deleteTeacherById);


module.exports = router;
