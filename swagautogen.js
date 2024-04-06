const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger.json';
const endpointsFiles = ['./dist/routes.js','./dist/controllers/*.js','./dist/routes/*.js'];
const config = {
    info: {
        title: 'Elearning endpoints docs',
        description: '',
    },
    tags: [
    {
        name:"Auth",
        description:"Authentication"
    },
    {
      name: 'User',
      description: 'users endpoints'
    },
        {
            name:'Article',
            description:'articles endpoints'
        }
    ],
    host: '',
    schemes: [],
    components:{
        schemas:{
            LoginUser:{
                username:"",
                passwordHash:""
            }
        }
    },
};

swaggerAutogen(outputFile, endpointsFiles, config);
