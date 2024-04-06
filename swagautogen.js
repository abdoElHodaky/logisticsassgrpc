const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger.json';
const endpointsFiles = ['./dist/routes/*.js','./dist/routes.js','./dist/controllers/*.js'];
const config = {
    info: {
        title: 'Elearning endpoints docs',
        description: '',
    },
    tags: ["Users","Articles"],
    host: '',
    schemes: [],
};

swaggerAutogen(outputFile, endpointsFiles, config);
