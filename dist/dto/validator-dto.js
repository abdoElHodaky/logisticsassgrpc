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
exports.validatorDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const errs = [];
const validatorDto = (dto, obj) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log(obj)
    const objInstance = (0, class_transformer_1.plainToClass)(dto, obj);
    console.log(objInstance);
    // validating and check the errors, throw the errors if exist
    const errors = yield (0, class_validator_1.validate)(objInstance);
    // errors is an array of validation errors
    if (errors.length > 0) {
        return errors;
        //console.warn( errors.map(({ property ,constrains}) =>{messages:Object.values(constrains)}))
    }
    else
        return errs;
});
exports.validatorDto = validatorDto;
