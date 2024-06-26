const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
    try {
        let token = req.get("authorization").split(" ")[1];
        console.log(token);
        let decoded_token = jwt.verify(token, process.env.SECRET_KEY);
        console.log(decoded_token);
        req.token = decoded_token;
        next();
    } catch (error) {
        error.message = "You Are Not Authenticated......";
        next(error);
    }
};

module.exports.isTeacher = (req, res, next) => {
    if (req.token.role == "teacher") next();
    else next(new Error("You Are Not Authorized......"));
};

module.exports.isChild = (req, res, next) => {
    if (req.token.role == "child") next();
    else next(new Error("You Are Not Authorized......"));
};
