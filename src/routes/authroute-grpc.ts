import { Router } from "express";
//import { Author } from "../entity/Author";
//import { Article } from "../entity/Article"
//import { AppDataSource } from "../_datasource";

export const authgrpc=Router()

authgrpc.post("/auth/login",({body},res)=>{
    /* 	#swagger.tags = ['Auth']
        #swagger.description = 'Endpoint to authenticate via grpc'
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: { $ref: '#/components/schemas/LoginUser' }
                    }
                }
            }
        } 
        */

})

    

authgrpc.post("/auth/register",({body},res)=>{
    /* 	#swagger.tags = ['Auth']
        #swagger.description = 'Endpoint to add new user via grpc' 
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: { $ref: '#/components/schemas/CreateUser' }
                    }
                }
            }
     */
    
   
})
