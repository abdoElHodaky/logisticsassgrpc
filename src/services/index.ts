<<<<<<< HEAD
import "reflect-metadata";

import {AuthService} from "./auth";
import {AttachmentService} from "./attachments";
import {UserService} from "./users";
import {AuthorService} from "./authors";
import {ArticleService} from "./articles";
import {UserTicketService} from "./users.tickets";
import {PaymentService } from "./payments";
import { PayTabService } from "./paytabs"
const services:any={
  "Auth":AuthService,
  "Author":AuthorService,
  "User":UserService,
  "Article":ArticleService,
  "Attachment":AttachmentService,
  "Ticket":UserTicketService,
  "Payment":PaymentService,
  "PayTabGate":PayTabService
}

export function service(service:string) {
      return function (target: any, propertyKey?: string  ) {
      Reflect.defineMetadata("service", service, target);
      console.log(target)
      let s=new services[service]()
      if (target==null) return s
      else  target["service"]=s
      
      
  }
}
=======
export {AuthService} from "./auth";
export {AttachmentService} from "./attachments";
export {UserService,AuthorService} from "./users/";
export {ArticleService} from "./articles";
export { ProductService} from "./products";
export { PurshaseService} from "./purchases";
export {supTicketService} from "./suptickets";
export {UserTicketService} from "./users.tickets";
export { PaymentService} from "./payments";
export {PayTabService} from "./paytabs";
export {OrgzService} from "./orgzs";
export {PasswordService} from "./passwords";
export {CategoryService} from "./categories";
export {SubscriptionService} from "./subscriptions";
export {VerificationService} from "./verification";
/*export {ArticleGrpcService} from "./articles.grpc";
export {TicketGrpcService} from "./tickets.grpc";
export {AuthGrpcService} from "./auth.grpc";
export {AuthorGrpcService} from "./authors.grpc";
export {UserGrpcService} from "./users.grpc";
export {supTicketGrpcService} from "./suptickets.grpc";
export {orgzGrpcService} from "./orgzs.grpc";
export { ProductGrpcService} from "./products.grpc";
export { PurshaseGrpcService} from "./purchases.grpc";
*/
>>>>>>> mainrpc
