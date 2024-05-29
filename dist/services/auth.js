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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const entity_1 = require("../entity/");
const datasource_1 = require("./datasource");
const common_errors_1 = require("common-errors");
//@Injectable()
class AuthService extends datasource_1._Data {
    constructor() { super(); }
    login(loginUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, passwordHash } = loginUserDto;
            try {
                let user = yield this.datasource.manager.findOneOrFail(entity_1.User, { where: {
                        username: username,
                        passwordHash: passwordHash,
                        // id:id
                    } });
                return user;
            }
            catch (err) {
                return new common_errors_1.Error("No Records matched", err);
            }
        });
    }
    create(cdtouser) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = cdtouser, user = __rest(cdtouser, ["email"]);
            let _user = yield this.datasource.manager.create(entity_1.User, Object.assign({ email: {
                    value: email
                } }, user));
            return _user;
        });
    }
}
exports.AuthService = AuthService;
