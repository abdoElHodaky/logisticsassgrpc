
import {AuthService} from "./";
import {AttachmentService} from "./";
import {UserService} from "./";
import {AuthorService} from "./";
import {ArticleService} from "./";
import {UserTicketService} from "./";
import {ArticleGrpcService} from "./";
import {TicketGrpcService} from "./";
import {AuthGrpcService} from "./";
import {AuthorGrpcService} from "./";

const services:any={
  "Auth":AuthService,
  "Author":AuthorService,
  "User":UserService,
  "Article":ArticleService,
  "Attachment":AttachmentService,
  "Ticket":UserTicketService,
  "Grpc.Ticket":TicketGrpcService,
  "Grpc.Article":ArticleGrpcService,
  "Grpc.Auth":AuthGrpcService,
  "Grpc.Author":AuthorGrpcService

}

export default function service(name:string ):any{
  return new services[name]()
}
