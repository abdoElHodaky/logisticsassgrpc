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
exports.PaymentService = void 0;
const datasource_1 = require("./datasource");
const entity_1 = require("../entity/");
const _1 = require("./");
//@Injectable()
class PaymentService extends datasource_1._Data {
    constructor() {
        super();
        // @service("PayTabGate")
        this.payTabService = new _1.PayTabService();
        // this.payTabService.start()
    }
    all() {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(this._source)
            return yield this.datasource.manager.find(entity_1.Payment);
        });
    }
    create(createPaymentDto) {
        return __awaiter(this, void 0, void 0, function* () {
            //const {purshasedItem,userid}=createPaymentDto
            //let _article=<Payment>{...payment}
            /*let user=await this.datasource.manager.findOneByOrFail(User,{id:parseInt(userid)})
            _article.by=author
            author.payments.push(_article)
            _article=await this.datasource.manager.save(Payment,_article)
            return _article*/ return;
        });
    }
    pay(paymentId, urls) {
        return __awaiter(this, void 0, void 0, function* () {
            let payment = yield this.datasource.manager.findOneOrFail(entity_1.Payment, {
                where: { id: parseInt(paymentId) }
            });
            return yield this.payTabService.createPage(payment, urls);
        });
    }
    payCallback(result) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.payTabService.payCallback(result);
        });
    }
    verify(transR, paymentId) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.payTabService.payVerify(transR);
            let { valid, code } = res;
            if (valid === true) {
                let payment = yield this.datasource.manager.findOneOrFail(entity_1.Payment, {
                    where: { id: parseInt(paymentId) }
                });
                payment.status = "paid";
                payment.transR = transR;
                yield this.datasource.manager.save(entity_1.Payment, payment);
                return { message: "Payment success , Thanks" };
            }
            else {
                return res;
            }
        });
    }
}
exports.PaymentService = PaymentService;
