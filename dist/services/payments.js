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
const Payment_1 = require("../entity/Payment");
const _1 = require("./");
const common_errors_1 = require("common-errors");
//@Injectable()
class PaymentService extends datasource_1._Data {
    constructor() {
        super();
        // @service("PayTabGate")
        this.payTabService = new _1.PayTabService();
        // this.payTabService.start()
    }
    all(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            //  if(isNumeric(userId)==true){
            try {
                let payments = yield this.datasource.manager.find(entity_1.Payment, {
                    where: { user: { id: userId } }
                });
                if (payments.length != 0)
                    return payments;
                else
                    throw new common_errors_1.NotFoundError("Payments");
            }
            catch (err) {
                // console.log(err)
                return err;
            }
            // }
            //  else return new TypeError("userId should be number")
        });
    }
    create(createPaymentDto) {
        return __awaiter(this, void 0, void 0, function* () {
            /* const {purshasedItem,userid}=createPaymentDto
             let payment=await this.datasource.manager.create(Payment,purchasedItem)
             return payment */
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
                payment.status = Payment_1.PaymentStatus.PAYMENT_PAID;
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
