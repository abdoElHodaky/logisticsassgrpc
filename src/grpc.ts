import "reflect-metadata";
import { Server, ServerCredentials } from "@grpc/grpc-js";

import { _Article,_Ticket,_Auth ,_User} from "./protos/dist/";
//import { _Ticket  } from "./protos/dist/"
import { services } from "./services/enum";
const HOST =  "0.0.0.0";
const PORT =  "50051";
export const server = new Server()
const address = `${HOST}:${PORT}`;
//console.log(services)
server.addService(_Article.ArticleServiceService,services.Grpc_Article.SrvImpl)
server.addService(_Ticket.TicketServiceService,services.Grpc_Ticket.SrvImpl)
server.addService(_Auth.AuthServiceService,services.Grpc_Auth.SrvImpl)
server.addService(_User.UserServiceService,services.Grpc_Author.SrvImpl)


/*server.bindAsync('localhost:50051', ServerCredentials.createInsecure(), () => {
    console.log("Server started")
    server.start(); })*/
