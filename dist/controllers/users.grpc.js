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
exports.GrpcUserController = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const dist_1 = require("../protos/dist/");
const express_1 = require("@decorators/express");
const env_1 = require("../env");
const address = "localhost:" + env_1.Env.GRPCSTWOPORT;
let GrpcUserController = class GrpcUserController {
    constructor() {
        this.client = new dist_1._User.UserServiceClient(address, grpc_js_1.credentials.createInsecure());
    }
    all(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reqalluser = {};
            this.client.all(reqalluser, (err, resp) => {
                let resl;
                if (err) {
                    res.jsonp(err);
                }
                else {
                    const resl = dist_1._User.GetAllUserRes.toJSON(resp);
                    res.json(resl);
                }
                //res.jsonp(resl)
            });
        });
    }
};
__decorate([
    (0, express_1.Get)(""),
    __param(0, (0, express_1.Req)()),
    __param(1, (0, express_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GrpcUserController.prototype, "all", null);
GrpcUserController = __decorate([
    (0, express_1.Controller)("/users")
], GrpcUserController);
exports.GrpcUserController = GrpcUserController;
