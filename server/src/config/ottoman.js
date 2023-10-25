const { Ottoman } = require('ottoman');
require('dotenv').config();

const ottoman = new Ottoman();

const initDB = async () => {
    try {
        await ottoman.connect({
            connectionString: process.env.CB_URL,
            bucketName: process.env.CB_BUCKET,
            username: process.env.CB_USER,
            password: process.env.CB_PASS
        });

        await ottoman.start();
        console.log('Database connection successful!');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
}

module.exports = { ottoman, initDB };