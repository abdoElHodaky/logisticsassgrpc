"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server2 = exports.server = void 0;
require("reflect-metadata");
const grpc_js_1 = require("@grpc/grpc-js");
const dist_1 = require("./protos/dist/");
//mport  * as protoLoader  from "@grpc/proto-loader";
//import { ReflectionService } from '@grpc/reflection';
const enum_1 = require("./services/enum");
exports.server = new grpc_js_1.Server();
exports.server2 = new grpc_js_1.Server();
exports.server.addService(dist_1._Article.ArticleServiceService, enum_1.services.Grpc_Article.SrvImpl);
exports.server.addService(dist_1._Ticket.TicketServiceService, enum_1.services.Grpc_Ticket.SrvImpl);
exports.server.addService(dist_1._Auth.AuthServiceService, enum_1.services.Grpc_Auth.SrvImpl);
exports.server.addService(dist_1._User.UserServiceService, enum_1.services.Grpc_Author.SrvImpl);
exports.server2.addService(dist_1._User.UserServiceService, enum_1.services.Grpc_User.SrvImpl);
exports.server2.addService(dist_1._Ticket.TicketServiceService, enum_1.services.Grpc_supTicket.SrvImpl);
//server2.addService(_Auth.AuthServiceService,services.Grpc_Auth.SrvImpl)
//server2.addService(_Article.ArticleServiceService,services.Grpc_Article.SrvImpl)
/*protoLoader.load("./src/protos/src/index.proto").then((pkg:any)=>{
  pkg=loadPackageDefinition(pkg)
  const reflect=new ReflectionService(pkg)
  reflect.addToServer(server)
  
}).catch(console.log)
protoLoader.load("./src/protos/src/index.proto").then((pkg:any)=>{
  pkg=loadPackageDefinition(pkg)
  const reflect=new ReflectionService(pkg)
  reflect.addToServer(server2)
  reflects.push(reflect)
}).catch(console.log)

server.bindAsync('0.0.0.0:50051', ServerCredentials.createInsecure(), () => {
    console.log("Server started")
    server.start(); })

server2.bindAsync('0.0.0.0:3030', ServerCredentials.createInsecure(), () => {
    console.log("Server2 started")
    server2.start(); })

*/
