const ottoman = require('ottoman');
require('dotenv').config()

const connectToDatabase = async () => {
    try {
        await ottoman.connect({
            bucketName: process.env.CB_BUCKET,
            connectionString: process.env.CB_URL,
            username: process.env.CB_USER,
            password: process.env.CB_PASS,
        })

        await ottoman.start();
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectToDatabase;