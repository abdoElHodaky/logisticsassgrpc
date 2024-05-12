/*import {AuthController} from "./auths";
import {AuthorController} from "./authors";
import {UserController} from "./users";
import {UserTicketController} from "./users.tickets";
import {ArticleController} from "./articles";
import {AttachmentController} from "./attachments";*/
import {GrpcArticleController} from "./articles.grpc";
import {GrpcUserTicketController} from "./users-tickets.grpc";
import {GrpcAuthController} from "./auth.grpc";
import {GrpcAuthorController} from "./authors.grpc";
import {GrpcUserController} from "./users.grpc";
import {GrpcSupTicketController} from "./suptickets.grpc";
import {PaymentController} from "./payments";
import {GrpcMeController} from "./me";
import {GrpcUserPaymentController} from "users-payments.grpc";
export const controllers=[GrpcAuthController,GrpcAuthorController,
                          GrpcArticleController,GrpcTicketController,
                          GrpcUserController,GrpcSupTicketController,
                          PaymentController,GrpcMeController,
                          GrpcUserPaymentController
                         ]
