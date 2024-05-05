"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllers = void 0;
const articles_grpc_1 = require("./articles.grpc");
const tickets_grpc_1 = require("./tickets.grpc");
const auth_grpc_1 = require("./auth.grpc");
const authors_grpc_1 = require("./authors.grpc");
const users_grpc_1 = require("./users.grpc");
const suptickets_grpc_1 = require("./suptickets.grpc");
exports.controllers = [auth_grpc_1.GrpcAuthController, authors_grpc_1.GrpcAuthorController,
    articles_grpc_1.GrpcArticleController, tickets_grpc_1.GrpcTicketController,
    users_grpc_1.GrpcUserController, suptickets_grpc_1.GrpcSupTicketController
];
