import "reflect-metadata";
import { Server, ServerCredentials } from "@grpc/grpc-js";

import { _Article,_Ticket,_Auth ,_User} from "./protos/dist/";
//import { _Ticket  } from "./protos/dist/"
import {services}  from "./services/services";
const HOST =  "0.0.0.0";
const PORT =  "50051";
const server = new Server()
const address = `${HOST}:${PORT}`;
console.log(services)
server.addService(_Article.ArticleServiceService,new services["Grpc.Article"]().SrvImpl)
server.addService(_Ticket.TicketServiceService,new services["Grpc.Ticket"]().SrvImpl)
server.addService(_Auth.AuthServiceService,new services["Grpc.Auth"]().SrvImpl)
server.addService(_User.UserServiceService,new services["Grpc.Author"]().SrvImpl)


server.bindAsync('localhost:3030', ServerCredentials.createInsecure(), () => {
    console.log("Server started")
    server.start(); })
export default server
