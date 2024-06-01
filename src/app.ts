import "reflect-metadata";
import * as redis from "redis";
import application from "express"
import { json,urlencoded,Request } from "express";
//import { rateLimit } from 'express-rate-limit'
import cors from "cors";
import apicache from 'apicache'
import { AppDataSource } from "./_datasource";
import { apiv1 } from "./routes";
//import { ServerCredentials } from "@grpc/grpc-js";
const app=application();
const port = process.env.PORT||4000
const { SwaggerTheme, SwaggerThemeNameEnum } = require('swagger-themes');
const expressPrettier = require('express-prettier')
const theme = new SwaggerTheme();
let cacheWithRedis = apicache.options({ redisClient: redis.createClient({
	url:"rediss://red-cp4soqocmk4c73eom0p0:kLoGjFxqLJRRHFQs1QUaImdvOtnNdF19@oregon-redis.render.com:6379"
}) }).middleware

app.use(urlencoded({extended: true}))
app.use(cors())
app.use(json())
app.use(cacheWithRedis("15 minutes",(req:any,res:any)=>res.statusCode===200))
app.use(apiv1)
/*app.use(rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	}))*/
app.use(
  expressPrettier(
    { alwaysOn: true }
  )
)
app.use((error:any, req:any, res:any, next:any) => {
  console.log(error)
  console.log("Error Handling Middleware called")
  console.log('Path: ', req.path)
  next() // (optional) invoking next middleware
})

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const servers=require("./grpc/main")
app.get("/",(req,res)=>{
    res.redirect("endpoints")
})
app.use('/endpoints', swaggerUi.serve, swaggerUi.setup(swaggerDocument,{
   explorer: false,
   customCss:theme.getBuffer(SwaggerThemeNameEnum.GRUVBOX),
   customSiteTitle:"gRPC Endpoints",
   customfavIcon:"data:image/png;base64,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"
  // customfavIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAjdJREFUOE+lk81rE0EYxp93dme7m6S1tYVUW/UqfrQgiKD2YEpBEPUf6B+g6EXwIFpFsF704EVRz+25Ej8QD8aTXkSw4De0IKF2o9FNYrKb7Gb2lVlMrT0I0lkYZt7Z9/e8M/MMYU27eH98Lws+A0aOCFm9zIwSCAWK6caVY09frk6h1ZMLj3K3LWmcMExC2FSIFSfLwiBYtgHVZoSRunP1SOFkJ28FMPUg97xvk7O/Vm5BRfHawpK5IQV6BrrgLQcvpo8WDuhYApjKH7q5cSh1ynMDXa6W/auyVTQmAvUNOvix5N+aPv7sNF1+PD5ChpiP4xgqYp2v/9E7X+HoKCXIpGNDEglBYMWjdC4/NuOk5WSj3vwt+0ecSMAgE5FqwTQkNEiQAcUR7LREs9GepUsPJ9y0050d7t6JWvMbMnY/Kr6LlNWDSIVYqn7EjsGDcGsL8HwXzaiO4d7tUBTCq5dKdG/+OkvDRkpuQKgCqDiCLTP4UvmEz94bWIaDPVsOY6H8Clv7dsEPq7BMB6aQaCkf9OT9Xb1tuLXFRLUafEWx8g67N+fg+cso1RYxOjyBcr2ImBX600OJSLc9gJZqgOZeX3OL1bfZ4vcPcGQGKm5DsUrGuumqbFOPGa22D31JprCQ7d2Gn36lRGfn9s1kepzJKCAwxyAIEFGipk9dkEigOqa/xFrMsNKEoBHO0vn82EiX0zXPMdCO4n95oGMHNqXQFwQOeHT9Rupg12XlDmRdj6kD+d/n/AvX+Cx5fcPTAgAAAABJRU5ErkJggg=="
}));

const configureApplication = async  () => {
  /* server.bindAsync('localhost:50051', ServerCredentials.createInsecure(), () => {
    console.log("Server started")
    server.start(); })*/
   app.listen(port, () => {
	   console.log(`Example app listening on port ${port}`)
      servers.server
      servers.server2
  });
 /* setTimeout(()=>{
	 if(AppDataSource.isInitialized==true){
	const {services} = require("./services/enum")
	services.User.defaults().then(console.log).catch(console.log)}	     

    },10000) */
}

configureApplication();

module.exports = app;
