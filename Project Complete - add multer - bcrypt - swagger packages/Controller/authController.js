const TeacherSchema = require("./../Model/TeacherModel");
const ChildSchema = require("./../Model/ChildModel");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const fs = require("fs");

exports.login = async (req, res, next) => {
    try {
        const {email, password} = req.body;

        let user = await TeacherSchema.findOne({ email: email });

        if (!user) {
            user = await ChildSchema.findOne({ email: email });
            if (!user) {
                return res.status(401).json({ message: "Not Authenticated, Incorrect email or password......." });
            }
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(401).json({ message: "Not Authenticated, Incorrect email or password......." });
        }

        role = user.role ? user.role : 'child';

        const token = generateToken(user._id, role);
        res.json({ message: "Login successfully.......", token: token });
        
    } catch (error) {
        next(error);
    }
};

exports.register = (req, res, next) => {
    const teacherData = {
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
            const token = generateToken(teacher._id, teacher.role);
            res.status(200).json({ teacher, token:token, message: "Teacher register Successfully......."});
        })
        .catch((error) => next(error));
};

function generateToken(userId, role) {
    return jwt.sign(
        {
            _id: userId,
            role: role,
        },
        process.env.SECRET_KEY || "Nursery System App",
        {expiresIn: "24hr"}
    );
}

/* // old code of lab
exports.login = (req, res, next) => {
    TeacherSchema.findOne({
        email: req.body.email,
        password: req.body.password,
    })
        .then((teacher) => {
            if (!teacher) {
                ChildSchema.findOne({
                    email: req.body.email,
                    password: req.body.password,
                })
                    .then((child) => {
                        if (!child) {
                            res.status(401).json({message: "Not Authenticated, Incorrect email or password........"});
                            // throw new Error("Not Authenticated, Incorrect email or password........");
                        } else {
                            const token = generateToken(child._id, "child");
                            res.json({message: "Login successful", token: token});
                        }
                    })
                    .catch((error) => next(error));
            } else {
                // Create generate JWT token
                const token = generateToken(teacher._id, "teacher");
                res.json({message: "Login successfully........", token: token});
            }
        })
        .catch((error) => next(error));
};
*/