import * as Services from "./";
let servkey = Symbol("servname");
export let services:any={
  "Auth":Services.AuthService,
  "Author":Services.AuthorService,
  "User":Services.UserService,
  "Article":Services.ArticleService,
  "Attachment":Services.AttachmentService,
  "Ticket":Services.UserTicketService,
  "Grpc.Ticket":Services.TicketGrpcService,
  "Grpc.Article":Services.ArticleGrpcService,
  "Grpc.Auth":Services.AuthGrpcService,
  "Grpc.Author":Services.AuthorGrpcService

}

export const Service=(servname:string)=>{
   return new services[servname]()
}
