import "reflect-metadata";
import { Server, ServerCredentials }, loadPackageDefinition  from "@grpc/grpc-js";
import { ReflectionService } from '@grpc/reflection';
const protoLoader = require('@grpc/proto-loader');
let pkgticket:any;
protoLoader.load("src/protos/src/ticket.proto").then(pkgd=>{
console.log(pkgd)
  pkgticket=loadPackageDefinition(pkgd)
}).catch(console.log)

import { _Article,_Ticket,_Auth ,_User} from "./protos/dist/";
//import { _Ticket  } from "./protos/dist/"
import { services } from "./services/enum";
const HOST =  "0.0.0.0";
const PORT =  "50051";
export const server = new Server()
export const server2 = new Server()
const address = `${HOST}:${PORT}`;
//console.log(services)
server.addService(_Article.ArticleServiceService,services.Grpc_Article.SrvImpl)
server.addService(_Ticket.TicketServiceService,services.Grpc_Ticket.SrvImpl)
server.addService(_Auth.AuthServiceService,services.Grpc_Auth.SrvImpl)
server.addService(_User.UserServiceService,services.Grpc_Author.SrvImpl)
server2.addService(_User.UserServiceService,services.Grpc_User.SrvImpl)
server2.addService(_Ticket.TicketServiceService,services.Grpc_supTicket.SrvImpl)

const reflection = new ReflectionService(pkgticket);
reflection.addToServer(server2);
server.bindAsync('0.0.0.0:50051', ServerCredentials.createInsecure(), () => {
    console.log("Server started")
    server.start(); })

server2.bindAsync('0.0.0.0:3030', ServerCredentials.createInsecure(), () => {
    console.log("Server2 started")
    server2.start(); })


console.log(pkgticket)
