const mongoose = require("mongoose");
const {generateNextIdValue} = require("./CounterModel");

const schema = new mongoose.Schema({
    _id: Number,
    name: { type: String, required: true, unique: true, minlength: 2, trim: true },
    supervisor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
    },
    children: [{type: Number, ref: 'Child',}] // array of child
});

// Auto Increment Id
schema.pre('save', async function (next) {
    if (!this.isNew) return next();

    try {
        this._id = await generateNextIdValue('Class');
        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model("Class", schema);
