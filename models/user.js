const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    school: {
        type: String,
        required: true
    },
});

const user = mongoose.model('user', userSchema);
module.exports = user