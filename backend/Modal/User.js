const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true,
    },
    lname: {
        type: String,
        required: true,
        trim: true,
    },
    number: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,

    },
    address: {
        type: String,
        required: true,
        trim: true,
    }
},);


const User = mongoose.model('User', userSchema);

module.exports = User;
