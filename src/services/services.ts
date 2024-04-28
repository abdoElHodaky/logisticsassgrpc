import * as Services from "./";
let servkey = Symbol("servname");

export enum services{
  Auth=Services.AuthService,
  Author=Services.AuthorService,
  User=Services.UserService,
  Article=Services.ArticleService,
  Attachment=Services.AttachmentService,
  Ticket=Services.UserTicketService,
  Grpc_Ticket=Services.TicketGrpcService,
  Grpc_Article=Services.ArticleGrpcService,
  Grpc_Auth=Services.AuthGrpcService,
  Grpc_Author=AuthorGrpcService
}
