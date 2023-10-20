const { model, Schema } = require('ottoman');

const ProfileSchema = new Schema({
    googleId: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: String },
});

ProfileSchema.index.findByName = { by: 'name', type: 'n1ql' }

console.log('Before model function');

const ProfileModel = model('profile', ProfileSchema, {
    idKey: 'pid',
    collectionName: 'profile'
});

console.log('After model function');
console.log('ProfileModel:', ProfileModel);

module.exports = ProfileModel;