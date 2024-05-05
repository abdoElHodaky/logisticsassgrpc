"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersgrpc = void 0;
const express_1 = require("express");
//import { Author } from "../entity/Author";
//import { Article } from "../entity/Article"
//import { AppDataSource } from "../_datasource";
exports.usersgrpc = (0, express_1.Router)();
exports.usersgrpc.get("/users", (req, res) => {
    /* 	#swagger.tags = ['GRPC.User']
        #swagger.description = 'Endpoint to get authors via grpc' */
});
exports.usersgrpc.post("/users", ({ body }, res) => {
    /* 	#swagger.tags = ['GRPC.User']
        #swagger.description = 'Endpoint to add new User via grpc'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Add new user.',
            schema: { $ref: '#/definitions/CreateAuthor' }
    } */
});
/*articlesroute.post("/articles/create",(req,res)=>{
    
})
*/
