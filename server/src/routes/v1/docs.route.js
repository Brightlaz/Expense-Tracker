const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = require('../../docs/swaggerDef');
const isAuthenticated = require('../../middlewares/auth.middleware');

const router = express.Router();

const specs = swaggerJsdoc({
    swaggerDefinition,
    apis: ['src/docs/*.yml', 'src/routes/v1/*.js'],
});

router.use('/', swaggerUi.serve);
router.get(
    '/',
    isAuthenticated,
    swaggerUi.setup(specs, {
        explorer: true,
    })
);

module.exports = router;