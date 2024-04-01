const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Nursery System Apis',
            version: '1.0.0',
            description: 'API documentation for my Nursery System Node.js application',
        },
        servers: [
            {
                url: process.env.APP_URL || 'http://localhost:8080',
                description: 'Development server',
            },
        ],
    },
    apis: ['swaggerApis.js'],
};

module.exports = swaggerJsdoc(options);
