const httpStatus = require('http-status');
const ErrorResponse = require('../utils/errorResponse');
const ProfileModel  = require('../models/profiles.model');

async function googleCallback(req, res, next) {
    try {
        const profile = req.user;

        let user = await ProfileModel.find({ googleId: profile.id });

        if (user.rows.length === 0) {
            user = new ProfileModel({
                googleId: profile.id,
                fullName: profile.displayName,
                email: profile._json.email,
                avatar: profile._json.picture,
            });

            await user.save()

            res.status(httpStatus.MOVED_PERMANENTLY).redirect('https://expense-tracker-jet-zeta-86.vercel.app/userdashboard');
        } else {
            res.status(httpStatus.MOVED_PERMANENTLY).redirect('https://expense-tracker-jet-zeta-86.vercel.app/userdashboard');
        }
    } catch (error) {
        next(new ErrorResponse(error.message, httpStatus.INTERNAL_SERVER_ERROR));
    }
};

function logout(req, res, next) {
    try {
        req.logout((err) => {
            if (err) return next(new ErrorResponse(err.message, httpStatus.INTERNAL_SERVER_ERROR));

            req.session = null;
        });

        res.status(httpStatus.MOVED_PERMANENTLY).redirect('/');
    } catch (error) {
        next(new ErrorResponse(error.message, httpStatus.INTERNAL_SERVER_ERROR));
    }
};

module.exports = {
    googleCallback,
    logout,
}