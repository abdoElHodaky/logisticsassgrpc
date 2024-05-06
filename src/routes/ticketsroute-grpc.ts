import { Router } from "express";
//import { Author } from "../entity/Author";
//import { Article } from "../entity/Article"
//import { AppDataSource } from "../_datasource";

export const ticketsgrpc=Router()

ticketsgrpc.get("/users/:userId/tickets",(req,res)=>{
    /* 	#swagger.tags = ['GRPC.User.Ticket']
        #swagger.description = 'Endpoint to get articles via grpc' 
        #swagger.parameters['userId'] = {
            in: 'path',
            description: 'id of specific user.',
            schema: { $ref: '#/components/schemas/userSupTicket' }
    }
    #swagger.security = [{
            "JWTAuth": []
       }]

    */
})

    

ticketsgrpc.post("/users/:userId/tickets",({body},res)=>{
    /* 	#swagger.tags = ['GRPC.User.Ticket']
        #swagger.description = 'Endpoint to add new ticket via grpc' 
        #swagger.parameters['userId'] = {
            in: 'path',
            description: 'Add new ticket.',
            schema: { $ref: '#/components/schemas/userSupTicket' }
    }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Add new ticket.',
            schema: { $ref: '#/components/schemas/userAddTicket' }
    } 
    
       #swagger.security = [{
            "JWTAuth": []
       }]
    */
    
   
})

/*articlesroute.post("/articles/create",(req,res)=>{
    
})
*/
