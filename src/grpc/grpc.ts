import "reflect-metadata";
import { Server, ServerCredentials, loadPackageDefinition }  from "@grpc/grpc-js";
import { _Article,_Ticket,_Auth 
        ,_User,_Payment,_Purshase,
        _Orgz,_Product
       } from "../protos/dist/";
import { addServiceToServer} from "./util";
import { services } from "../services/enum";

export const server = new Server()
export const server2 = new Server()
addServiceToServer(server,[
  _Article.ArticleServiceService,
  _Ticket.TicketServiceService,
  _Auth.AuthServiceService,
  _User.UserServiceService,
 _Product.ProductServiceService
],[
  services.Grpc_Article.SrvImpl,
  services.Grpc_Ticket.SrvImpl,
  services.Grpc_Auth.SrvImpl,
  services.Grpc_Author.SrvImpl,
  services.Grpc_Product.SrvImpl
])
addServiceToServer(server2,[
  _User.UserServiceService,
  _Ticket.TicketServiceService,
  _Orgz.OrgzServiceService,
 _Purshase.PurshaseServiceService
  
],[
  services.Grpc_User.SrvImpl,
  services.Grpc_supTicket.SrvImpl,
  services.Grpc_Orgz.SrvImpl,
  services.Grpc_Purshase.SrvImpl

])

/*server.addService(_Article.ArticleServiceService,services.Grpc_Article.SrvImpl)
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

