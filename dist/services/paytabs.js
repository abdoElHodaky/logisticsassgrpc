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
exports.PayTabService = void 0;
const paytabs = require("paytabs_pt2");
class PayTabService {
    values(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            let arr = [];
            for (var i in obj) {
                arr.push(obj[i]);
            }
            return arr;
        });
    }
    config(profile, serverk, region) {
        return __awaiter(this, void 0, void 0, function* () {
            yield paytabs.setConfig(profile, serverk, region);
        });
    }
    createPage(payment, urls) {
        return __awaiter(this, void 0, void 0, function* () {
            let res;
            let client = payment.user;
            const { firstName, lastName, email, address } = client;
            const { id, currency, amount, shipping } = payment;
            const { title } = shipping, resship = __rest(shipping, ["title"]);
            let shippinginfo = resship;
            let clientinfo = [firstName + " " + lastName, email, "phone"];
            let paymentinfo = [id, currency, amount, ""];
            let _urls = [urls.callback, urls.return];
            yield paytabs.createPaymentPage(['all'], ['sale', 'ecom'], paymentinfo, clientinfo, shippinginfo, "AR", _urls, (result) => {
                return (result != undefined) ? result.redirect_url : {};
            });
        });
    }
    payCallback(result) {
        return __awaiter(this, void 0, void 0, function* () {
            let { respCode, respMessage, transRef, respStatus, cart } = result;
            return {
                trans: transRef,
                status: respStatus,
                code: respCode,
                message: respMessage,
                paymentId: cart.cart_id
            };
        });
    }
    payReturn(result) {
        return __awaiter(this, void 0, void 0, function* () {
            let { respCode, respMessage, transRef, respStatus, cart } = result;
            return {
                trans: transRef,
                status: respStatus,
                code: respCode,
                message: respMessage,
                paymentId: cart.cart_id
            };
        });
    }
    payVerify(transR) {
        return __awaiter(this, void 0, void 0, function* () {
            let valid = false;
            let res;
            paytabs.validatePayment(transR, (result) => {
                if (result['response_code:'] === 400) {
                    valid = false;
                }
                else {
                    valid = true;
                }
                res = result;
            });
            return yield { transRef: transR, code: res['response_code:'], valid: valid };
        });
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            const { PAYTABS_PROFILE, PAYTABS_SERVERK, PAYTABS_REGION } = process.env;
            yield paytabs.setConfig(PAYTABS_PROFILE, PAYTABS_SERVERK, PAYTABS_REGION);
        });
    }
}
exports.PayTabService = PayTabService;
