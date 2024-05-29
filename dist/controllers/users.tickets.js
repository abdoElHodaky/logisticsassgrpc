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
exports.UserTicketController = void 0;
//import { CreateArticleDto } from "../dto/create-article.dto"
const express_1 = require("@decorators/express");
const enum_1 = require("../services/enum");
let UserTicketController = class UserTicketController {
    constructor() {
        this.userticketS = enum_1.services.Ticket;
    }
    all(id, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /* let id=Number(userid)
             let user=await AppDataSource.manager.findOneOrFail(User,{where:{
                     id:id
                    },
                    relations:{
                     tickets:true
                    }
                     })*/
            let tickets = yield this.userticketS.all(id);
            if (tickets instanceof Array)
                return tickets;
            else
                res.status(404).jsonp({ message: (tickets === null || tickets === void 0 ? void 0 : tickets.message) + " requested user" });
        });
    }
    create(userid, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /* let id=Number(userid)
             let supticket=new supTicket()
             let user:User;
             let ticket:supTicket;
             supticket.type="inquiry"
             supticket.subject="Greet"
             supticket.description="How are you?"
             user=await AppDataSource.manager.findOneByOrFail(User,{id:id})
             user.tickets.push(supticket)
             await AppDataSource.manager.save(User,user)*/
            let ticket = yield this.userticketS.create(userid);
            if (ticket)
                res.json({ message: "created success" });
        });
    }
};
__decorate([
    (0, express_1.Get)("/:userid/tickets"),
    __param(0, (0, express_1.Params)("userid")),
    __param(1, (0, express_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserTicketController.prototype, "all", null);
__decorate([
    (0, express_1.Post)("/:userid/tickets"),
    __param(0, (0, express_1.Params)("userid")),
    __param(1, (0, express_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserTicketController.prototype, "create", null);
UserTicketController = __decorate([
    (0, express_1.Controller)('/users')
], UserTicketController);
exports.UserTicketController = UserTicketController;
