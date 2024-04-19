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
