import {AuthService} from "./auth";
import {AttachmentService} from "./attachments";
import {UserService,AuthorService} from "./users/";
import {ArticleService} from "./articles";
import {UserTicketService} from "./users.tickets";
import {ArticleGrpcService} from "./articles.grpc";
import {TicketGrpcService} from "./tickets.grpc";
import {AuthGrpcService} from "./auth.grpc";
import {AuthorGrpcService} from "./authors.grpc";
import {UserGrpcService} from "./users.grpc";
import {supTicketGrpcService } from "./suptickets.grpc";
import {supTicketService} from "./suptickets";
import {PaymentService} from "./payments";
import {ProductService} from "./products";
import {OrgzService} from "./orgzs";
import {orgzGrpcService} from "./orgzs.grpc";
import {ProductGrpcService} from "./products.grpc";

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
  Grpc_Ticket:new TicketGrpcService(),
  Grpc_Article:new ArticleGrpcService(),
  Grpc_Auth:new AuthGrpcService(),
  Grpc_Author:new AuthorGrpcService(),
  Grpc_User:new UserGrpcService(),
  Grpc_supTicket:new supTicketGrpcService(),
  Grpc_Orgz:new orgzGrpcService(),
  Grpc_Product:new ProductGrpcService()
}


export let _services:object={
  "Auth":new AuthService(),
  "Author":new AuthorService(),
  "User":new UserService(),
  "Article":new ArticleService(),
  "Attachment":new AttachmentService(),
  "Ticket":new UserTicketService(),
  "supTicket":new supTicketService(),
  "Payment":new PaymentService(),
  "Grpc_Ticket":new TicketGrpcService(),
 " Grpc_Article":new ArticleGrpcService(),
  "Grpc_Auth":new AuthGrpcService(),
  "Grpc_Author":new AuthorGrpcService(),
  "Grpc_User":new UserGrpcService(),
  "Grpc_supTicket":new supTicketGrpcService()
  
}
