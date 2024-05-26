"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.174.0
//   protoc               v3.14.0
// source: user.proto
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServiceClient = exports.UserServiceService = exports.GetAllUserRes = exports.GetAllUserReq = exports.GetUserIdRes = exports.GetUserIdReq = exports.CreateUserRes = exports.CreateUserReq = exports.User_Email = exports.User = exports.createBaseUser = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const address_1 = require("./address");
const article_1 = require("./article");
const error_1 = require("./error");
const timestamp_1 = require("./google/protobuf/timestamp");
const payment_1 = require("./payment");
const ticket_1 = require("./ticket");
exports.protobufPackage = "";
function createBaseUser() {
    return {
        id: 0,
        type: undefined,
        username: undefined,
        firstname: "",
        lastname: "",
        age: 0,
        IDcardNumber: undefined,
        email: undefined,
        passwordHash: undefined,
        articles: [],
        tickets: [],
        payments: [],
        address: undefined,
        createdAt: undefined,
        updatedAt: undefined,
    };
}
exports.createBaseUser = createBaseUser;
exports.User = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).int32(message.id);
        }
        if (message.type !== undefined) {
            writer.uint32(18).string(message.type);
        }
        if (message.username !== undefined) {
            writer.uint32(26).string(message.username);
        }
        if (message.firstname !== "") {
            writer.uint32(34).string(message.firstname);
        }
        if (message.lastname !== "") {
            writer.uint32(42).string(message.lastname);
        }
        if (message.age !== 0) {
            writer.uint32(48).int32(message.age);
        }
        if (message.IDcardNumber !== undefined) {
            writer.uint32(56).int32(message.IDcardNumber);
        }
        if (message.email !== undefined) {
            exports.User_Email.encode(message.email, writer.uint32(66).fork()).ldelim();
        }
        if (message.passwordHash !== undefined) {
            writer.uint32(74).string(message.passwordHash);
        }
        for (const v of message.articles) {
            article_1.Article.encode(v, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.tickets) {
            ticket_1.Ticket.encode(v, writer.uint32(90).fork()).ldelim();
        }
        for (const v of message.payments) {
            payment_1.Payment.encode(v, writer.uint32(98).fork()).ldelim();
        }
        if (message.address !== undefined) {
            address_1.Address.encode(message.address, writer.uint32(106).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(114).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(122).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUser();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.id = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.username = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.firstname = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.lastname = reader.string();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.age = reader.int32();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.IDcardNumber = reader.int32();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.email = exports.User_Email.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.passwordHash = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.articles.push(article_1.Article.decode(reader, reader.uint32()));
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.tickets.push(ticket_1.Ticket.decode(reader, reader.uint32()));
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.payments.push(payment_1.Payment.decode(reader, reader.uint32()));
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.address = address_1.Address.decode(reader, reader.uint32());
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.Number(object.id) : 0,
            type: isSet(object.type) ? globalThis.String(object.type) : undefined,
            username: isSet(object.username) ? globalThis.String(object.username) : undefined,
            firstname: isSet(object.firstname) ? globalThis.String(object.firstname) : "",
            lastname: isSet(object.lastname) ? globalThis.String(object.lastname) : "",
            age: isSet(object.age) ? globalThis.Number(object.age) : 0,
            IDcardNumber: isSet(object.IDcardNumber) ? globalThis.Number(object.IDcardNumber) : undefined,
            email: isSet(object.email) ? exports.User_Email.fromJSON(object.email) : undefined,
            passwordHash: isSet(object.passwordHash) ? globalThis.String(object.passwordHash) : undefined,
            articles: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.articles) ? object.articles.map((e) => article_1.Article.fromJSON(e)) : [],
            tickets: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.tickets) ? object.tickets.map((e) => ticket_1.Ticket.fromJSON(e)) : [],
            payments: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.payments) ? object.payments.map((e) => payment_1.Payment.fromJSON(e)) : [],
            address: isSet(object.address) ? address_1.Address.fromJSON(object.address) : undefined,
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },
    toJSON(message) {
        var _a, _b, _c;
        const obj = {};
        if (message.id !== 0) {
            obj.id = Math.round(message.id);
        }
        if (message.type !== undefined) {
            obj.type = message.type;
        }
        if (message.username !== undefined) {
            obj.username = message.username;
        }
        if (message.firstname !== "") {
            obj.firstname = message.firstname;
        }
        if (message.lastname !== "") {
            obj.lastname = message.lastname;
        }
        if (message.age !== 0) {
            obj.age = Math.round(message.age);
        }
        if (message.IDcardNumber !== undefined) {
            obj.IDcardNumber = Math.round(message.IDcardNumber);
        }
        if (message.email !== undefined) {
            obj.email = exports.User_Email.toJSON(message.email);
        }
        if (message.passwordHash !== undefined) {
            obj.passwordHash = message.passwordHash;
        }
        if ((_a = message.articles) === null || _a === void 0 ? void 0 : _a.length) {
            obj.articles = message.articles.map((e) => article_1.Article.toJSON(e));
        }
        if ((_b = message.tickets) === null || _b === void 0 ? void 0 : _b.length) {
            obj.tickets = message.tickets.map((e) => ticket_1.Ticket.toJSON(e));
        }
        if ((_c = message.payments) === null || _c === void 0 ? void 0 : _c.length) {
            obj.payments = message.payments.map((e) => payment_1.Payment.toJSON(e));
        }
        if (message.address !== undefined) {
            obj.address = address_1.Address.toJSON(message.address);
        }
        if (message.createdAt !== undefined) {
            obj.createdAt = message.createdAt.toISOString();
        }
        if (message.updatedAt !== undefined) {
            obj.updatedAt = message.updatedAt.toISOString();
        }
        return obj;
    },
    create(base) {
        return exports.User.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const message = createBaseUser();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : undefined;
        message.username = (_c = object.username) !== null && _c !== void 0 ? _c : undefined;
        message.firstname = (_d = object.firstname) !== null && _d !== void 0 ? _d : "";
        message.lastname = (_e = object.lastname) !== null && _e !== void 0 ? _e : "";
        message.age = (_f = object.age) !== null && _f !== void 0 ? _f : 0;
        message.IDcardNumber = (_g = object.IDcardNumber) !== null && _g !== void 0 ? _g : undefined;
        message.email = (object.email !== undefined && object.email !== null)
            ? exports.User_Email.fromPartial(object.email)
            : undefined;
        message.passwordHash = (_h = object.passwordHash) !== null && _h !== void 0 ? _h : undefined;
        message.articles = ((_j = object.articles) === null || _j === void 0 ? void 0 : _j.map((e) => article_1.Article.fromPartial(e))) || [];
        message.tickets = ((_k = object.tickets) === null || _k === void 0 ? void 0 : _k.map((e) => ticket_1.Ticket.fromPartial(e))) || [];
        message.payments = ((_l = object.payments) === null || _l === void 0 ? void 0 : _l.map((e) => payment_1.Payment.fromPartial(e))) || [];
        message.address = (object.address !== undefined && object.address !== null)
            ? address_1.Address.fromPartial(object.address)
            : undefined;
        message.createdAt = (_m = object.createdAt) !== null && _m !== void 0 ? _m : undefined;
        message.updatedAt = (_o = object.updatedAt) !== null && _o !== void 0 ? _o : undefined;
        return message;
    },
};
function createBaseUser_Email() {
    return { value: "", verified: undefined };
}
exports.User_Email = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.value !== "") {
            writer.uint32(10).string(message.value);
        }
        if (message.verified !== undefined) {
            writer.uint32(18).string(message.verified);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUser_Email();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.value = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.verified = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            value: isSet(object.value) ? globalThis.String(object.value) : "",
            verified: isSet(object.verified) ? globalThis.String(object.verified) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.value !== "") {
            obj.value = message.value;
        }
        if (message.verified !== undefined) {
            obj.verified = message.verified;
        }
        return obj;
    },
    create(base) {
        return exports.User_Email.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUser_Email();
        message.value = (_a = object.value) !== null && _a !== void 0 ? _a : "";
        message.verified = (_b = object.verified) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseCreateUserReq() {
    return { user: undefined };
}
exports.CreateUserReq = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.user !== undefined) {
            exports.User.encode(message.user, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateUserReq();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.user = exports.User.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { user: isSet(object.user) ? exports.User.fromJSON(object.user) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.user !== undefined) {
            obj.user = exports.User.toJSON(message.user);
        }
        return obj;
    },
    create(base) {
        return exports.CreateUserReq.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCreateUserReq();
        message.user = (object.user !== undefined && object.user !== null) ? exports.User.fromPartial(object.user) : undefined;
        return message;
    },
};
function createBaseCreateUserRes() {
    return { user: undefined };
}
exports.CreateUserRes = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.user !== undefined) {
            exports.User.encode(message.user, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateUserRes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.user = exports.User.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { user: isSet(object.user) ? exports.User.fromJSON(object.user) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.user !== undefined) {
            obj.user = exports.User.toJSON(message.user);
        }
        return obj;
    },
    create(base) {
        return exports.CreateUserRes.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCreateUserRes();
        message.user = (object.user !== undefined && object.user !== null) ? exports.User.fromPartial(object.user) : undefined;
        return message;
    },
};
function createBaseGetUserIdReq() {
    return { userId: 0 };
}
exports.GetUserIdReq = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== 0) {
            writer.uint32(8).int32(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetUserIdReq();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.userId = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { userId: isSet(object.userId) ? globalThis.Number(object.userId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== 0) {
            obj.userId = Math.round(message.userId);
        }
        return obj;
    },
    create(base) {
        return exports.GetUserIdReq.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetUserIdReq();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseGetUserIdRes() {
    return { user: undefined, error: undefined };
}
exports.GetUserIdRes = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.user !== undefined) {
            exports.User.encode(message.user, writer.uint32(10).fork()).ldelim();
        }
        if (message.error !== undefined) {
            error_1.Error.encode(message.error, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetUserIdRes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.user = exports.User.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.error = error_1.Error.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            user: isSet(object.user) ? exports.User.fromJSON(object.user) : undefined,
            error: isSet(object.error) ? error_1.Error.fromJSON(object.error) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.user !== undefined) {
            obj.user = exports.User.toJSON(message.user);
        }
        if (message.error !== undefined) {
            obj.error = error_1.Error.toJSON(message.error);
        }
        return obj;
    },
    create(base) {
        return exports.GetUserIdRes.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetUserIdRes();
        message.user = (object.user !== undefined && object.user !== null) ? exports.User.fromPartial(object.user) : undefined;
        message.error = (object.error !== undefined && object.error !== null) ? error_1.Error.fromPartial(object.error) : undefined;
        return message;
    },
};
function createBaseGetAllUserReq() {
    return { type: undefined };
}
exports.GetAllUserReq = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== undefined) {
            writer.uint32(10).string(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAllUserReq();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { type: isSet(object.type) ? globalThis.String(object.type) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.type !== undefined) {
            obj.type = message.type;
        }
        return obj;
    },
    create(base) {
        return exports.GetAllUserReq.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetAllUserReq();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseGetAllUserRes() {
    return { users: [], error: undefined };
}
exports.GetAllUserRes = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.users) {
            exports.User.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.error !== undefined) {
            error_1.Error.encode(message.error, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAllUserRes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.users.push(exports.User.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.error = error_1.Error.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            users: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.users) ? object.users.map((e) => exports.User.fromJSON(e)) : [],
            error: isSet(object.error) ? error_1.Error.fromJSON(object.error) : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.users) === null || _a === void 0 ? void 0 : _a.length) {
            obj.users = message.users.map((e) => exports.User.toJSON(e));
        }
        if (message.error !== undefined) {
            obj.error = error_1.Error.toJSON(message.error);
        }
        return obj;
    },
    create(base) {
        return exports.GetAllUserRes.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetAllUserRes();
        message.users = ((_a = object.users) === null || _a === void 0 ? void 0 : _a.map((e) => exports.User.fromPartial(e))) || [];
        message.error = (object.error !== undefined && object.error !== null) ? error_1.Error.fromPartial(object.error) : undefined;
        return message;
    },
};
exports.UserServiceService = {
    create: {
        path: "/UserService/create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateUserReq.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateUserReq.decode(value),
        responseSerialize: (value) => Buffer.from(exports.CreateUserRes.encode(value).finish()),
        responseDeserialize: (value) => exports.CreateUserRes.decode(value),
    },
    id: {
        path: "/UserService/id",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetUserIdReq.encode(value).finish()),
        requestDeserialize: (value) => exports.GetUserIdReq.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetUserIdRes.encode(value).finish()),
        responseDeserialize: (value) => exports.GetUserIdRes.decode(value),
    },
    all: {
        path: "/UserService/all",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetAllUserReq.encode(value).finish()),
        requestDeserialize: (value) => exports.GetAllUserReq.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetAllUserRes.encode(value).finish()),
        responseDeserialize: (value) => exports.GetAllUserRes.decode(value),
    },
};
exports.UserServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.UserServiceService, "UserService");
function toTimestamp(date) {
    const seconds = Math.trunc(date.getTime() / 1000);
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (t.seconds || 0) * 1000;
    millis += (t.nanos || 0) / 1000000;
    return new globalThis.Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof globalThis.Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new globalThis.Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
