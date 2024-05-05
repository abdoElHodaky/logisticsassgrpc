"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
//import { rateLimit } from 'express-rate-limit'
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
//import { ServerCredentials } from "@grpc/grpc-js";
const app = (0, express_1.default)();
const port = process.env.HTTPPORT || 3000;
/*setInterval(function (){
if(AppDataSource.isConnected==false)
{
  AppDataSource.connect().then(e=>{
  console.log("connected")
  }).catch(console.log)
}

},500000)
*/
app.use((0, express_2.urlencoded)({ extended: true }));
app.use((0, cors_1.default)());
app.use((0, express_2.json)());
app.use(routes_1.apiv1);
/*app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    }))*/
app.use((error, req, res, next) => {
    console.log(error);
    console.log("Error Handling Middleware called");
    console.log('Path: ', req.path);
    next(); // (optional) invoking next middleware
});
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const servers = require("./grpc");
app.get("/", (req, res) => {
    res.redirect("endpoints");
});
app.use('/endpoints', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const configureApplication = () => {
    /* server.bindAsync('localhost:50051', ServerCredentials.createInsecure(), () => {
      console.log("Server started")
      server.start(); })*/
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
        servers.server;
        servers.server2;
    });
};
configureApplication();
module.exports = app;
