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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleController = void 0;
const enum_1 = require("../services/enum");
//import { AppDataSource } from "../_datasource";
const create_article_dto_1 = require("../dto/create-article.dto");
const express_1 = require("@decorators/express");
let ArticleController = class ArticleController {
    constructor() {
        this.articleS = enum_1.services.Article;
    }
    all() {
        return __awaiter(this, void 0, void 0, function* () {
            /* 	#swagger.tags = ['Article']
                 #swagger.description = 'Endpoint to get articles' */
            let articles = yield this.articleS.all();
            return articles;
        });
    }
    create(res, createArticleDto) {
        return __awaiter(this, void 0, void 0, function* () {
            //  #swagger.tags = ['Article']
            /*let {article,userid}=createArticleDto
            article=<Article>{...article}
            let author=await AppDataSource.manager.findOneByOrFail(Author,{id:parseInt(userid)})
            article.author=author
            author.articles.push(article)
            await AppDataSource.manager.save(Article,article)*/
            let article = yield this.articleS.create(createArticleDto);
            res.json({ message: "created successfully" });
            /*AppDataSource.manager.findOneByOrFail(Author,{id:userid}).then(d=>{
                author=d;
                return author
            }).then(a=>{
                article.author=a;
                a.articles=[]
                a.articles.push(article)
                return article
            }).then(a=>{
                AppDataSource.manager.save(Article,a)
                //AppDataSource.manager.save(a.user)
                res.json({message:"created successfully"})
            })*/
        });
    }
};
__decorate([
    (0, express_1.Get)(""),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "all", null);
__decorate([
    (0, express_1.Post)(""),
    __param(0, (0, express_1.Res)()),
    __param(1, (0, express_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_article_dto_1.CreateArticleDto]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "create", null);
ArticleController = __decorate([
    (0, express_1.Controller)('/articles'),
    __metadata("design:paramtypes", [])
], ArticleController);
exports.ArticleController = ArticleController;
