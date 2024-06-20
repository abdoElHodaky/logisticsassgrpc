import { Router } from "express";

export const orgzsrpc=Router()

orgzsrpc.get("/orgzs",(req,res)=>{
    /* 	#swagger.tags = ['GRPC.Organization']
        #swagger.description = 'Endpoint to get orgzs of specific owner via grpc' 
        #swagger.requestBody = {
            required:false,
            description: 'id of specific user.',
            content: {
                "application/json": {
                   schema: { $ref: '#/components/schemas/ownerOrgz' }   }
                }
            }
    }
    

    */
})

orgzsrpc.post("/orgzs",(req,res)=>{
    /* 	#swagger.tags = ['GRPC.Organization']
        #swagger.description = 'Endpoint to get payments via grpc' 
        
       #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                   schema: { $ref: '#/components/schemas/CreateOrgz' }   }
                }
            }
        } 
      #swagger.security = [{
            "JWTAuth": []
       }]

    */
})
