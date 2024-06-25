import { Router } from "express";
//import { Author } from "../entity/Author";
//import { Article } from "../entity/Article"
//import { AppDataSource } from "../_datasource";

export const productsgrpc=Router()


productsgrpc.get("/products",(req,res)=>{
    /* 	#swagger.tags = ['Product']
        #swagger.description = 'Endpoint to get products via grpc'
        
        */

})

    

productsgrpc.post("/products",({body},res)=>{
    /* 	#swagger.tags = ['Product']
        #swagger.description = 'Endpoint to add new product via grpc' 
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: { $ref: '#/components/schemas/CreateProduct' }  }
                }
            }
        } 
       #swagger.security = [{
            "JWTAuth": []
       }]
    */
    
   
})

productsgrpc.post("/products/subscribe",({body},res)=>{
    /* 	#swagger.tags = ['Product']
        #swagger.description = 'Endpoint to subscribe in product via grpc' 
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                  schema: { $ref: '#/components/schemas/subscribeProduct' }  }
                }
            }
        } 
       #swagger.security = [{
            "JWTAuth": []
       }]
    */
    
   
})
