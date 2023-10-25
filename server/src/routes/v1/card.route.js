const express = require('express');
const {
    createCard,
    getAllCards,
    findCardByID,
    updateCardByID,
    deleteCardByID,
} = require('../../controllers/budget.controller');
const isAuthenticated = require('../../middlewares/auth.middleware');

const router = express.Router();

router.post('/', isAuthenticated, createCard);
router.get('/', isAuthenticated, getAllCards);
router.get('/:id', isAuthenticated, findCardByID);
router.put('/:id', isAuthenticated, updateCardByID);
router.delete('/:id', isAuthenticated, deleteCardByID);

module.exports = router;