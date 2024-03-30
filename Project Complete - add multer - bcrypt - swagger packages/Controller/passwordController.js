const TeacherSchema = require("./../Model/TeacherModel");
const ChildSchema = require("./../Model/ChildModel");

const bcrypt = require("bcrypt");

exports.changePassword = async (req, res, next) => {
    const { _id, currentPassword, newPassword, confirmPassword } = req.body;

    try {
        if (!_id) {
            return res.status(400).json({ message: "ID is required, enter valid _id." });
        }

        let user = await TeacherSchema.findById(_id);

        if (!user) {
            user = await ChildSchema.findById(_id);
            if (!user) {
                return res.status(401).json({ message: "user not exists......." });
            }
        }

        const isPasswordValid = await bcrypt.compare(currentPassword, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Current password is incorrect......" });
        }

        if (newPassword === currentPassword) {
            return res.status(400).json({ message: "New password cannot be the same as the current password......" });
        }

        if (newPassword !== confirmPassword) {
            return res.status(400).json({ message: "New password and confirmation password do not match......" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        user.password = hashedPassword;

        await user.save();

        res.status(200).json({  child: user, message: "Password changed successfully......." });
    } catch (error) {
        console.error("Error changing password:", error);
        res.status(500).json({ message: "error occurred during changing password......." });
        next(error);
    }
};
