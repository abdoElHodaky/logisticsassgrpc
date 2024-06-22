
purshasesgrpc.get("/purchases",(req,res)=>{
    /* 	#swagger.tags = ['GRPC.Purshase']
        #swagger.description = 'Endpoint to get purshases via grpc'
        
        */

})

purchasesgrpc.post("/purchases",({body},res)=>{
    /* 	#swagger.tags = ['GRPC.Purshase']
        #swagger.description = 'Endpoint to create in purshase via grpc' 
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                  schema: { $ref: '#/components/schemas/CreatePurshase' }  }
                }
            }
        } 
       #swagger.security = [{
            "JWTAuth": []
       }]
    */
    
   
})
