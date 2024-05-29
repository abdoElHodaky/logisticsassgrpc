"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.payroute = void 0;
const express_1 = require("express");
exports.payroute = (0, express_1.Router)();
exports.payroute.get("/payments", function (req, res) {
    /* 	#swagger.tags = ['Payment']
        #swagger.description = 'Endpoint to get   PAYMENTS'
        #swagger.security = [{
            "JWTAuth": []
       }]
    */
});
exports.payroute.get("/payments/:paymentId/Pay", function (req, res) {
    /* 	#swagger.tags = ['Payment']
         #swagger.description = 'Endpoint to iniliatize specific payment'
         #swagger.parameters["paymentId"]={
          in:"path",
          description:"Payment identification"
         }
         #swagger.security = [{
             "JWTAuth": []
        }]
      */
});
exports.payroute.get("/payments/result", function (req, res) {
    /* 	#swagger.tags = ['Payment']
         #swagger.description = 'Endpoint to get result of  payment'
         #swagger.security = [{
             "JWTAuth": []
        }]
      */
});
