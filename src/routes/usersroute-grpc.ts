import { Router } from "express";
//import { Author } from "../entity/Author";
//import { Article } from "../entity/Article"
//import { AppDataSource } from "../_datasource";

export const usersgrpc=Router()

usersgrpc.get("/users",(req,res)=>{
    /* 	#swagger.tags = ['GRPC.User']
        #swagger.description = 'Endpoint to get authors via grpc' */

})

    

usersgrpc.post("/users",({body},res)=>{
    /* 	#swagger.tags = ['GRPC.User']
        #swagger.description = 'Endpoint to add new User via grpc' 
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Add new user.',
            schema: { $ref: '#/definitions/CreateAuthor' }
    } */
    
   
})

/*articlesroute.post("/articles/create",(req,res)=>{
    
})
*/
