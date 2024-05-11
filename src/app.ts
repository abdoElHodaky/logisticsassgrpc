
import "reflect-metadata";
import application from "express"
import { json,urlencoded,Request } from "express";
//import { rateLimit } from 'express-rate-limit'
import cors from "cors";
import { AppDataSource } from "./_datasource";
import { apiv1 } from "./routes";
//import { ServerCredentials } from "@grpc/grpc-js";
const app=application();
const port = process.env.PORT||3000
const { SwaggerTheme, SwaggerThemeNameEnum } = require('swagger-themes');
const theme = new SwaggerTheme();

app.use(urlencoded({extended: true}))
app.use(cors())
app.use(json())
app.use(apiv1)
/*app.use(rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	}))*/
app.use((error:any, req:any, res:any, next:any) => {
  console.log(error)
  console.log("Error Handling Middleware called")
  console.log('Path: ', req.path)
  next() // (optional) invoking next middleware
})

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const servers=require("./grpc-main")
app.get("/",(req,res)=>{
    res.redirect("endpoints")
})
app.use('/endpoints', swaggerUi.serve, swaggerUi.setup(swaggerDocument,{
   explorer: false,
   customCss:theme.getBuffer(SwaggerThemeNameEnum.GRUVBOX),
   customSiteTitle:"gRPC Endpoints",
   customfavIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAjdJREFUOE+lk81rE0EYxp93dme7m6S1tYVUW/UqfrQgiKD2YEpBEPUf6B+g6EXwIFpFsF704EVRz+25Ej8QD8aTXkSw4De0IKF2o9FNYrKb7Gb2lVlMrT0I0lkYZt7Z9/e8M/MMYU27eH98Lws+A0aOCFm9zIwSCAWK6caVY09frk6h1ZMLj3K3LWmcMExC2FSIFSfLwiBYtgHVZoSRunP1SOFkJ28FMPUg97xvk7O/Vm5BRfHawpK5IQV6BrrgLQcvpo8WDuhYApjKH7q5cSh1ynMDXa6W/auyVTQmAvUNOvix5N+aPv7sNF1+PD5ChpiP4xgqYp2v/9E7X+HoKCXIpGNDEglBYMWjdC4/NuOk5WSj3vwt+0ecSMAgE5FqwTQkNEiQAcUR7LREs9GepUsPJ9y0050d7t6JWvMbMnY/Kr6LlNWDSIVYqn7EjsGDcGsL8HwXzaiO4d7tUBTCq5dKdG/+OkvDRkpuQKgCqDiCLTP4UvmEz94bWIaDPVsOY6H8Clv7dsEPq7BMB6aQaCkf9OT9Xb1tuLXFRLUafEWx8g67N+fg+cso1RYxOjyBcr2ImBX600OJSLc9gJZqgOZeX3OL1bfZ4vcPcGQGKm5DsUrGuumqbFOPGa22D31JprCQ7d2Gn36lRGfn9s1kepzJKCAwxyAIEFGipk9dkEigOqa/xFrMsNKEoBHO0vn82EiX0zXPMdCO4n95oGMHNqXQFwQOeHT9Rupg12XlDmRdj6kD+d/n/AvX+Cx5fcPTAgAAAABJRU5ErkJggg=="
}));

const configureApplication = async  () => {
  /* server.bindAsync('localhost:50051', ServerCredentials.createInsecure(), () => {
    console.log("Server started")
    server.start(); })*/
   app.listen(port, () => {
	   console.log(`Example app listening on port ${port}`)
      servers.server
      servers.server2
     import("./services/enum").then(servs=>{
     await servs.services.User.default()
     }).catch(console.log)
  });
}

configureApplication();

module.exports = app;
