import {
  AuthService,AttachmentService,UserService,AuthorService,
  ArticleService,UserTicketService,supTicketService,
  PaymentService,OrgzService,PurshaseService,CategoryService,
  ProductService,SubscriptionService,VerificationService

} from "./";
import {
  ArticleGrpcService,TicketGrpcService,
  supTicketGrpcService,AuthorGrpcService,UserGrpcService,
  AuthGrpcService,orgzGrpcService,ProductGrpcService,
  PurshaseGrpcService,
} from "./index.grpc";


export let services:any={
  Auth:new AuthService(),
  Author:new AuthorService(),
  User:new UserService(),
  Article:new ArticleService(),
  Attachment:new AttachmentService(),
  Ticket:new UserTicketService(),
  supTicket:new supTicketService(),
  Payment:new PaymentService(),
  Product:new ProductService(),
  Orgz:new OrgzService(),
  Purshase:new PurshaseService(),
  Category:new CategoryService(),
  Subscription: new SubscriptionService(),
  Verification: new VerificationService()
}


export let grpc_services:any={
  
  Grpc_Ticket:new TicketGrpcService(),
  Grpc_Article:new ArticleGrpcService(),
  Grpc_Auth:new AuthGrpcService(),
  Grpc_Author:new AuthorGrpcService(),
  Grpc_User:new UserGrpcService(),
  Grpc_supTicket:new supTicketGrpcService(),
  Grpc_Orgz:new orgzGrpcService(),
  Grpc_Product:new ProductGrpcService(),
  Grpc_Purshase:new PurshaseGrpcService()
  
}
