import { Router } from "express";
//import { Author } from "../entity/Author";
//import { Article } from "../entity/Article"
//import { AppDataSource } from "../_datasource";

export const authgrpc=Router()

authgrpc.post("/grpc/auth/login",(req,res)=>{
    /* 	#swagger.tags = ['GRPC.Auth']
        #swagger.description = 'Endpoint to authenticate via grpc'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Add new user.',
            schema: { $ref: '#/definitions/LoginUser' }
    }
        
        */

})

    

authgrpc.post("/grpc/auth/register",({body},res)=>{
    /* 	#swagger.tags = ['GRPC.Auth']
        #swagger.description = 'Endpoint to add new user via grpc' 
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Add new user.',
            schema: { $ref: '#/definitions/CreateUser' }
    } */
    
   
})
