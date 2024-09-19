const mongoose = require('mongoose');

// Define the schema for the counter collection
const counterSchema = new mongoose.Schema({

    // The unique ID for the counter, used to identify the counter
    _id: { type: String, required: true },

    // The sequence number for the counter, defaults to 0
    seq: { type: Number, default: 0 }
});

// Create the Counter model using the defined schema
const Counter = mongoose.model('counter', counterSchema);

// Export the Counter model for use in other parts of the application
module.exports = Counter;