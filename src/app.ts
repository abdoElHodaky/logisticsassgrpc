
import "reflect-metadata";
import application from "express"
import { json,urlencoded } from "express";
//import { rateLimit } from 'express-rate-limit'
import cors from "cors";
import { AppDataSource } from "./_datasource";
import { apiv1 } from "./routes";
//import { ServerCredentials } from "@grpc/grpc-js";
var { expressjwt: jwt } = require("express-jwt");
var unless=require("express-unless")

jwt.unless=unless
const app=application();
const port = process.env.PORT||3000
app.use(urlencoded({extended: true}))
app.use(cors())
app.use(json())
app.use(
  jwt({
    secret: "secert",
    algorithms: ["HS256"],
    credentialsRequired: false,
    getToken: function fromHeaderOrQuerystring(req) {
      if (
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
      ) {
        return req.headers.authorization.split(" ")[1];
      } else if (req.query && req.query.token) {
        return req.query.token;
      }
      return null;
    },
  }).unless({path:["/payments/callback","/payments/return","/auth/login","/auth/register"]}))

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
app.use('/endpoints', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const configureApplication =  () => {
  /* server.bindAsync('localhost:50051', ServerCredentials.createInsecure(), () => {
    console.log("Server started")
    server.start(); })*/
   app.listen(port, () => {
	   console.log(`Example app listening on port ${port}`)
      servers.server
      servers.server2
  });
}

configureApplication();

module.exports = app;
