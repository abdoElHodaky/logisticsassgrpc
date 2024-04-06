const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger.json';
const endpointsFiles = ['./dist/routes.js','./dist/controllers/*.js','.dist/routes/*.js'];
const config = {
    info: {
        title: 'Elearning endpoints docs',
        description: '',
    },
    tags: [                   
    {
      name: 'User',
      description: ''
    },
        {
            name:'Article',
            description:''
        }
    ],
    host: '',
    schemes: [],
};

swaggerAutogen(outputFile, endpointsFiles, config);
