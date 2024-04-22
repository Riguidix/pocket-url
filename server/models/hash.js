const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hashSchema = new Schema({
    hash: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Hash', hashSchema);