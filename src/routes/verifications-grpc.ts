
import { Router } from "express";
//import { Author } from "../entity/Author";
//import { Article } from "../entity/Article"
//import { AppDataSource } from "../_datasource";

export const verificationsgrpc=Router()

verificationsgrpc.get("/verifications",(req,res)=>{
    /* 	#swagger.tags = ['Verification']
        #swagger.description = 'Endpoint to get verifications of specific user via grpc'
        
        */

})

    

verificationsgrpc.post("/verifications",({body},res)=>{
    /* 	#swagger.tags = ['Verification']
        #swagger.description = 'Endpoint to add new verification via grpc' 
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: { $ref: '#/components/schemas/AddVerification' }  }
                }
            }
        } 
       #swagger.security = [{
            "JWTAuth": []
       }]
    */
    
   
})

/*articlesroute.post("/verifications/validate",(req,res)=>{
    
})
*/
