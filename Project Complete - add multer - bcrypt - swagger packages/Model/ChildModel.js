const mongoose = require("mongoose");
const { generateNextIdValue } = require("./../Model/CounterModel");

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
    username: { type: String, required: true, minlength: 2, maxlength: 50, match: /^[a-zA-Z0-9_]+$/, trim: true },    
    fullname: {type: String, required: true, minlength: 2, trim: true},
    age: { type: Number, required: true },
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
    password: {type: String, minlength: 8, required: true, trim: true},
    image: { type: String, required: true },
});

// Auto Increment Id
schema.pre('save', async function (next) {
    if (!this.isNew) return next();

    try {
        this._id = await generateNextIdValue('Child'); // Pass model name
        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model("Child", schema);
