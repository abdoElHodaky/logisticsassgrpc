const swaggerAutogen = require('swagger-autogen')({openapi:"3.0.0"});

const outputFile = './swagger.json';
const endpointsFiles = ['./dist/controllers/*.js','./dist/routes/*-grpc.js','./dist/routes/payroute.js'];
const config = {
    info: {
        title: 'Supply chain/Logistics gRPC endpoints docs',
        description: '',
    },
    tags: [
    {
        name:"Auth",description:"authentication endpoints via grpc"
    },
    {
        name:"Article",description:"articles endpoints via grpc"
    },{
        name:"Author",description:"authors endpoints via grpc"
    },{
        name:"User",description:"users endpoints via grpc"
    },{
        name:"User.Ticket",description:"users' tickets endpoints via grpc"
      },
    {
        name:"User.Payment",description:"users' payments endpoints via grpc"
      },
      {
        name:"User.Organization",description:"owners' orgzs endpoints via grpc"
      },
      {
        name:"Organization",description:"organizations endpoints via grpc"
      },
      {
        name:"Purshase",description:"purshases' orgzs endpoints via grpc"
      },
     {
        name:"Category",description:"Categories'  endpoints via grpc"
      },
        {
        name:"Verification",description:"Verifications'  endpoints via grpc"
        },
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
        CreatePurshase:{
            $userId:"1",
            $itemsIds:[1,2,3]
        }
       ,subscribeProduct:{
             $productId:1,
         },
        createCategory:{
            $name:"",
            $description:"",
            forType:"Product"
        },
        renewSubscription:{
            $subscripId:7
        },
        AddVerification:{
            $forWhat:{
                type:"string",
                "@enum":["User","Product"]
            }
        },
        ValidateVerification:{
            $verifyId:3
        }
    }}
};

swaggerAutogen(outputFile, endpointsFiles, config);
