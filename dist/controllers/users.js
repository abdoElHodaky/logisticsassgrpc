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
exports.UserController = void 0;
const enum_1 = require("../services/enum");
const entity_1 = require("../entity/");
const _datasource_1 = require("../_datasource");
//import { CreateArticleDto } from "../dto/create-article.dto"
const express_1 = require("@decorators/express");
let UserController = class UserController {
    constructor() {
        this.userS = enum_1.services.User;
    }
    all() {
        return __awaiter(this, void 0, void 0, function* () {
            //this.userS.datasource=AppDataSource
            /* 	#swagger.tags = ['User']
                #swagger.description = 'Endpoint to get users' */
            //let resd:User[]=await AppDataSource.getRepository(User).find()
            let users = yield this.userS.all();
            return users;
        });
    }
    user(id, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /* 	#swagger.tags = ['User']
                #swagger.description = 'Endpoint to sign in a specific user' */
            /* if(isNumeric(id)==true){
               console.log(nationalIdvalid(id))
               const _id=Number(id)
              let user=await AppDataSource.getRepository(User).findOneOrFail({
                 where:{
                   id:_id
                 },
                 relations:{
                   tickets:true,
                   verifications:true
                 }
               })
               return user
             }
             else{
                res.json({message:"user not found or you used invalid paramter"})
             }*/
            let user = yield this.userS.id(id);
            if (user instanceof entity_1.User) {
                return user;
            }
            else
                res.status(404).json({ message: user === null || user === void 0 ? void 0 : user.message });
        });
    }
    delete(id, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /* 	#swagger.tags = ['User']
                #swagger.description = 'Endpoint to delete specific user' */
            let u = yield _datasource_1.AppDataSource.getRepository(entity_1.User).delete({ id: Number(id) });
            if (u)
                res.jsonp({ message: "deleted succefully" });
        });
    }
};
__decorate([
    (0, express_1.Get)("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "all", null);
__decorate([
    (0, express_1.Get)("/:id"),
    __param(0, (0, express_1.Params)("id")),
    __param(1, (0, express_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "user", null);
__decorate([
    (0, express_1.Delete)("/:id"),
    __param(0, (0, express_1.Params)("id")),
    __param(1, (0, express_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "delete", null);
UserController = __decorate([
    (0, express_1.Controller)('/users'),
    __metadata("design:paramtypes", [])
], UserController);
exports.UserController = UserController;
