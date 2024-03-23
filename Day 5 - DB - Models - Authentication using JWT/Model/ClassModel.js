const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    _id: Number,
    name: {type: String, required: true, unique: true, minlength: 2},
    supervisor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
    },
    children: [{type: Number, ref: 'Child',}] // array of child
});

module.exports = mongoose.model("Class", schema);
