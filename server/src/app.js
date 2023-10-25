const express = require('express');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');
const passport = require('passport');
const cookieParser = require('cookie-parser');

const configureSession = require('./config/session');
const errorHandler = require('./middlewares/error.middleware');
const limiter = require('./middlewares/rateLimiter.middleware');
const setPassport = require('./config/passport');
const routes = require('./routes/v1');

const app = express();

// Security Middlewares Configuration
app.use(helmet()); // set security HTTP headers
app.use(express.json()); // parse json request body
app.use(express.urlencoded({ extended: true })); // parse urlencoded request body
app.use(compression()); // gzip compression
app.use(limiter); // Apply the rate limiting middleware to all requests
app.use(cors()); // enable cors
app.use(cookieParser())
app.options('/*', cors()); // enable cors
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

// Passport JWT Configuration
setPassport()
app.use(configureSession());
app.use(passport.initialize());
app.use(passport.session())

// v1 API routes
app.use('/v1', routes);

app.use('/*', function (req, res) {
    res.send('<body onload="window.location = \'/swagger-ui/\'"><a href="/v1/docs">Click to visit the API documentation</a>')
});

// Error Handler Middleware
app.use(errorHandler);

module.exports = app;