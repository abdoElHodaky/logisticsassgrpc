import "reflect-metadata";

import {AuthService} from "./auth";
import {AttachmentService} from "./attachments";
import {UserService} from "./users";
import {AuthorService} from "./authors";
import {ArticleService} from "./articles";
import {UserTicketService} from "./users.tickets";

const services:any={
  "Auth":AuthService,
  "Author":AuthorService,
  "User":UserService,
  "Article":ArticleService,
  "Attachment":AttachmentService,
  "Ticket":UserTicketService,
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
