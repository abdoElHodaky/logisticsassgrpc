"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orgzsrpc = void 0;
const express_1 = require("express");
exports.orgzsrpc = (0, express_1.Router)();
exports.orgzsrpc.get("/orgzs", (req, res) => {
    /* 	#swagger.tags = ['GRPC.Organization']
        #swagger.description = 'Endpoint to get orgzs of specific owner via grpc'
        #swagger.parameters['userId'] = {
            in: 'path',
            description: 'id of specific user.',
            
    }
    

    */
});
exports.orgzsrpc.post("/orgzs", (req, res) => {
    /* 	#swagger.tags = ['GRPC.Organization']
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
});
