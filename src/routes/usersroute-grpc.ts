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

megrpc.get("/me",(req,res)=>{
    /* 	#swagger.tags = ['GRPC.Profile']
        #swagger.description = 'Endpoint to get profile via grpc' */

})
