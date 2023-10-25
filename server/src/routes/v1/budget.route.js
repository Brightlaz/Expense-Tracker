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

/**
 * @swagger
 * tags:
 *   name: Budgets
 *   description: Endpoints for managing Budgets
 */

/**
 * @swagger
 * /v1/budgets:
 *   post:
 *     summary: Create a new budget by a user
 *     tags: [Budgets]
 *     security:
 *       - googleAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BudgetData'
 *     responses:
 *       201:
 *         description: Successful mentor creation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/BudgetFullData'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 * 
 *   get:
 *     summary: Get all budgets
 *     tags: [Budgets]
 *     security:
 *       - googleAuth: []
 *     parameters:
 *       - name: limit
 *         in: query
 *         schema:
 *           type: integer
 *           minimum: 1
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/BudgetFullData'
 *       400:
 *         description: Bad request.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /v1/budgets/{id}:
 *   get:
 *     summary: A user get their budget by ID
 *     tags: [Budgets]
 *     security:
 *       - googleAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/BudgetFullData'
 *       400:
 *         description: Bad request.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *  
 *   put:
 *     summary: Update a budget by user(owner)
 *     tags: [Budgets]
 *     security:
 *       - googleAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/BudgetFullData'
 *       400:
 *         description: Bad request.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *  
 *   delete:
 *     summary: User delete their budget
 *     tags: [Budgets]
 *     security:
 *       - googleAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: null
 *       400:
 *         description: Bad request.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 * 
 */