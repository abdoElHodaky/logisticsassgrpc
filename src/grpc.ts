import "reflect-metadata";
import { Server, ServerCredentials } from "@grpc/grpc-js";
import { ReflectionService } from '@grpc/reflection';
const protoLoader = require('@grpc/proto-loader');
const pkg = protoLoader.load("src/protos/src/ticket.proto"); // Load your gRPC package definition as normal

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


server.bindAsync('0.0.0.0:50051', ServerCredentials.createInsecure(), () => {
    console.log("Server started")
    server.start(); })

server2.bindAsync('0.0.0.0:3030', ServerCredentials.createInsecure(), () => {
    console.log("Server2 started")
    server2.start(); })

const reflection = new ReflectionService(pkg);
reflection.addToServer(server2);
