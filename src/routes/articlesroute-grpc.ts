import { Router } from "express";
//import { Author } from "../entity/Author";
//import { Article } from "../entity/Article"
//import { AppDataSource } from "../_datasource";

export const articlesgrpc=Router()

articlesgrpc.get("/grpc/articles",(req,res)=>{
    /* 	#swagger.tags = ['GRPC.Article']
        #swagger.description = 'Endpoint to get articles via grpc' */

})

    

articlesgrpc.post("/grpc/articles",({body},res)=>{
    /* 	#swagger.tags = ['GRPC.Article']
        #swagger.description = 'Endpoint to add new article via grpc' 
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Add new article.',
            schema: { $ref: '#/definitions/AddArticle' }
    } */
    
   
})

/*articlesroute.post("/articles/create",(req,res)=>{
    
})
*/
