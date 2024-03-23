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
});

module.exports = mongoose.model("Child", schema);
