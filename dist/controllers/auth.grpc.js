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
exports.GrpcAuthController = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const dist_1 = require("../protos/dist/");
const express_1 = require("@decorators/express");
const dto_1 = require("../dto/");
const common_errors_1 = require("common-errors");
const helpers_1 = require("../helpers");
const env_1 = require("../env");
const address = "localhost:" + env_1.Env.GRPCSOnePORT;
var jwt = require('jsonwebtoken');
let GrpcAuthController = class GrpcAuthController {
    constructor() {
        this.client = new dist_1._Auth.AuthServiceClient(address, grpc_js_1.credentials.createInsecure());
    }
    login(res, loginUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const empty = (0, helpers_1.isEmpty)(loginUserDto);
                console.log(empty);
                if (empty == false) {
                    const req = {
                        username: loginUserDto.username,
                        passwordHash: loginUserDto.passwordHash
                    };
                    try {
                        this.client.login(req, (err, resp) => {
                            if (err) {
                                res.jsonp(err);
                                console.error(err);
                            }
                            else {
                                // let _user=new User()
                                //let usee=_User.User.toJSON(resp.user)
                                let user = resp.user;
                                if (user != undefined) {
                                    let token = jwt.sign({
                                        username: user.username,
                                        passwordHash: user.passwordHash,
                                        type: user.type,
                                        id: user.id
                                    }, "secret", { expiresIn: "1h" });
                                    res.json({ accessToken: token });
                                }
                                else {
                                    res.json({ accessToken: "" });
                                }
                            }
                        });
                    }
                    catch (err) {
                        console.log(err);
                        //const error=new Error("Login Information not provided or not existed",err)
                        res.jsonp({ message: err === null || err === void 0 ? void 0 : err.message });
                    }
                }
                else {
                    throw new common_errors_1.Error("Login Information not provided or not existed");
                }
            }
            catch (err) {
                // const error=new Error("Login Information not provided or not existed",err)
                res.jsonp({ message: err === null || err === void 0 ? void 0 : err.message });
            }
        });
    }
};
__decorate([
    (0, express_1.Post)("/login"),
    __param(0, (0, express_1.Res)()),
    __param(1, (0, express_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.LoginUserDto]),
    __metadata("design:returntype", Promise)
], GrpcAuthController.prototype, "login", null);
GrpcAuthController = __decorate([
    (0, express_1.Controller)("/auth")
], GrpcAuthController);
exports.GrpcAuthController = GrpcAuthController;
