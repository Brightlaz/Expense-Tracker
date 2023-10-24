const { Schema } = require('ottoman');
const { ottoman } = require('../config/ottoman')

const ProfileSchema = new Schema({
    googleId: { type: String, required: true, index: true },
    avatar: { type: String, default: null },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: Number, default: null },
    occupation: { type: String, default: null },
    salary: { type: Number, default: null },
    saving: { type: Number, default: null },
    goal: { type: Number, default: null },
});

const ProfileModel = ottoman.model('profile', ProfileSchema);

module.exports = ProfileModel;