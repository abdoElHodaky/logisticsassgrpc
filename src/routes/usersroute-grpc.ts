import { Router } from "express";
//import { Author } from "../entity/Author";
//import { Article } from "../entity/Article"
//import { AppDataSource } from "../_datasource";

export const usersgrpc=Router()
export const megrpc=Router()
export const userspayrpc=Router()
export const usersorgzsrpc=Router()

usersgrpc.get("/users",(req,res)=>{
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to get authors via grpc' */

})

megrpc.use(
    /*
      #swagger.security = [{
            "JWTAuth": []
       }]
    */
)
megrpc.get("/me",(req,res)=>{
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to get profile of authenticated user'
        
    
    */

})

megrpc.post("/me/changePassword",(req,res)=>{
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to change password of authenticated user'
        
       #swagger.requestBody={
          required: true,
            content: {
                "application/json": {
                   schema: { $ref: '#/components/schemas/chnagePassword' }   }
                }
            }
       
    
    */

})


megrpc.get("/me/subscriptions",(req,res)=>{
    /*  #swagger.tags = ['User']
        #swagger.description = 'Endpoint to get subscriptions of signedin user via grpc' 
        
    
       */
})
megrpc.post("/me/subscriptions/renewal/create",(req,res)=>{
    /*  #swagger.tags = ['User']
        #swagger.description = 'Endpoint to renew subscriptions of signedin user via grpc' 
        #swagger.requestBody={
          required: true,
            content: {
                "application/json": {
                   schema: { $ref: '#/components/schemas/renewSubscription' }   }
                }
            }
        
       */
})

userspayrpc.get("/users/:userId/payments",(req,res)=>{
    /* 	#swagger.tags = ['User.Payment']
        #swagger.description = 'Endpoint to get payments via grpc' 
        #swagger.parameters['userId'] = {
            in: 'path',
            description: 'id of specific user.',
            
    }
    #swagger.security = [{
            "JWTAuth": []
       }]

    */
})

usersorgzsrpc.get("/users/:userId/orgzs",(req,res)=>{
    /* 	#swagger.tags = ['User.Organization']
        #swagger.description = 'Endpoint to get orgzs of specific owner via grpc' 
        #swagger.parameters['userId'] = {
            in: 'path',
            description: 'id of specific user.',
            
    }
    #swagger.security = [{
            "JWTAuth": []
       }]

    */
})

usersorgzsrpc.post("/users/:userId/orgzs",(req,res)=>{
    /* 	#swagger.tags = ['User.Organization']
        #swagger.description = 'Endpoint to get payments via grpc' 
        #swagger.parameters['userId'] = {
            in: 'path',
            description: 'id of specific user.',
            
    }
       #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                   schema: { $ref: '#/components/schemas/CreateOrgz' }   }
                }
            }
        } 
      #swagger.security = [{
            "JWTAuth": []
       }]

    */
})




