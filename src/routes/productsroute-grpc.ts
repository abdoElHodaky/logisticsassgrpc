import { Router } from "express";
//import { Author } from "../entity/Author";
//import { Article } from "../entity/Article"
//import { AppDataSource } from "../_datasource";

export const productsgrpc=Router()
export const purshasesgrpc=Router()

productsgrpc.get("/products",(req,res)=>{
    /* 	#swagger.tags = ['GRPC.Product']
        #swagger.description = 'Endpoint to get products via grpc'
        
        */

})

    

productsgrpc.post("/products",({body},res)=>{
    /* 	#swagger.tags = ['GRPC.Product']
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
    /* 	#swagger.tags = ['GRPC.Product']
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
purshasesgrpc.get("/purchases",(req,res)=>{
    /* 	#swagger.tags = ['GRPC.Purshase']
        #swagger.description = 'Endpoint to get purshases via grpc'
        
        */

})

purchasesgrpc.post("/purchases",({body},res)=>{
    /* 	#swagger.tags = ['GRPC.Purshase']
        #swagger.description = 'Endpoint to create in purshase via grpc' 
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                  schema: { $ref: '#/components/schemas/CreatePurshase' }  }
                }
            }
        } 
       #swagger.security = [{
            "JWTAuth": []
       }]
    */
    
   
})
