const http = require('http');
const app = require('./app');
const connectToDatabase = require('../src/config/database')

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

const exitHandler = () => {
    if (server) {
        server.close((err) => {
            if (err) {
                console.error('Error closing server:', err);
                process.exit(1);
            } else {
                console.log('Server closed');
                process.exit(0);
            }
        });
    } else {
        process.exit(0);
    }
};

const startServer = async () => {
    try {
        await connectToDatabase();

        server.listen(PORT, () => {
            console.log(`API started at http://localhost:${PORT}`)
            console.log(`API docs at http://localhost:${PORT}/v1/docs/`)
        });

        process.on('SIGTERM', () => {
            console.log('SIGTERM received');
            exitHandler();
        });

        process.on('SIGINT', () => {
            console.log('SIGINT received');
            exitHandler();
        });

        process.on('uncaughtException', (error) => {
            console.log('Uncaught Exception:', error);
            exitHandler();
        });

        process.on('unhandledRejection', (reason) => {
            console.log('Unhandled Rejection:', reason);
            exitHandler();
        });
    } catch (error) {
        console.error('Error: App failed to start', error);
        process.exit(1);
    }
};

startServer();