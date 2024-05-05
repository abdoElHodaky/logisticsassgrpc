"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nationalIdvalid = exports.isNumeric = void 0;
function isNumeric(value) {
    return /^\d+$/.test(value);
}
exports.isNumeric = isNumeric;
function nationalIdvalid(value) {
    const message = value;
    const pattern = /^([1-9]{1})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})[0-9]{3}([0-9]{1})[0-9]{1}$/;
    return (pattern.test(message));
}
exports.nationalIdvalid = nationalIdvalid;
