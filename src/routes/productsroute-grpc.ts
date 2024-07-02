import { Router } from "express";
//import { Author } from "../entity/Author";
//import { Article } from "../entity/Article"
//import { AppDataSource } from "../_datasource";

export const productsgrpc=Router()
export const subscriptionsgrpc=Router()

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

productsgrpc.get("/products",(req,res)=>{
    /* 	#swagger.tags = ['Product']
        #swagger.description = 'Endpoint to get products via grpc'
        
        */

})

    

subscriptionsgrpc.get("/subscriptions",(req,res)=>{
    /* 	#swagger.tags = ['Subscription']
        #swagger.description = 'Endpoint to get subscriptions via grpc' 
        
       #swagger.security = [{
            "JWTAuth": []
       }]
    */
    
   
})

subscriptionsgrpc.post("/subscriptions/renew",({body},res)=>{
    /* 	#swagger.tags = ['Subscription']
        #swagger.description = 'Endpoint to renew subscriptions  via grpc' 
        #swagger.parameters["subscripId"]={
         in:"path",description:"Id of subscription",
         required:true,
        }
       
    */
    
   
})


