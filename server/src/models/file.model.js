const { Schema } = require('ottoman');
const { ottoman } = require('../config/ottoman')

const FileSchema = new Schema({
    customId: { type: String, auto: 'uuid' },
    public_id: { type: String, required: true },
    url: { type: String, required: true },
    mimeType: { type: String, required: true },
});

const FileModel = ottoman.model('file', FileSchema);

module.exports = FileModel;