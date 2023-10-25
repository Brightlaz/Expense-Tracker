const express = require('express');
const {
    getAllUsers,
    getUserByID,
    updateUser,
    deleteUserByID
} = require('../../controllers/user.controller');
const isAuthenticated = require('../../middlewares/auth.middleware');

const router = express.Router();

router.get('/', isAuthenticated, getAllUsers);
router.get('/:id', isAuthenticated, getUserByID);
router.put('/:id', isAuthenticated, updateUser);
router.delete('/:id', isAuthenticated, deleteUserByID);

module.exports = router;