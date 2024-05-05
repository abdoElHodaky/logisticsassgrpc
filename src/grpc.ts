import "reflect-metadata";
import { Server, ServerCredentials, loadPackageDefinition }  from "@grpc/grpc-js";
import { _Article,_Ticket,_Auth ,_User} from "./protos/dist/";
//mport  * as protoLoader  from "@grpc/proto-loader";
//import { ReflectionService } from '@grpc/reflection';
import { services } from "./services/enum";

export const server = new Server()
export const server2 = new Server()
server.addService(_Article.ArticleServiceService,services.Grpc_Article.SrvImpl)
server.addService(_Ticket.TicketServiceService,services.Grpc_Ticket.SrvImpl)
server.addService(_Auth.AuthServiceService,services.Grpc_Auth.SrvImpl)
server.addService(_User.UserServiceService,services.Grpc_Author.SrvImpl)
server2.addService(_User.UserServiceService,services.Grpc_User.SrvImpl)
server2.addService(_Ticket.TicketServiceService,services.Grpc_supTicket.SrvImpl)
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

