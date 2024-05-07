import { Router } from "express";
//import { Author } from "../entity/Author";
//import { Article } from "../entity/Article"
//import { AppDataSource } from "../_datasource";

export const articlesgrpc=Router()

articlesgrpc.get("/articles/create",(req,res)=>{
    /* 	#swagger.tags = ['GRPC.Article']
        #swagger.description = 'Endpoint to get articles via grpc'
        
        */

})

    

articlesgrpc.post("/articles",({body},res)=>{
    /* 	#swagger.tags = ['GRPC.Article']
        #swagger.description = 'Endpoint to add new article via grpc' 
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: { $ref: '#/components/schemas/AddArticle' }  }
                }
            }
        } 
       #swagger.security = [{
            "JWTAuth": []
       }]
    */
    
   
})

/*articlesroute.post("/articles/create",(req,res)=>{
    
})
*/
