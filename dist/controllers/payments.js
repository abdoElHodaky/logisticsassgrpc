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
const middlewares_1 = require("../middlewares/");
const create_payment_dto_1 = require("../dto/create-payment.dto");
const express_1 = require("@decorators/express");
const enum_1 = require("../services/enum");
let PaymentController = class PaymentController {
    constructor() {
        this.paymentService = enum_1.services.Payment;
    }
    all(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { auth } = req;
            console.log(auth);
            let payments = yield this.paymentService.all(auth === null || auth === void 0 ? void 0 : auth.id);
            if ((payments instanceof Array) && payments.length != 0)
                return payments;
            else
                res.jsonp({ message: payments === null || payments === void 0 ? void 0 : payments.message });
        });
    }
    create(req, createpaymentdto, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { auth } = req;
            // console.log(auth)
            //let payment=await this.paymentService.create(createpaymentdto)
            // return payment;
        });
    }
    pay(paymentId, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${req.baseUrl}`;
            let reslurl = yield this.paymentService.pay(paymentId, { callback: url + "/callback", return: url + "/return" });
            return res.redirect(reslurl);
        });
    }
    callback(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = require('url');
            let reslt = yield this.paymentService.payCallback(req.body);
            let rp = yield this.paymentService.verify(reslt.transR, reslt.paymentId);
            this.reslt = rp;
            res.json({ message: "ok" });
            /* res.redirect(url.format({
                pathname:req.baseUrl+"/result",
                query: {
                   "result":rp ,
                 }
              }));*/
        });
    }
    return(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = require('url');
            let reslt = yield this.paymentService.payCallback(req.body);
            let rp = yield this.paymentService.verify(reslt.transR, reslt.paymentId);
            this.reslt = rp;
            res.json({ message: "ok" });
            /*res.redirect(url.format({
               pathname:req.baseUrl+"/result",
               query: {
                  "result":rp ,
                }
             }));*/
        });
    }
    result(res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.jsonp(this.result);
        });
    }
};
__decorate([
    (0, express_1.Get)("", [middlewares_1.AuthenticateMiddleware]),
    __param(0, (0, express_1.Req)()),
    __param(1, (0, express_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "all", null);
__decorate([
    (0, express_1.Post)("", [middlewares_1.AuthenticateMiddleware]),
    __param(0, (0, express_1.Req)()),
    __param(1, (0, express_1.Body)()),
    __param(2, (0, express_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_payment_dto_1.CreatePaymentDto, Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "create", null);
__decorate([
    (0, express_1.Post)("/:paymentId/Pay", [middlewares_1.AuthenticateMiddleware]),
    __param(0, (0, express_1.Params)("paymentId")),
    __param(1, (0, express_1.Req)()),
    __param(2, (0, express_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "pay", null);
__decorate([
    (0, express_1.Post)("/callback"),
    __param(0, (0, express_1.Req)()),
    __param(1, (0, express_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "callback", null);
__decorate([
    (0, express_1.Post)("/return"),
    __param(0, (0, express_1.Req)()),
    __param(1, (0, express_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "return", null);
__decorate([
    (0, express_1.Get)("/result", [middlewares_1.AuthenticateMiddleware]),
    __param(0, (0, express_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "result", null);
PaymentController = __decorate([
    (0, express_1.Controller)('/payments'),
    __metadata("design:paramtypes", [])
], PaymentController);
exports.PaymentController = PaymentController;
