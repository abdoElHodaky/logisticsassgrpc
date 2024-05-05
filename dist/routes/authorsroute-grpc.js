"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorsgrpc = void 0;
const express_1 = require("express");
const entity_1 = require("../entity/");
//import { Article } from "../entity/Article"
const _datasource_1 = require("../_datasource");
exports.authorsgrpc = (0, express_1.Router)();
exports.authorsgrpc.get("/authors", (req, res) => {
    /* 	#swagger.tags = ['GRPC.Author']
        #swagger.description = 'Endpoint to get authors via grpc' */
    let users;
    _datasource_1.AppDataSource.manager.find(entity_1.User).then(console.log).catch(console.log);
});
exports.authorsgrpc.post("/authors", ({ body }, res) => {
    /* 	#swagger.tags = ['GRPC.Author']
        #swagger.description = 'Endpoint to add new author via grpc'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Add new author.',
            schema: { $ref: '#/definitions/CreateAuthor' }
    } */
});
/*articlesroute.post("/articles/create",(req,res)=>{
    
})
*/
