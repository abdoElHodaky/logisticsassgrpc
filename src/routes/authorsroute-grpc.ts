import { Router } from "express";
import { User } from "../entity/";
//import { Article } from "../entity/Article"
import { AppDataSource } from "../_datasource";

export const authorsgrpc=Router()

authorsgrpc.get("/grpc/authors",(req,res)=>{
    /* 	#swagger.tags = ['GRPC.Author']
        #swagger.description = 'Endpoint to get authors via grpc' */
  let users; 
    AppDataSource.manager.find(User).then(console.log).catch(console.log)
})

    

authorsgrpc.post("/grpc/authors",({body},res)=>{
    /* 	#swagger.tags = ['GRPC.Author']
        #swagger.description = 'Endpoint to add new author via grpc' 
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Add new author.',
            schema: { $ref: '#/definitions/CreateAuthor' }
    } */
    
   
})

/*articlesroute.post("/articles/create",(req,res)=>{
    
})
*/
