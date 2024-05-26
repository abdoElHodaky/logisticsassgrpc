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
exports.GrpcMeController = void 0;
const express_1 = require("@decorators/express");
const express_jwt_1 = require("express-jwt");
const authenticate_1 = require("../middlewares/authenticate");
//const address = "localhost:50051";
let GrpcMeController = class GrpcMeController {
    /* private client =new _User.UserServiceClient(
       address,
       credentials.createInsecure()
     )
     */
    me(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(req.auth);
        });
    }
};
__decorate([
    (0, express_1.Get)("", [authenticate_1.AuthenticateMiddleware]),
    __param(0, (0, express_1.Req)()),
    __param(1, (0, express_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof express_jwt_1.Request !== "undefined" && express_jwt_1.Request) === "function" ? _a : Object, Object]),
    __metadata("design:returntype", Promise)
], GrpcMeController.prototype, "me", null);
GrpcMeController = __decorate([
    (0, express_1.Controller)("/me")
], GrpcMeController);
exports.GrpcMeController = GrpcMeController;
