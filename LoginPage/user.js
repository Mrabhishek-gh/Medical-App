const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email:String,
    password: String
}, { collection: 'USER DATABASE'});

module.exports = mongoose.model('User', userSchema);