import { Router } from "express";
//import { Author } from "../entity/Author";
//import { Article } from "../entity/Article"
//import { AppDataSource } from "../_datasource";

export const usersgrpc=Router()
export const megrpc=Router()

usersgrpc.get("/users",(req,res)=>{
    /* 	#swagger.tags = ['GRPC.User']
        #swagger.description = 'Endpoint to get authors via grpc' */

})

usersgrpc.get("/users/:userId/payments",(req,res)=>{
    /* 	#swagger.tags = ['GRPC.User.Payment]
        #swagger.description = 'Endpoint to get payments of specific user' 
        #swagger.parameters['userId'] = {
            in: 'path',
            description: 'id of specific user.',
            
    }
    #swagger.security = [{
            "JWTAuth": []
       }]

    */
})


megrpc.get("/me",(req,res)=>{
    /* 	#swagger.tags = ['GRPC.User']
        #swagger.description = 'Endpoint to get profile of authenticated user'
        #swagger.security = [{
            "JWTAuth": []
       }]
    
    */

})
