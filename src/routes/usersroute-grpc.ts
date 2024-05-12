import { Router } from "express";
//import { Author } from "../entity/Author";
//import { Article } from "../entity/Article"
//import { AppDataSource } from "../_datasource";

export const usersgrpc=Router()
export const megrpc=Router()
export const userspayrpc=Router()

usersgrpc.get("/users",(req,res)=>{
    /* 	#swagger.tags = ['GRPC.User']
        #swagger.description = 'Endpoint to get authors via grpc' */

})


megrpc.get("/me",(req,res)=>{
    /* 	#swagger.tags = ['GRPC.User']
        #swagger.description = 'Endpoint to get profile of authenticated user'
        #swagger.security = [{
            "JWTAuth": []
       }]
    
    */

})

userspayrpc.get("/users/:userId/tickets",(req,res)=>{
    /* 	#swagger.tags = ['GRPC.User.Payment]
        #swagger.description = 'Endpoint to get payments via grpc' 
        #swagger.parameters['userId'] = {
            in: 'path',
            description: 'id of specific user.',
            
    }
    #swagger.security = [{
            "JWTAuth": []
       }]

    */
})
