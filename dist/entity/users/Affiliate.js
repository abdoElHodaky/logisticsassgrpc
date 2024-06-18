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
exports.Affiliate = void 0;
const typeorm_1 = require("typeorm");
const _1 = require("./");
const products_1 = require("../products/");
const helpers_1 = require("../../helpers");
let Affiliate = class Affiliate extends _1.User {
    setCode() {
        this.referralCode = (0, helpers_1.genCode)();
    }
};
__decorate([
    (0, typeorm_1.Column)({ default: "marketer" }),
    __metadata("design:type", String)
], Affiliate.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => products_1.AffiliateProduct, product => product.affiliate),
    __metadata("design:type", Array)
], Affiliate.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, user => user.affiliates),
    (0, typeorm_1.JoinColumn)([
        { name: "referedBy", referencedColumnName: "referralCode" },
        //{ name: "locale_id", referencedColumnName: "locale_id" }
    ]),
    __metadata("design:type", _1.User)
], Affiliate.prototype, "related", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "456", type: "varchar" }),
    __metadata("design:type", String)
], Affiliate.prototype, "referralCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "456", type: "varchar" }),
    __metadata("design:type", String)
], Affiliate.prototype, "referedBy", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Affiliate.prototype, "setCode", null);
Affiliate = __decorate([
    (0, typeorm_1.ChildEntity)()
], Affiliate);
exports.Affiliate = Affiliate;
