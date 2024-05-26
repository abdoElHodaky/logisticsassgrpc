"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllers = void 0;
const articles_grpc_1 = require("./articles.grpc");
const users_tickets_grpc_1 = require("./users-tickets.grpc");
const auth_grpc_1 = require("./auth.grpc");
const authors_grpc_1 = require("./authors.grpc");
const users_grpc_1 = require("./users.grpc");
const suptickets_grpc_1 = require("./suptickets.grpc");
const payments_1 = require("./payments");
const me_1 = require("./me");
const users_payments_grpc_1 = require("./users-payments.grpc");
exports.controllers = [auth_grpc_1.GrpcAuthController, authors_grpc_1.GrpcAuthorController,
    articles_grpc_1.GrpcArticleController, users_tickets_grpc_1.GrpcUserTicketController,
    users_grpc_1.GrpcUserController, suptickets_grpc_1.GrpcSupTicketController,
    payments_1.PaymentController, me_1.GrpcMeController,
    users_payments_grpc_1.GrpcUserPaymentController
];
