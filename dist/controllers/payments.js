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
exports.PaymentController = void 0;
//import { CreateArticleDto } from "../dto/create-article.dto"
const express_1 = require("@decorators/express");
const enum_1 = require("../services/enum");
let PaymentController = class PaymentController {
    constructor() {
        this.paymentService = enum_1.services.Payment;
    }
    all() {
        return __awaiter(this, void 0, void 0, function* () {
            //this.userS.datasource=AppDataSource
            /* 	#swagger.tags = ['User']
                #swagger.description = 'Endpoint to get users' */
            //let resd:User[]=await AppDataSource.getRepository(User).find()
        });
    }
    pay(paymentId, req) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${req.baseUrl}`;
            return yield this.paymentService.pay(paymentId, { callback: url + "/callback", return: url + "/return" });
        });
    }
    callback(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.paymentService.payCallback(req.body);
            let rp = yield this.paymentService.verify(res.transR, res.paymentId);
        });
    }
    return(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.paymentService.payCallback(req.body);
            let rp = yield this.paymentService.verify(res.transR, res.paymentId);
        });
    }
};
__decorate([
    (0, express_1.Get)("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "all", null);
__decorate([
    (0, express_1.Post)("/:paymentId/Pay"),
    __param(0, (0, express_1.Params)("paymentId")),
    __param(1, (0, express_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "pay", null);
__decorate([
    (0, express_1.Post)("/callback"),
    __param(0, (0, express_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "callback", null);
__decorate([
    (0, express_1.Post)("/return"),
    __param(0, (0, express_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "return", null);
PaymentController = __decorate([
    (0, express_1.Controller)('/payments'),
    __metadata("design:paramtypes", [])
], PaymentController);
exports.PaymentController = PaymentController;
