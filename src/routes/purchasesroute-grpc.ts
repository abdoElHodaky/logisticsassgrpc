import { Router } from "express";


export const purshasesgrpc=Router()

purshasesgrpc.get("/purshases",(req,res)=>{
    /* 	#swagger.tags = ['GRPC.Purshase']
        #swagger.description = 'Endpoint to get purshases via grpc'
        
        */

})

purshasesgrpc.post("/purshases",({body},res)=>{
    /* 	#swagger.tags = ['GRPC.Purshase']
        #swagger.description = 'Endpoint to create in purshase via grpc' 
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                  schema: { $ref: '#/components/schemas/CreatePurshase' }  }
                }
            }
        } 
       #swagger.security = [{
            "JWTAuth": []
       }]
    */
    
   
})
