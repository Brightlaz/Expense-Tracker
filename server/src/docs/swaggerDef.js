const { version } = require('../../package.json');

const PORT = process.env.PORT || 3000;

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'Expentra API Documentation',
    version,
    license: {
      name: 'ISC',
      url: 'https://github.com',
    },
  },
  servers: [
    {
      url: `http://localhost:${PORT}`,
    },
  ],
};

module.exports = swaggerDef;