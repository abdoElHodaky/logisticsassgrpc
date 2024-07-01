import { Router} from "express";
export const categorygrpc=Router()

categorygrpc.route("/categories").
get((req,res)=>{
    /* 	#swagger.tags = ['Category']
        #swagger.description = 'Endpoint to get categories via grpc'
        
        */
}).
post(({body},res)=>{
  /* 	#swagger.tags = ['Category']
        #swagger.description = 'Endpoint to add new Category via grpc' 
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: { 
                     $name:"",
                     $description:"",
                     $forType:"Product"
                    } 
                  }
                }
            }
        } 
       #swagger.security = [{
            "JWTAuth": []
       }]
    */
})
