const { Schema } = require('ottoman');
const { ottoman } = require('../config/ottoman');
const ProfileModel = require('./profiles.model');
const bcrypt = require('bcryptjs');

const SALT_ROUNDS = 10;

const CardSchema = new Schema({
    customId: { type: String, auto: 'uuid' },
    user: { type: Schema.Types.Relation, ref: ProfileModel, required: true },
    holderName: { type: String, required: true },
    cardNumber: { type: String, required: true },
    dateEnd: { type: Date, required: true },
    CVV: { type: String, required: true },
});

// Pre-save hook to encrypt CVV and card number before saving.
CardSchema.pre('save', async function (next) {
    try {
        const card = this;
        if (!card.isModified('CVV') || !card.isModified('cardNumber')) {
            return next();
        }

        const encryptedCVV = await bcrypt.hash(card.CVV, SALT_ROUNDS);
        const encryptedCardNumber = await bcrypt.hash(card.cardNumber, SALT_ROUNDS);

        card.CVV = encryptedCVV;
        card.cardNumber = encryptedCardNumber;

        next();
    } catch (error) {
        next(error);
    }
});

const CardModel = ottoman.model('card', CardSchema);

module.exports = CardModel;