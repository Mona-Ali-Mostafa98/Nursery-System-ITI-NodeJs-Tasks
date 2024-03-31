const TeacherSchema = require("./../Model/TeacherModel");
const ClassSchema = require("./../Model/ClassModel");
const fs = require('fs');

exports.getAllTeachers = (req, res, next) => {
    TeacherSchema.find({})
        .then((teachers) => {
            res.status(200).json({teachers});
        })
        .catch((error) => next(error));
};

exports.getTeacherById = (req, res, next) => {
    TeacherSchema.findOne({_id : req.params.id})
        .then((teacher) => {
            if (!teacher) {
                throw new Error("Teacher not exists.......");
            }
            res.status(200).json({ teacher });
        })
        .catch((error) => {next(error)});
};

exports.insertTeacher = (req, res, next) => {
    const teacherData = {
        // _id: req.body._id,   // commented it because it added by default from mongo and not required to define
        fullname: req.body.fullname,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        image: req.file ? req.file.path : null,
    };

    console.log("File path:", req.file ? req.file.path : "No file uploaded");

    if (req.file && !fs.existsSync(req.file.path)) {
        return res.status(400).json({ message: "Uploaded file not found or file path is incorrect" });
    }

    let teacherObject = new TeacherSchema(teacherData);
    teacherObject
        .save()
        .then((teacher) => {
            res.status(200).json({ teacher, message: "Teacher Added Successfully......."});
        })
        .catch((error) => next(error));
};

exports.updateTeacher = (req, res, next) => {
    const filter = { _id: req.body._id };
    const update = req.body;

    // findOneAndUpdate - findByIdAndUpdate - updateOne()
    TeacherSchema.findOneAndUpdate(filter, update, {new: true}) // to return new object
        .then(teacher => {
            if (!teacher) {
                throw new Error("Teacher not exists.......");
                // return res.status(404).json({ message: "Teacher not exists......." });
            }
            res.status(200).json({ teacher, message: "Teacher updated successfully......." });
        })
        .catch(error => next(error));
};

exports.deleteTeacherById = (req, res, next) => {
    TeacherSchema.deleteOne({ "_id" : req.params.id })// return teacher { acknowledged: true, deletedCount: 0 or 1 }
        .then((object) => {
            if (!object.deletedCount) {
                throw new Error("Teacher not exists.......");
            }
            res.status(200).json({message : "Teacher Deleted Successfully....."});
        })
        .catch((error) => {next(error)});
};

exports.getAllClassSupervisors = (req, res, next) => {
    ClassSchema.find({}, {_id:0, name:1})
        .populate({ path: 'supervisor', select: 'fullname' })

        .then(classes => {
            const supervisors = classes.map(classSupervisor => classSupervisor.supervisor);
            res.status(200).json({ supervisors: classes, message: "Class supervisors retrieved successfully" });
        })
        .catch(error => next(error));
};

