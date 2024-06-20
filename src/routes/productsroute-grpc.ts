import { Router } from "express";
//import { Author } from "../entity/Author";
//import { Article } from "../entity/Article"
//import { AppDataSource } from "../_datasource";

export const productsgrpc=Router()

productsgrpc.get("/products",(req,res)=>{
    /* 	#swagger.tags = ['GRPC.Product']
        #swagger.description = 'Endpoint to get articles via grpc'
        
        */

})

    

productsgrpc.post("/products",({body},res)=>{
    /* 	#swagger.tags = ['GRPC.Product']
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

productsgrpc.post("/products/subscribe",({body},res)=>{
    /* 	#swagger.tags = ['GRPC.Product']
        #swagger.description = 'Endpoint to add new article via grpc' 
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                  schema:{  $productId:1 }
                    
                }
            }
        } 
       #swagger.security = [{
            "JWTAuth": []
       }]
    */
    
   
})
