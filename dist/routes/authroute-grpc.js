"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authgrpc = void 0;
const express_1 = require("express");
//import { Author } from "../entity/Author";
//import { Article } from "../entity/Article"
//import { AppDataSource } from "../_datasource";
exports.authgrpc = (0, express_1.Router)();
exports.authgrpc.post("/auth/login", (req, res) => {
    /* 	#swagger.tags = ['GRPC.Auth']
        #swagger.description = 'Endpoint to authenticate via grpc'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Add new user.',
            schema: { $ref: '#/definitions/LoginUser' }
    }
        
        */
});
exports.authgrpc.post("/auth/register", ({ body }, res) => {
    /* 	#swagger.tags = ['GRPC.Auth']
        #swagger.description = 'Endpoint to add new user via grpc'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Add new user.',
            schema: { $ref: '#/definitions/CreateUser' }
    } */
});
