const TeacherSchema = require("./../Model/TeacherModel");
const ChildSchema = require("./../Model/ChildModel");

const jwt = require("jsonwebtoken");

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
