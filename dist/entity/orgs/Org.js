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
exports.Orgz = void 0;
const typeorm_1 = require("typeorm");
//import { Email } from "./Email"
const __1 = require("../");
let Orgz = 
//@TableInheritance({column:{type:"varchar",name:"referralCode"}})
//@TableInheritance({column:{type:"varchar",name:"referedBy"}})
class Orgz {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], Orgz.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Orgz.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Orgz.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Orgz.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Orgz.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)(() => __1.Address),
    __metadata("design:type", __1.Address)
], Orgz.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "date" }),
    __metadata("design:type", Date)
], Orgz.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "date" }),
    __metadata("design:type", Date)
], Orgz.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => __1.Owner, owner => owner.orgzs),
    __metadata("design:type", __1.Owner)
], Orgz.prototype, "owner", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => __1.OrgzAttachment, attachment => attachment.attached),
    __metadata("design:type", __1.OrgzAttachment)
], Orgz.prototype, "attachments", void 0);
Orgz = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.TableInheritance)({ column: { type: "varchar", name: "type" } })
    //@TableInheritance({column:{type:"varchar",name:"referralCode"}})
    //@TableInheritance({column:{type:"varchar",name:"referedBy"}})
], Orgz);
exports.Orgz = Orgz;
