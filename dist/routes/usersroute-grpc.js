"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userspayrpc = exports.megrpc = exports.usersgrpc = void 0;
const express_1 = require("express");
//import { Author } from "../entity/Author";
//import { Article } from "../entity/Article"
//import { AppDataSource } from "../_datasource";
exports.usersgrpc = (0, express_1.Router)();
exports.megrpc = (0, express_1.Router)();
exports.userspayrpc = (0, express_1.Router)();
exports.usersgrpc.get("/users", (req, res) => {
    /* 	#swagger.tags = ['GRPC.User']
        #swagger.description = 'Endpoint to get authors via grpc' */
});
exports.megrpc.get("/me", (req, res) => {
    /* 	#swagger.tags = ['GRPC.User']
        #swagger.description = 'Endpoint to get profile of authenticated user'
        #swagger.security = [{
            "JWTAuth": []
       }]
    
    */
});
exports.userspayrpc.get("/users/:userId/payments", (req, res) => {
    /* 	#swagger.tags = ['GRPC.User.Payment']
        #swagger.description = 'Endpoint to get payments via grpc'
        #swagger.parameters['userId'] = {
            in: 'path',
            description: 'id of specific user.',
            
    }
    #swagger.security = [{
            "JWTAuth": []
       }]

    */
});
