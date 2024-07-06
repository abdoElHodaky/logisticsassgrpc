import { Router } from "express";
import { User } from "../entity/";
//import { Article } from "../entity/Article"
import { AppDataSource } from "../_datasource";

export const authorsgrpc=Router()

authorsgrpc.get("/authors",(req,res)=>{
    /* 	#swagger.tags = ['Author']
        #swagger.description = 'Endpoint to get authors via grpc' */
  let users; 
    AppDataSource.manager.find(User).then(console.log).catch(console.log)
})

    

authorsgrpc.post("/authors",({body},res)=>{
    /* 	#swagger.tags = ['Author']
        #swagger.description = 'Endpoint to add new author via grpc' 
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                   schema: { $ref: '#/components/schemas/CreateAuthor' }   }
                }
            }
        } 
       #swagger.security = [{
            "JWTAuth": []
       }]
    */
    
   
})
