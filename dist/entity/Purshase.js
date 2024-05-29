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
exports.PurshaseItem = exports.Purshase = void 0;
const typeorm_1 = require("typeorm");
const _1 = require("./");
const _2 = require("./");
let Purshase = 
//@ChildEntity()
class Purshase {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], Purshase.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PurshaseItem, item => item.purshase),
    __metadata("design:type", Array)
], Purshase.prototype, "items", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, user => user.purchases),
    __metadata("design:type", _1.User)
], Purshase.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => _2.Payment, payment => payment.purchase),
    __metadata("design:type", _2.Payment)
], Purshase.prototype, "payment", void 0);
Purshase = __decorate([
    (0, typeorm_1.Entity)()
    //@ChildEntity()
], Purshase);
exports.Purshase = Purshase;
let PurshaseItem = 
//@ChildEntity()
class PurshaseItem {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], PurshaseItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("simple-json"),
    __metadata("design:type", Object)
], PurshaseItem.prototype, "props", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Purshase, purshase => purshase.items),
    __metadata("design:type", Purshase)
], PurshaseItem.prototype, "purshase", void 0);
PurshaseItem = __decorate([
    (0, typeorm_1.Entity)()
    //@ChildEntity()
], PurshaseItem);
exports.PurshaseItem = PurshaseItem;
