const express = require('express');
const {
    getAllUsers,
    getUserByID,
    updateUser,
    deleteUserByID
} = require('../../controllers/user.controller');
const isAuthenticated = require('../../middlewares/auth.middleware');

const router = express.Router();

router.get(isAuthenticated, getAllUsers)

router
    .route('/:id')
    .get(isAuthenticated, getUserByID)
    .put(isAuthenticated, updateUser)
    .delete(isAuthenticated, deleteUserByID)

module.exports = router;