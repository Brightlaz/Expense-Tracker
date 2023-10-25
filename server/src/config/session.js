const session = require('express-session');
require('dotenv').config()

const configureSession = () => {
  return session({
    secret: process.env.SESSION_SECERT,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 72 * 60 * 60 * 1000, // 72 hours
    },
  });
};

module.exports = configureSession;