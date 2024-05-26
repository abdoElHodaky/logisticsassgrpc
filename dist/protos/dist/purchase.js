"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.174.0
//   protoc               v3.14.0
// source: purchase.proto
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurshaseServiceClient = exports.PurshaseServiceService = exports.CreatePurshaseRes = exports.CreatePurshaseReq = exports.GetAllPurshaseRes = exports.GetAllPurshaseReq = exports.Purshase = exports.PurshasedItem = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const any_1 = require("./google/protobuf/any");
const timestamp_1 = require("./google/protobuf/timestamp");
exports.protobufPackage = "";
function createBasePurshasedItem() {
    return { id: 0, props: undefined };
}
exports.PurshasedItem = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).int32(message.id);
        }
        if (message.props !== undefined) {
            any_1.Any.encode(message.props, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePurshasedItem();
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
                    message.props = any_1.Any.decode(reader, reader.uint32());
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
            props: isSet(object.props) ? any_1.Any.fromJSON(object.props) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== 0) {
            obj.id = Math.round(message.id);
        }
        if (message.props !== undefined) {
            obj.props = any_1.Any.toJSON(message.props);
        }
        return obj;
    },
    create(base) {
        return exports.PurshasedItem.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBasePurshasedItem();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.props = (object.props !== undefined && object.props !== null) ? any_1.Any.fromPartial(object.props) : undefined;
        return message;
    },
};
function createBasePurshase() {
    return { id: 0, items: [], userId: undefined, paymentId: undefined, createdAt: undefined, updatedAt: undefined };
}
exports.Purshase = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).int32(message.id);
        }
        for (const v of message.items) {
            exports.PurshasedItem.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.userId !== undefined) {
            writer.uint32(24).int32(message.userId);
        }
        if (message.paymentId !== undefined) {
            writer.uint32(32).int32(message.paymentId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePurshase();
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
                    message.items.push(exports.PurshasedItem.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.userId = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.paymentId = reader.int32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
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
            items: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.items) ? object.items.map((e) => exports.PurshasedItem.fromJSON(e)) : [],
            userId: isSet(object.userId) ? globalThis.Number(object.userId) : undefined,
            paymentId: isSet(object.paymentId) ? globalThis.Number(object.paymentId) : undefined,
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.id !== 0) {
            obj.id = Math.round(message.id);
        }
        if ((_a = message.items) === null || _a === void 0 ? void 0 : _a.length) {
            obj.items = message.items.map((e) => exports.PurshasedItem.toJSON(e));
        }
        if (message.userId !== undefined) {
            obj.userId = Math.round(message.userId);
        }
        if (message.paymentId !== undefined) {
            obj.paymentId = Math.round(message.paymentId);
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
        return exports.Purshase.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBasePurshase();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.items = ((_b = object.items) === null || _b === void 0 ? void 0 : _b.map((e) => exports.PurshasedItem.fromPartial(e))) || [];
        message.userId = (_c = object.userId) !== null && _c !== void 0 ? _c : undefined;
        message.paymentId = (_d = object.paymentId) !== null && _d !== void 0 ? _d : undefined;
        message.createdAt = (_e = object.createdAt) !== null && _e !== void 0 ? _e : undefined;
        message.updatedAt = (_f = object.updatedAt) !== null && _f !== void 0 ? _f : undefined;
        return message;
    },
};
function createBaseGetAllPurshaseReq() {
    return { userId: 0 };
}
exports.GetAllPurshaseReq = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== 0) {
            writer.uint32(8).int32(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAllPurshaseReq();
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
        return exports.GetAllPurshaseReq.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetAllPurshaseReq();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseGetAllPurshaseRes() {
    return { userId: 0, purchases: [] };
}
exports.GetAllPurshaseRes = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== 0) {
            writer.uint32(8).int32(message.userId);
        }
        for (const v of message.purchases) {
            exports.Purshase.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAllPurshaseRes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.userId = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.purchases.push(exports.Purshase.decode(reader, reader.uint32()));
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
            userId: isSet(object.userId) ? globalThis.Number(object.userId) : 0,
            purchases: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.purchases)
                ? object.purchases.map((e) => exports.Purshase.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.userId !== 0) {
            obj.userId = Math.round(message.userId);
        }
        if ((_a = message.purchases) === null || _a === void 0 ? void 0 : _a.length) {
            obj.purchases = message.purchases.map((e) => exports.Purshase.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GetAllPurshaseRes.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetAllPurshaseRes();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : 0;
        message.purchases = ((_b = object.purchases) === null || _b === void 0 ? void 0 : _b.map((e) => exports.Purshase.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCreatePurshaseReq() {
    return { purchase: undefined };
}
exports.CreatePurshaseReq = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.purchase !== undefined) {
            exports.Purshase.encode(message.purchase, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreatePurshaseReq();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.purchase = exports.Purshase.decode(reader, reader.uint32());
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
        return { purchase: isSet(object.purchase) ? exports.Purshase.fromJSON(object.purchase) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.purchase !== undefined) {
            obj.purchase = exports.Purshase.toJSON(message.purchase);
        }
        return obj;
    },
    create(base) {
        return exports.CreatePurshaseReq.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCreatePurshaseReq();
        message.purchase = (object.purchase !== undefined && object.purchase !== null)
            ? exports.Purshase.fromPartial(object.purchase)
            : undefined;
        return message;
    },
};
function createBaseCreatePurshaseRes() {
    return { purchase: undefined };
}
exports.CreatePurshaseRes = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.purchase !== undefined) {
            exports.Purshase.encode(message.purchase, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreatePurshaseRes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.purchase = exports.Purshase.decode(reader, reader.uint32());
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
        return { purchase: isSet(object.purchase) ? exports.Purshase.fromJSON(object.purchase) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.purchase !== undefined) {
            obj.purchase = exports.Purshase.toJSON(message.purchase);
        }
        return obj;
    },
    create(base) {
        return exports.CreatePurshaseRes.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCreatePurshaseRes();
        message.purchase = (object.purchase !== undefined && object.purchase !== null)
            ? exports.Purshase.fromPartial(object.purchase)
            : undefined;
        return message;
    },
};
exports.PurshaseServiceService = {
    all: {
        path: "/PurshaseService/all",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetAllPurshaseReq.encode(value).finish()),
        requestDeserialize: (value) => exports.GetAllPurshaseReq.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetAllPurshaseRes.encode(value).finish()),
        responseDeserialize: (value) => exports.GetAllPurshaseRes.decode(value),
    },
    create: {
        path: "/PurshaseService/create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreatePurshaseReq.encode(value).finish()),
        requestDeserialize: (value) => exports.CreatePurshaseReq.decode(value),
        responseSerialize: (value) => Buffer.from(exports.CreatePurshaseRes.encode(value).finish()),
        responseDeserialize: (value) => exports.CreatePurshaseRes.decode(value),
    },
};
exports.PurshaseServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.PurshaseServiceService, "PurshaseService");
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
