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
exports.AuthorController = void 0;
const services_1 = require("../services/");
const entity_1 = require("../entity/");
const _datasource_1 = require("../_datasource");
const express_1 = require("@decorators/express");
const express_jwt_1 = require("express-jwt");
let AuthorController = class AuthorController {
    constructor() {
        this.authorS = new services_1.AuthorService();
    }
    all() {
        return __awaiter(this, void 0, void 0, function* () {
            /* 	#swagger.tags = ['User']
                #swagger.description = 'Endpoint to get users' */
            let resd = yield this.authorS.all();
            //await AppDataSource.getRepository(Author).find()
            return resd;
        });
    }
    create(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let _author;
            _author = yield this.authorS.create(req === null || req === void 0 ? void 0 : req.auth);
            return _author;
        });
    }
    user(id, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /* 	#swagger.tags = ['User']
                #swagger.description = 'Endpoint to sign in a specific user' */
            /* if(isNumeric(id)==true){
               console.log(nationalIdvalid(id))
               const _id=Number(id)
              let user=await AppDataSource.getRepository(Author).findOneOrFail({
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
            let author = yield this.authorS.id(id);
            // console.log(author)
            if (author instanceof entity_1.Author) {
                return author;
            }
            else
                res.status(404).jsonp({ message: author === null || author === void 0 ? void 0 : author.message });
            // else res.json({message:"user not found or you used invalid paramter"})
        });
    }
    delete(id, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /* 	#swagger.tags = ['User']
                #swagger.description = 'Endpoint to delete specific user' */
            let u = yield _datasource_1.AppDataSource.getRepository(entity_1.Author).delete({ id: Number(id) });
            if (u)
                res.jsonp({ message: "deleted succefully" });
        });
    }
};
__decorate([
    (0, express_1.Get)(""),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "all", null);
__decorate([
    (0, express_1.Post)(""),
    __param(0, (0, express_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof express_jwt_1.Request !== "undefined" && express_jwt_1.Request) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "create", null);
__decorate([
    (0, express_1.Get)("/:id"),
    __param(0, (0, express_1.Params)("id")),
    __param(1, (0, express_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "user", null);
__decorate([
    (0, express_1.Delete)("/:id"),
    __param(0, (0, express_1.Params)("id")),
    __param(1, (0, express_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "delete", null);
AuthorController = __decorate([
    (0, express_1.Controller)('/authors'),
    __metadata("design:paramtypes", [])
], AuthorController);
exports.AuthorController = AuthorController;
