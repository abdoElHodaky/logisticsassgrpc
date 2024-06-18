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
exports.Subscriber = void 0;
const typeorm_1 = require("typeorm");
const Subscription_1 = require("../Subscription");
const User_1 = require("./User");
let Subscriber = class Subscriber extends User_1.User {
};
__decorate([
    (0, typeorm_1.Column)({ default: "User" }),
    __metadata("design:type", String)
], Subscriber.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Subscription_1.Subscription, subscrip => subscrip.user),
    __metadata("design:type", Array)
], Subscriber.prototype, "subscrips", void 0);
Subscriber = __decorate([
    (0, typeorm_1.ChildEntity)()
], Subscriber);
exports.Subscriber = Subscriber;
