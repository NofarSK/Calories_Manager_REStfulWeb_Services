const mongoose = require('mongoose');

// Define the schema for the calorie entries
const calorieSchema = new mongoose.Schema({

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

// Create the Calorie model using the defined schema
const Calorie = mongoose.model('calories', calorieSchema);

// Export the Calorie model for use in other parts of the application
module.exports = Calorie;