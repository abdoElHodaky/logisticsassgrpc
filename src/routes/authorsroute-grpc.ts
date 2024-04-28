import { Router } from "express";
//import { Author } from "../entity/Author";
//import { Article } from "../entity/Article"
//import { AppDataSource } from "../_datasource";

export const authorsgrpc=Router()

authorsgrpc.get("/grpc/authors",(req,res)=>{
    /* 	#swagger.tags = ['GRPC.Author']
        #swagger.description = 'Endpoint to get authors via grpc' */

})

    

authorsgrpc.post("/grpc/authors",({body},res)=>{
    /* 	#swagger.tags = ['GRPC.Authir']
        #swagger.description = 'Endpoint to add new author via grpc' 
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Add new author.',
            schema: { $ref: '#/definitions/AddAuthor' }
    } */
    
   
})

/*articlesroute.post("/articles/create",(req,res)=>{
    
})
*/
