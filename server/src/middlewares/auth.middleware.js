const httpStatus = require('http-status');
const ErrorResponse = require('../utils/errorResponse');

function isAuthenticated(req, res, next) {
  try {
    // Implement the middleware logic to check if the user is authenticate
    if (req.isAuthenticated()) {
      return next();
    }
    
    // User is not logged in, redirect to the login page
    res.status(httpStatus.MOVED_PERMANENTLY).redirect('/v1/auth/login');
  } catch (error) {
    next(new ErrorResponse(error.message, httpStatus.INTERNAL_SERVER_ERROR));
  }
}

module.exports = isAuthenticated;