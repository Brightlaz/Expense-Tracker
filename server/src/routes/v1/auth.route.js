const express = require('express');
const passport = require('passport');

const { googleCallback, logout } = require('../../controllers/auth.controller');
const isAuthenticated = require('../../middlewares/auth.middleware');

const router = express.Router();

router.get('/login', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: '/v1/auth/login', failureMessage: true }),
    googleCallback,
);

router.get('/logout', isAuthenticated, logout);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Endpoints related to user authentication
 */


/**
 * @swagger
 * /v1/auth/login:
 *   get:
 *     tags: [Authentication]
 *     summary: Redirects to Google login for OAuth 2.0 authentication
 *     description: Redirects the user to Google's login page for OAuth 2.0 authentication.
 */

/**
 * @swagger
 * /v1/auth/google/callback:
 *   get:
 *     tags: [Authentication]
 *     summary: Google OAuth 2.0 callback
 *     description: Handles the callback after successful Google OAuth 2.0 authentication.
 *                  If successful redirects to success route else to google login
 */

/**
 * @swagger
 * /v1/auth/logout:
 *   get:
 *     tags: [Authentication]
 *     security:
 *        - googleAuth: []
 *     summary: Logout and terminate the session
 *     description: Logs out the user and terminates the session.
 */