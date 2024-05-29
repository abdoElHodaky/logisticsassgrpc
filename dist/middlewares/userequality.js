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
exports.UserEqulityMiddleware = void 0;
//import {services} from "../services/enum";
//var jwt = require('jsonwebtoken');
class UserEqulityMiddleware {
    use(request, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const req = request;
            // const service=services.User
            const { auth, params } = req;
            if (params === null || params === void 0 ? void 0 : params.userId) {
                if ((auth === null || auth === void 0 ? void 0 : auth.id) != parseInt(params === null || params === void 0 ? void 0 : params.userId)) {
                    res.status(403).jsonp({ message: "userId should equal your Id" });
                }
            }
            next();
        });
    }
}
exports.UserEqulityMiddleware = UserEqulityMiddleware;
