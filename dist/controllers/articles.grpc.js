"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcArticleController = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const dist_1 = require("../protos/dist/");
const create_article_dto_1 = require("../dto/create-article.dto");
const entity_1 = require("../entity/");
const express_1 = require("@decorators/express");
const express_jwt_1 = require("express-jwt");
const middlewares_1 = require("../middlewares/");
const helpers_1 = require("../helpers");
const common_errors_1 = require("common-errors");
const env_1 = require("../env");
const address = "localhost:" + env_1.Env.GRPCSOnePORT;
let GrpcArticleController = class GrpcArticleController {
    constructor() {
        this.client = new dist_1._Article.ArticleServiceClient(address, grpc_js_1.credentials.createInsecure());
    }
    all(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const req = {};
            this.client.all(req, (err, resp) => {
                if (err) {
                    res.jsonp(err);
                    console.error(err);
                }
                else {
                    res.json(resp);
                }
            });
        });
    }
    // @AuthenticateMiddleware
    create(req, res, createarticledto) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = req.auth;
            let articlecdto = createarticledto;
            const empty = (0, helpers_1.isEmpty)(articlecdto);
            console.log(empty);
            try {
                if (empty == false) {
                    try {
                        if (user instanceof entity_1.User) {
                            const _article = dist_1._Article.Article.fromJSON(articlecdto);
                            _article.userId = user.id;
                            let article = {
                                userId: user.id,
                                article: _article
                            };
                            // res.jsonp(article)
                            this.client.create(article, (err, resp) => {
                                if (err) {
                                    res.jsonp(err);
                                    console.error(err);
                                }
                                else {
                                    res.json(resp);
                                }
                            });
                        }
                        else {
                            res.json({ message: "error" });
                        }
                    }
                    catch (err) {
                        console.log(err);
                        //const error=new Error("Argument(s) is/are empty or not existed",err)
                        res.jsonp({ message: err === null || err === void 0 ? void 0 : err.message });
                    }
                }
                else {
                    throw new common_errors_1.Error("Argument(s) is/are empty or not existed");
                }
            }
            catch (err) {
                res.jsonp({ message: err === null || err === void 0 ? void 0 : err.message });
            }
        });
    }
};
__decorate([
    (0, express_1.Get)(""),
    __param(0, (0, express_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GrpcArticleController.prototype, "all", null);
__decorate([
    (0, express_1.Post)("", [middlewares_1.AuthenticateMiddleware, middlewares_1.AuthorMiddleware, middlewares_1.ValidatedMiddleware]),
    __param(0, (0, express_1.Req)()),
    __param(1, (0, express_1.Res)()),
    __param(2, (0, express_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof express_jwt_1.Request !== "undefined" && express_jwt_1.Request) === "function" ? _a : Object, Object, create_article_dto_1.CreateArticleDto]),
    __metadata("design:returntype", Promise)
], GrpcArticleController.prototype, "create", null);
GrpcArticleController = __decorate([
    (0, express_1.Controller)("/articles")
], GrpcArticleController);
exports.GrpcArticleController = GrpcArticleController;
