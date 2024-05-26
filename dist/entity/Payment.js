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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = exports.PaymentStatus = void 0;
const typeorm_1 = require("typeorm");
const _1 = require("./");
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PAYMENT_DEFAULT"] = "Default";
    PaymentStatus["PAYMENT_PENDING"] = "Pending";
    PaymentStatus["PAYMENT_PAID"] = "Paid";
})(PaymentStatus = exports.PaymentStatus || (exports.PaymentStatus = {}));
let Payment = class Payment {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], Payment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Payment.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)( /*{type:'timestamptz'}*/),
    __metadata("design:type", String)
], Payment.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Payment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Payment.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Payment.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)(() => _1.Address),
    __metadata("design:type", _1.Address)
], Payment.prototype, "shipping", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Payment.prototype, "transR", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => _1.Purshase, purchase => purchase.payment),
    __metadata("design:type", _1.Purshase)
], Payment.prototype, "purchase", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, user => user.payments),
    __metadata("design:type", _1.User)
], Payment.prototype, "user", void 0);
Payment = __decorate([
    (0, typeorm_1.Entity)()
], Payment);
exports.Payment = Payment;
