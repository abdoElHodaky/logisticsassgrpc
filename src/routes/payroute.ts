
import { Router } from "express";
import { Request,Response } from "express";
export const payroute=Router();
payroute.get("/payments",function(req:Request, res:Response){
    /* 	#swagger.tags = ['Payment']
        #swagger.description = 'Endpoint to get   PAYMENTS'
        #swagger.security = [{
            "JWTAuth": []
       }]
    */

    
  })
  
  payroute.get("/payments/:paymentId/Pay",function(req:Request, res:Response){
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
   
  })

payroute.get("/payments/result",function(req:Request, res:Response){
   /* 	#swagger.tags = ['Payment']
        #swagger.description = 'Endpoint to get result of  payment'
        #swagger.security = [{
            "JWTAuth": []
       }]
     */
   
  })

