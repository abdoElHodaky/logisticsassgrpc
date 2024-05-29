"use strict";
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
exports.AuthenticateMiddleware = void 0;
const enum_1 = require("../services/enum");
const env_1 = require("../env");
var jwt = require('jsonwebtoken');
class AuthenticateMiddleware {
    use(request, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const req = request;
            const service = enum_1.services.User;
            const secret = env_1.Env.JWT_SECRET || "secret";
            let authorizeHeader = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization;
            if (authorizeHeader !== undefined) {
                let token = authorizeHeader.split(" ")[1];
                let decoded = jwt.decode(token, secret);
                if (Date.now() < decoded.exp * 1000) {
                    decoded = jwt.verify(token, secret);
                    req.auth = yield service.id(decoded.id);
                }
                else {
                    res.status(400).json({ message: "Token expired, you should login" });
                }
            }
            else {
                res.status(401).json({ message: "you should login" });
            }
            // res.end("")
            next();
        });
    }
}
exports.AuthenticateMiddleware = AuthenticateMiddleware;
