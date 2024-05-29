"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._services = exports.services = void 0;
const auth_1 = require("./auth");
const attachments_1 = require("./attachments");
const users_1 = require("./users");
const authors_1 = require("./authors");
const articles_1 = require("./articles");
const users_tickets_1 = require("./users.tickets");
const articles_grpc_1 = require("./articles.grpc");
const tickets_grpc_1 = require("./tickets.grpc");
const auth_grpc_1 = require("./auth.grpc");
const authors_grpc_1 = require("./authors.grpc");
const users_grpc_1 = require("./users.grpc");
const suptickets_grpc_1 = require("./suptickets.grpc");
const suptickets_1 = require("./suptickets");
const payments_1 = require("./payments");
exports.services = {
    Auth: new auth_1.AuthService(),
    Author: new authors_1.AuthorService(),
    User: new users_1.UserService(),
    Article: new articles_1.ArticleService(),
    Attachment: new attachments_1.AttachmentService(),
    Ticket: new users_tickets_1.UserTicketService(),
    supTicket: new suptickets_1.supTicketService(),
    Payment: new payments_1.PaymentService(),
    Grpc_Ticket: new tickets_grpc_1.TicketGrpcService(),
    Grpc_Article: new articles_grpc_1.ArticleGrpcService(),
    Grpc_Auth: new auth_grpc_1.AuthGrpcService(),
    Grpc_Author: new authors_grpc_1.AuthorGrpcService(),
    Grpc_User: new users_grpc_1.UserGrpcService(),
    Grpc_supTicket: new suptickets_grpc_1.supTicketGrpcService()
};
exports._services = {
    "Auth": new auth_1.AuthService(),
    "Author": new authors_1.AuthorService(),
    "User": new users_1.UserService(),
    "Article": new articles_1.ArticleService(),
    "Attachment": new attachments_1.AttachmentService(),
    "Ticket": new users_tickets_1.UserTicketService(),
    "supTicket": new suptickets_1.supTicketService(),
    "Payment": new payments_1.PaymentService(),
    "Grpc_Ticket": new tickets_grpc_1.TicketGrpcService(),
    " Grpc_Article": new articles_grpc_1.ArticleGrpcService(),
    "Grpc_Auth": new auth_grpc_1.AuthGrpcService(),
    "Grpc_Author": new authors_grpc_1.AuthorGrpcService(),
    "Grpc_User": new users_grpc_1.UserGrpcService(),
    "Grpc_supTicket": new suptickets_grpc_1.supTicketGrpcService()
};
