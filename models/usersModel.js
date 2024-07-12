const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    // id, first_name, last_name, and birthday.

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

const User = mongoose.model('users', userSchema);
module.exports = User;