import {GrpcArticleController} from "./articles.grpc";
import {GrpcUserTicketController} from "./users-tickets.grpc";
import {GrpcAuthController} from "./auth.grpc";
import {GrpcAuthorController} from "./authors.grpc";
import {GrpcUserController} from "./users.grpc";
import {GrpcSupTicketController} from "./suptickets.grpc";
import {PaymentController} from "./payments";
import {GrpcMeController} from "./me";
import {GrpcUserPaymentController} from "./users-payments.grpc";
import {GrpcProductController} from "./products.grpc";
import {GrpcOrgzController} from "./orgzs.grpc";
import {PurshaseController} from "./purchases.grpc";
export const controllers=[GrpcAuthController,GrpcAuthorController,
                          GrpcArticleController,GrpcUserTicketController,
                          GrpcUserController,GrpcSupTicketController,
                          PaymentController,GrpcMeController,GrpcOrgzController,
                          GrpcUserPaymentController,GrpcProductController,
                          PurshaseController
                         ]
