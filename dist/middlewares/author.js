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
exports.AuthorMiddleware = void 0;
const enum_1 = require("../services/enum");
//var jwt = require('jsonwebtoken');
class AuthorMiddleware {
    use(request, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const req = request;
            const service = enum_1.services.User;
            if (req.auth != undefined) {
                let user = yield service.id(req === null || req === void 0 ? void 0 : req.auth.id);
                if (user.type != "author" || user.type != "Author")
                    res.jsonp({ message: "Logged in User not Author" });
            }
            else {
                res.status(401).json({ message: "you should login" });
            }
            next();
        });
    }
}
exports.AuthorMiddleware = AuthorMiddleware;
