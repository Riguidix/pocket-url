const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const linksSchemas = new Schema({
    hash: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: null
    },
    originalURL: {
        type: String,
        required: true
    },
    expiredAt: {
        type: Date,
        default: Date.now,
        index: { expires: '5m' },
    }
}, { timestamps: true });

module.exports = mongoose.model('Link', linksSchemas);