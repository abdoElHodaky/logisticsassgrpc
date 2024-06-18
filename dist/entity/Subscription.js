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
exports.Subscription = void 0;
const typeorm_1 = require("typeorm");
const users_1 = require("./users/");
const products_1 = require("./products/");
let Subscription = class Subscription {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], Subscription.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Subscription.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)("int"),
    __metadata("design:type", Number)
], Subscription.prototype, "SuserId", void 0);
__decorate([
    (0, typeorm_1.Column)("int"),
    __metadata("design:type", Number)
], Subscription.prototype, "SProductId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_1.Subscriber, user => user.subscrips),
    __metadata("design:type", users_1.Subscriber)
], Subscription.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => products_1.Product, product => product.subscriptions)
    // @JoinColumn({name:"SProductId", referencedColumnName:"id" })
    ,
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Subscription.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "date" }),
    __metadata("design:type", Date)
], Subscription.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "date" }),
    __metadata("design:type", Date)
], Subscription.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", Date)
], Subscription.prototype, "renewalAt", void 0);
Subscription = __decorate([
    (0, typeorm_1.Entity)()
], Subscription);
exports.Subscription = Subscription;
