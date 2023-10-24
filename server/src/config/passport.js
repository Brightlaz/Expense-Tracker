const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
require('dotenv').config();

const setPassport = () => {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_OAUTH_CLIENT_ID || '',
                clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || '',
                callbackURL: `${process.env.BASE_URL}/v1/auth/google/callback`
            },
            async (accessToken, refreshToken, profile, done) => {
                try {
                    return done(null, profile);
                } catch (err) {
                    return done(err, null);
                }
            }
        )
    );

    // Serialize and deserialize user
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((obj, done) => {
        done(null, obj);
    });
}

module.exports = setPassport;