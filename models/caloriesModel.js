const mongoose = require('mongoose');
const calorieSchema = new mongoose.Schema({
    //user_id, year, month, day, id, description, category, and amount

    user_id: {
        type: Number,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    month: {
        type: Number,
        required: true,
    },
    day: {
        type: Number,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['breakfast', 'lunch', 'dinner', 'other'],
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    }
});

const Calorie = mongoose.model('calories', calorieSchema);
module.exports = Calorie;