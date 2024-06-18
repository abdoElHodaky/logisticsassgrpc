"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketsgrpc = void 0;
const express_1 = require("express");
//import { Author } from "../entity/Author";
//import { Article } from "../entity/Article"
//import { AppDataSource } from "../_datasource";
exports.ticketsgrpc = (0, express_1.Router)();
exports.ticketsgrpc.get("/users/:userId/tickets", (req, res) => {
    /* 	#swagger.tags = ['GRPC.User.Ticket']
        #swagger.description = 'Endpoint to get articles via grpc'
        #swagger.parameters['userId'] = {
            in: 'path',
            description: 'id of specific user.',
            
    }
    #swagger.security = [{
            "JWTAuth": []
       }]

    */
});
exports.ticketsgrpc.post("/users/:userId/tickets", ({ body }, res) => {
    /* 	#swagger.tags = ['GRPC.User.Ticket']
        #swagger.description = 'Endpoint to add new ticket via grpc'
        #swagger.parameters['userId'] = {
            in: 'path',
            description: 'Add new ticket.',
            required:true
    }
        #swagger.requestBody = {
            required:true,
            description: 'Add new ticket.',
            schema: { $ref: '#/components/schemas/userAddTicket' }
    }
    
       #swagger.security = [{
            "JWTAuth": []
       }]
    */
});
/*articlesroute.post("/articles/create",(req,res)=>{
    
})
*/
