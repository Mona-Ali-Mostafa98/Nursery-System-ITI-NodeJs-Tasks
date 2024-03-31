const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,     // commented it because it added by default from mongo and not required to define
    username: { type: String, unique: true, required: true, minlength: 2, maxlength: 50, match: /^[a-zA-Z0-9_]+$/, trim: true },
    fullname: { type: String, unique: true, required: true, trim: true},
    password: { type: String, minlength: 8, required: true, trim: true },
    email: {
        type: String, lowercase: true, unique: true, required: true,
        validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        },
    },
    image: { type: String, required: true },
    role: { type: String, enum: ["admin", "teacher"], default: "teacher" }
});

module.exports = mongoose.model("Teacher", schema);
