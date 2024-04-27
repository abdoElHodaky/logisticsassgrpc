import {AuthController} from "./auths";
import {AuthorController} from "./authors";
import {UserController} from "./users";
import {UserTicketController} from "./users.tickets";
import {ArticleController} from "./articles";
import {AttachmentController} from "./attachments";
import {GrpcArticleController} from "./articles.grpc";
import {GrpcTicketController} from "./tickets.grpc";
import {GrpcAuthController} from "./auth.grpc";

export const controllers=[GrpcAuthController,
                          GrpcArticleController,GrpcTicketController
                         ]
