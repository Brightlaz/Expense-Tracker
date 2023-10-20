const express = require('express');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const passport = require('passport');

const app = express();

const ProfileModel = require('../src/models/profiles.model');

console.log(ProfileModel)
// Security Middlewares Configuration
app.use(helmet()); // set security HTTP headers
app.use(express.json()); // parse json request body
app.use(express.urlencoded({ extended: true })); // parse urlencoded request body
app.use(compression()); // gzip compression
app.use(cors()); // enable cors
app.options('/*', cors()); // enable cors

// Passport JWT Configuration
app.use(passport.initialize());

// v1 API routes
app.get('/', function (req, res) {
    res.send('<body onload="window.location = \'/swagger-ui/\'"><a href="/docs/">Click here to see the API</a>')
});

app.post('/', async (req, res) => {
    try {
        const { firstName, lastName, email, avatar } = req.body;

        const user = new ProfileModel({ firstName, lastName, email, avatar });

        const us = await user.save()

        res.status(200).send({ us });
    } catch (error) {
        console.log(error)
    }
});

module.exports = app;