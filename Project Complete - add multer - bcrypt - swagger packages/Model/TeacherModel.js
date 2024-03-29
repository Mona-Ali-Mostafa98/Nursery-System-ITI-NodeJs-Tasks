const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fullname: {type: String, unique: true, required: true},
    password: {type: String, minlength: 8, required: true},
    email: {
        type: String, lowercase: true, unique: true, required: true,
        validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        },
    },
    image: String,
    role: { type: String, enum: ["admin", "teacher"], default: "teacher" }
});

module.exports = mongoose.model("Teacher", schema);
