
import {AuthService} from "./auth";
import {AttachmentService} from "./attachments";
import {UserService} from "./users";
import {AuthorService} from "./authors";
import {ArticleService} from "./articles";
import {UserTicketService} from "./users.tickets";
import {ArticleGrpcService} from "./articles.grpc";
import {TicketGrpcService} from "./tickets.grpc";
import {AuthGrpcService} from "./auth.grpc";
import {AuthorGrpcService} from "./authors.grpc";

export let services:any={
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
