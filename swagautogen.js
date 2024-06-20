const swaggerAutogen = require('swagger-autogen')({openapi:"3.0.0"});

const outputFile = './swagger.json';
const endpointsFiles = ['./dist/controllers/*.js','./dist/routes/*-grpc.js','./dist/routes/payroute.js'];
const config = {
    info: {
        title: 'gRPC endpoints docs',
        description: '',
    },
    tags: [
   /* {
        name:"Auth",
        description:"Authentication"
    },
    {
        name:"Attachment",
        description:"Attachment endpoints"
    },
    {
      name: 'User',
      description: 'users endpoints'
    },
    {
      name: 'Author',
      description: 'authors endpoints'
    },
    {
        name:'Article',
        description:'articles endpoints'
    },
    {
       name:'suptickets',
       description:'tickets endpoints'
    },*/
    {
        name:"GRPC.Auth",description:"authentication endpoints via grpc"
    },
    {
        name:"GRPC.Article",description:"articles endpoints via grpc"
    },{
        name:"GRPC.Author",description:"authors endpoints via grpc"
    },{
        name:"GRPC.User",description:"users endpoints via grpc"
    },{
        name:"GRPC.User.Ticket",description:"users' tickets endpoints via grpc"
      },
    {
        name:"GRPC.User.Payment",description:"users' payments endpoints via grpc"
      },
      {
        name:"GRPC.User.Organization",description:"owners' orgzs endpoints via grpc"
      },
      {
        name:"GRPC.Organization",description:"organizations endpoints via grpc"
      }
    ],
    host: '',
    schemes: [],
    components:{
        securitySchemes:{
            JWTAuth: {
                type: 'http',
                scheme: 'bearer'
            }
        },
        schemas:{
            LoginUser:{
                username:"",
                passwordHash:""
            },
             CreateUser:{
                 username:"",
                 firstname:"",
                 lastname:"",
                 $IDcardNumber:2980865431210,
                 email:"",
                 password:"",
                 $age:0,
                 type:{type:"string",'@enum':["user","author","supplier","affiliate","owner"]}
             },
             CreateAuthor:{
                 $type:"author"
             },
            AddArticle:{
                cateogry:"",
                imgurl:"",
                content:"",
                title:""
            },
            userAddTicket:{
                type:{type:"string",'@enum':["inquiry","complaint"]},
                $subject:"greet",
                $description:"how are you?"
            },
            userSupTicket:{
                $userid:"4"
            },
            AddBook:{
               $userid:"4",
               $book:{
                   title:"",
                   description:"",
                   source:"",
                   thumbnail:""
               }
           },
            ownerOrgz:{
                $owerId:1
            },
          CreateOrgz:{
              $userId:0,
              $orgz:{
                $type:"",
                $title:"",
                $description:"",
                $specs:[{$name:"",$value:""}]
             }
          },
          chnagePassword:{
              $passphase:"test_65"
          },
         CreateProduct:{
             $userId:1,
             $product:{
                 $title:"",
                 $price:20,
                 $specs:[{$name:"",$value:""}]
             }
             
         },
         subscribeProduct:{
             $productId:1,
         }
    }}
};

swaggerAutogen(outputFile, endpointsFiles, config);
