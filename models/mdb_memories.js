const mongoose = require('mongoose');

// const yearobj = mongoose.Schema({
//     year: String,
//     banner: String,
//     pictures: [String]
// });
const memories = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    year: String,
    banner: String,
    pictures: [String]
});
module.exports = mongoose.model('memories', memories);