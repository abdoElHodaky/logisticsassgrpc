"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server2 = exports.server = void 0;
require("reflect-metadata");
const grpc_js_1 = require("@grpc/grpc-js");
const dist_1 = require("./protos/dist/");
//import { _Ticket  } from "./protos/dist/"
const enum_1 = require("./services/enum");
const HOST = "0.0.0.0";
const PORT = "50051";
exports.server = new grpc_js_1.Server();
exports.server2 = new grpc_js_1.Server();
const address = `${HOST}:${PORT}`;
//console.log(services)
exports.server.addService(dist_1._Article.ArticleServiceService, enum_1.services.Grpc_Article.SrvImpl);
exports.server.addService(dist_1._Ticket.TicketServiceService, enum_1.services.Grpc_Ticket.SrvImpl);
exports.server.addService(dist_1._Auth.AuthServiceService, enum_1.services.Grpc_Auth.SrvImpl);
exports.server.addService(dist_1._User.UserServiceService, enum_1.services.Grpc_Author.SrvImpl);
exports.server2.addService(dist_1._User.UserServiceService, enum_1.services.Grpc_User.SrvImpl);
exports.server2.addService(dist_1._Ticket.TicketServiceService, enum_1.services.Grpc_supTicket.SrvImpl);
exports.server2.addService(dist_1._Auth.AuthServiceService, enum_1.services.Grpc_Auth.SrvImpl);
exports.server2.addService(dist_1._Article.ArticleServiceService, enum_1.services.Grpc_Article.SrvImpl);
/*
server.bindAsync('0.0.0.0:50051', ServerCredentials.createInsecure(), () => {
    console.log("Server started")
    server.start(); })

server2.bindAsync('0.0.0.0:3030', ServerCredentials.createInsecure(), () => {
    console.log("Server2 started")
    server2.start(); })


*/
