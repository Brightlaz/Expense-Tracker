const express = require('express');
const {
    createBudget,
    getAllBudgets,
    getBudget,
    updateBudget,
    deleteBudget
} = require('../../controllers/budget.controller');
const isAuthenticated = require('../../middlewares/auth.middleware');

const router = express.Router();

router.post('/', isAuthenticated, createBudget);
router.get('/', isAuthenticated, getAllBudgets);
router.get('/:id', isAuthenticated, getBudget);
router.put('/:id', isAuthenticated, updateBudget);
router.delete('/:id', isAuthenticated, deleteBudget); 

module.exports = router;