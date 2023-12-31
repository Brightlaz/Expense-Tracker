const httpStatus = require('http-status');
const z = require('zod');
const ErrorResponse = require('../utils/errorResponse');
const BudgetModel = require('../models/budget.model');

const budgetCreateSchema = z.object({
    amount: z.string().min(1),
    category: z.string(),
    date: z.string(),
});

const budgetUpdateSchema = z.object({
    amount: z.string().min(1).max(255).optional(),
    date: z.string().optional(),
});

async function createBudget(req, res, next) {
    try {
        const userId = req.user.id
        const budgetData = budgetCreateSchema.parse(req.body);

        const newBudget = new BudgetModel({
            Amount: budgetData.Amount,
            user: userId,
            category: budgetData.category,
            Date: budgetData.Date
        });

        // Save the budget to the database.
        await newBudget.save();

        res.status(httpStatus.CREATED).json({
            success: true,
            data: newBudget,
        });
    } catch (error) {
        next(error);
    }
}

async function getAllBudgets(req, res, next) {
    try {
        const limit = parseInt(req.query.limit, 10) || 10;
        const user = req.user;

        const budgets = await BudgetModel.find({ user: user.id }, {
            limit: limit,
            sort: { Amount: 'asc' },
            populate: 'category',
        });

        if (budgets.rows.length === 0)
            return next(new ErrorResponse('Budgets not found', httpStatus.NOT_FOUND));

        res.status(httpStatus.OK).json({
            success: true,
            data: budgets.rows,
        });
    } catch (error) {
        next(error);
    }
}

async function getBudget(req, res, next) {
    try {
        const userId = req.user.id;
        const budgetId = req.params.id;

        const budgetDoc = await BudgetModel.findById(budgetId);

        // Check if the budget document exists and if it's associated with the correct user.
        if (!budgetDoc || budgetDoc.user.toString() !== userId) 
            return next(new ErrorResponse('Budget not found', httpStatus.NOT_FOUND));

        res.status(200).json({
            success: true,
            data: budgetDoc.toObject(),
        });
    } catch (error) {
        next(error);
    }
}

async function updateBudget(req, res, next) {
    try {
        const userId = req.user.id; 
        const budgetId = req.params.id;

        // Fetch the budget document from Couchbase.
        const budgetDoc = await BudgetModel.findById(budgetId);

        // Check if the budget document exists and if it's associated with the correct user.
        if (!budgetDoc || budgetDoc.user.toString() !== userId) 
            return next(new ErrorResponse('Budget not found', httpStatus.NOT_FOUND));

        // Validate and parse the request data using the Zod schema.
        const updateData = budgetUpdateSchema.parse(req.body);

        // Update the budget document only with the specified fields (Amount, category, Date).
        if (updateData.Amount !== undefined) {
            budgetDoc.Amount = updateData.Amount;
        }
        if (updateData.Date !== undefined) {
            budgetDoc.Date = updateData.Date;
        }

        // Save the updated budget document back to Couchbase.
        await budgetDoc.save();

        res.status(httpStatus.OK).json({
            success: true,
            data: budgetDoc.toObject(),
        });
    } catch (error) {
        next(error);
    }
}

async function deleteBudget(req, res, next) {
    try {
        const userId = req.user.id;
        const budgetId = req.params.id;

        // Use Ottoman's `Bucket.get` method to fetch the budget document by ID.
        const budgetDoc = await BudgetModel.findById(budgetId);

        // Check if the budget document exists and if it's associated with the correct user.
        if (!budgetDoc || budgetDoc.user.toString() !== userId) {
            return next(new ErrorResponse('Budget not found', httpStatus.NOT_FOUND));
        }

        await budgetDoc.remove();

        res.status(httpStatus.OK).json({
            success: true,
            data: null,
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createBudget,
    getAllBudgets,
    getBudget,
    updateBudget,
    deleteBudget
}