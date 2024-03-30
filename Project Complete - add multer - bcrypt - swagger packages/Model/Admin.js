const TeacherSchema = require("./TeacherModel");
const bcrypt = require("bcrypt");

const adminData = {
    _id: "507f1f77bcf86cd799439031",
    fullname: 'Admin',
    username: 'admin',
    password: '12345678',
    email: 'admin@gmail.com',
    image: 'uploads\\user.png',
    role: 'admin'
};

const addAdmin = async () => {
    try {
        const admin = await TeacherSchema.findOne({ username: 'admin', email:'admin@gmail.com' });

        if (admin) {
            console.log("Admin already exists......");
            return;
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(adminData.password, salt);
        adminData.password = hashedPassword;

        const teacherObject = new TeacherSchema(adminData);
        await teacherObject.save();

        console.log("Admin created successfully......");
    } catch (error) {
        console.error("Error adding admin user:", error);
    }
};

module.exports = addAdmin;
