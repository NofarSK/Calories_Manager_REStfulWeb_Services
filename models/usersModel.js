const mongoose = require('mongoose');

// Define the schema for the user collection
const userSchema = new mongoose.Schema({

    id: {
        type: Number,
        required: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    birthday: {
        type: Date,
        required: true,
    }

});

// Create the User model using the defined schema
const User = mongoose.model('users', userSchema);

// Export the User model for use in other parts of the application
module.exports = User;