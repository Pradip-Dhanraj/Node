const mongoose = require('mongoose');

const user = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    id: String,
    icon: String
});

module.exports = mongoose.model('users', user);