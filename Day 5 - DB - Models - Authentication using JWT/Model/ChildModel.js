const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
    {
        city: String,
        street: String,
        building: String,
    },
    {_id: false}
);

const schema = new mongoose.Schema({
    _id: Number,
    fullname: {type: String, required: true, minlength: 2},
    age: Number,
    level: {type: String, enum: ["PreKG", "KG1", "KG2"]},
    address: addressSchema,
    email: {
        type: String, lowercase: true, unique: true, required: true,
        validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        },
    },
    password: {type: String, minlength: 8, required: true},
});

module.exports = mongoose.model("Child", schema);
