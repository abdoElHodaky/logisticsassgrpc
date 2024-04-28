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



export enum services{
  Auth=new AuthService(),
  Author=new AuthorService(),
  User=new UserService(),
  Article=new ArticleService(),
  Attachment=new AttachmentService(),
  Ticket=new UserTicketService(),
  Grpc_Ticket=new TicketGrpcService(),
  Grpc_Article=new ArticleGrpcService(),
  Grpc_Auth=new AuthGrpcService(),
  Grpc_Author=new AuthorGrpcService()
}
