"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsgrpc = void 0;
const express_1 = require("express");
//import { Author } from "../entity/Author";
//import { Article } from "../entity/Article"
//import { AppDataSource } from "../_datasource";
exports.productsgrpc = (0, express_1.Router)();
exports.productsgrpc.get("/products", (req, res) => {
    /* 	#swagger.tags = ['GRPC.Product']
        #swagger.description = 'Endpoint to get articles via grpc'
        
        */
});
exports.productsgrpc.post("/products", ({ body }, res) => {
    /* 	#swagger.tags = ['GRPC.Product']
        #swagger.description = 'Endpoint to add new article via grpc'
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: { $ref: '#/components/schemas/AddArticle' }  }
                }
            }
        }
       #swagger.security = [{
            "JWTAuth": []
       }]
    */
});
/*articlesroute.post("/articles/create",(req,res)=>{
    
})
*/
