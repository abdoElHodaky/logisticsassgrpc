"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServiceClient = exports.AuthServiceService = exports.RegisterUserRes = exports.RegisterUserReq = exports.LoginUserRes = exports.LoginUserReq = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const error_1 = require("./error");
const user_1 = require("./user");
exports.protobufPackage = "";
function createBaseLoginUserReq() {
    return { username: "", passwordHash: "" };
}
exports.LoginUserReq = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.username !== "") {
            writer.uint32(10).string(message.username);
        }
        if (message.passwordHash !== "") {
            writer.uint32(18).string(message.passwordHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLoginUserReq();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.username = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.passwordHash = reader.string();
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
            username: isSet(object.username) ? globalThis.String(object.username) : "",
            passwordHash: isSet(object.passwordHash) ? globalThis.String(object.passwordHash) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.username !== "") {
            obj.username = message.username;
        }
        if (message.passwordHash !== "") {
            obj.passwordHash = message.passwordHash;
        }
        return obj;
    },
    create(base) {
        return exports.LoginUserReq.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseLoginUserReq();
        message.username = (_a = object.username) !== null && _a !== void 0 ? _a : "";
        message.passwordHash = (_b = object.passwordHash) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseLoginUserRes() {
    return { user: undefined, error: undefined };
}
exports.LoginUserRes = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.user !== undefined) {
            user_1.User.encode(message.user, writer.uint32(10).fork()).ldelim();
        }
        if (message.error !== undefined) {
            error_1.Error.encode(message.error, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLoginUserRes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.user = user_1.User.decode(reader, reader.uint32());
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
            user: isSet(object.user) ? user_1.User.fromJSON(object.user) : undefined,
            error: isSet(object.error) ? error_1.Error.fromJSON(object.error) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.user !== undefined) {
            obj.user = user_1.User.toJSON(message.user);
        }
        if (message.error !== undefined) {
            obj.error = error_1.Error.toJSON(message.error);
        }
        return obj;
    },
    create(base) {
        return exports.LoginUserRes.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseLoginUserRes();
        message.user = (object.user !== undefined && object.user !== null) ? user_1.User.fromPartial(object.user) : undefined;
        message.error = (object.error !== undefined && object.error !== null) ? error_1.Error.fromPartial(object.error) : undefined;
        return message;
    },
};
function createBaseRegisterUserReq() {
    return { user: undefined };
}
exports.RegisterUserReq = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.user !== undefined) {
            user_1.User.encode(message.user, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterUserReq();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.user = user_1.User.decode(reader, reader.uint32());
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
        return { user: isSet(object.user) ? user_1.User.fromJSON(object.user) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.user !== undefined) {
            obj.user = user_1.User.toJSON(message.user);
        }
        return obj;
    },
    create(base) {
        return exports.RegisterUserReq.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseRegisterUserReq();
        message.user = (object.user !== undefined && object.user !== null) ? user_1.User.fromPartial(object.user) : undefined;
        return message;
    },
};
function createBaseRegisterUserRes() {
    return { user: undefined, error: undefined };
}
exports.RegisterUserRes = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.user !== undefined) {
            user_1.User.encode(message.user, writer.uint32(10).fork()).ldelim();
        }
        if (message.error !== undefined) {
            error_1.Error.encode(message.error, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterUserRes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.user = user_1.User.decode(reader, reader.uint32());
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
            user: isSet(object.user) ? user_1.User.fromJSON(object.user) : undefined,
            error: isSet(object.error) ? error_1.Error.fromJSON(object.error) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.user !== undefined) {
            obj.user = user_1.User.toJSON(message.user);
        }
        if (message.error !== undefined) {
            obj.error = error_1.Error.toJSON(message.error);
        }
        return obj;
    },
    create(base) {
        return exports.RegisterUserRes.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseRegisterUserRes();
        message.user = (object.user !== undefined && object.user !== null) ? user_1.User.fromPartial(object.user) : undefined;
        message.error = (object.error !== undefined && object.error !== null) ? error_1.Error.fromPartial(object.error) : undefined;
        return message;
    },
};
exports.AuthServiceService = {
    login: {
        path: "/AuthService/login",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.LoginUserReq.encode(value).finish()),
        requestDeserialize: (value) => exports.LoginUserReq.decode(value),
        responseSerialize: (value) => Buffer.from(exports.LoginUserRes.encode(value).finish()),
        responseDeserialize: (value) => exports.LoginUserRes.decode(value),
    },
    register: {
        path: "/AuthService/register",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RegisterUserReq.encode(value).finish()),
        requestDeserialize: (value) => exports.RegisterUserReq.decode(value),
        responseSerialize: (value) => Buffer.from(exports.RegisterUserRes.encode(value).finish()),
        responseDeserialize: (value) => exports.RegisterUserRes.decode(value),
    },
};
exports.AuthServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.AuthServiceService, "AuthService");
function isSet(value) {
    return value !== null && value !== undefined;
}
