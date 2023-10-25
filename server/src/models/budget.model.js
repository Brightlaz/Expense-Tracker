const { Schema } = require('ottoman');
const { ottoman } = require('../config/ottoman');

const BudgetSchema = new Schema({
    amount: { type: String, required: true },
    category: { type: String },
    user: { type: String, required: true },
    date: { type: String, required: true },
});

const BudgetModel = ottoman.model('budget', BudgetSchema);

module.exports = BudgetModel;