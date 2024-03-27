const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
    model: { type: String, required: true },
    id_value: { type: Number, default: 0 }
});

const CounterModel = mongoose.model('Counter', counterSchema);

async function generateNextIdValue(modelName) {
    try {
        const counter = await CounterModel.findOneAndUpdate(
            { model: modelName },
            { $inc: { id_value: 1 } },
            { new: true, upsert: true }
        );
        return counter.id_value;
    } catch (error) {
        throw new Error(`Error generating sequence value for model ${modelName}: ${error.message}`);
    }
}

module.exports = { CounterModel, generateNextIdValue };