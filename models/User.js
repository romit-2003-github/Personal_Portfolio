const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    emailId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true,
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
    }
});

module.exports = mongoose.model('users', userSchema);