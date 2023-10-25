const { Schema } = require('ottoman');
const { ottoman } = require('../config/ottoman');
const CategoryModel = require('./category.model');
const ProfileModel = require('./profiles.model');

const BudgetSchema = new Schema({
    customId: { type: String, auto: 'uuid' },
    Amount: { type: String, required: true },
    category: { type: String },
    user: { type: Schema.Types.Relation,
        ref: ProfileModel,
        required: true
    },
    Date: { type: Date, required: true },
});

const BudgetModel = ottoman.model('budget', BudgetSchema);

module.exports = BudgetModel;