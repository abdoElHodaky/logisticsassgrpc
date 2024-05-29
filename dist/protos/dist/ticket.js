"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.174.0
//   protoc               v3.14.0
// source: ticket.proto
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketServiceClient = exports.TicketServiceService = exports.GetAllTicketRes = exports.GetAllTicketReq = exports.CreateTicketRes = exports.CreateTicketReq = exports.Ticket = exports.createBaseTicket = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const error_1 = require("./error");
const timestamp_1 = require("./google/protobuf/timestamp");
exports.protobufPackage = "";
function createBaseTicket() {
    return { id: 0, type: "", subject: "", description: "", userId: 0, createdAt: undefined, updatedAt: undefined };
}
exports.createBaseTicket = createBaseTicket;
exports.Ticket = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).int32(message.id);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        if (message.subject !== "") {
            writer.uint32(26).string(message.subject);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        if (message.userId !== 0) {
            writer.uint32(40).int32(message.userId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTicket();
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
                    message.subject = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.userId = reader.int32();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
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
            type: isSet(object.type) ? globalThis.String(object.type) : "",
            subject: isSet(object.subject) ? globalThis.String(object.subject) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            userId: isSet(object.userId) ? globalThis.Number(object.userId) : 0,
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== 0) {
            obj.id = Math.round(message.id);
        }
        if (message.type !== "") {
            obj.type = message.type;
        }
        if (message.subject !== "") {
            obj.subject = message.subject;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.userId !== 0) {
            obj.userId = Math.round(message.userId);
        }
        if (message.createdAt !== undefined) {
            obj.createdAt = message.createdAt.toLocaleString("en-EG");
        }
        if (message.updatedAt !== undefined) {
            obj.updatedAt = message.updatedAt.toLocaleString("en-EG");
        }
        return obj;
    },
    create(base) {
        return exports.Ticket.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseTicket();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : "";
        message.subject = (_c = object.subject) !== null && _c !== void 0 ? _c : "";
        message.description = (_d = object.description) !== null && _d !== void 0 ? _d : "";
        message.userId = (_e = object.userId) !== null && _e !== void 0 ? _e : 0;
        message.createdAt = (_f = object.createdAt) !== null && _f !== void 0 ? _f : undefined;
        message.updatedAt = (_g = object.updatedAt) !== null && _g !== void 0 ? _g : undefined;
        return message;
    },
};
function createBaseCreateTicketReq() {
    return { userId: "", ticket: undefined };
}
exports.CreateTicketReq = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.ticket !== undefined) {
            exports.Ticket.encode(message.ticket, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateTicketReq();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.ticket = exports.Ticket.decode(reader, reader.uint32());
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
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            ticket: isSet(object.ticket) ? exports.Ticket.fromJSON(object.ticket) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.ticket !== undefined) {
            obj.ticket = exports.Ticket.toJSON(message.ticket);
        }
        return obj;
    },
    create(base) {
        return exports.CreateTicketReq.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCreateTicketReq();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.ticket = (object.ticket !== undefined && object.ticket !== null)
            ? exports.Ticket.fromPartial(object.ticket)
            : undefined;
        return message;
    },
};
function createBaseCreateTicketRes() {
    return { ticket: undefined };
}
exports.CreateTicketRes = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ticket !== undefined) {
            exports.Ticket.encode(message.ticket, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateTicketRes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ticket = exports.Ticket.decode(reader, reader.uint32());
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
        return { ticket: isSet(object.ticket) ? exports.Ticket.fromJSON(object.ticket) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.ticket !== undefined) {
            obj.ticket = exports.Ticket.toJSON(message.ticket);
        }
        return obj;
    },
    create(base) {
        return exports.CreateTicketRes.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCreateTicketRes();
        message.ticket = (object.ticket !== undefined && object.ticket !== null)
            ? exports.Ticket.fromPartial(object.ticket)
            : undefined;
        return message;
    },
};
function createBaseGetAllTicketReq() {
    return { userId: "" };
}
exports.GetAllTicketReq = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAllTicketReq();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
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
        return { userId: isSet(object.userId) ? globalThis.String(object.userId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.GetAllTicketReq.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetAllTicketReq();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetAllTicketRes() {
    return { tickets: [], error: undefined };
}
exports.GetAllTicketRes = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.tickets) {
            exports.Ticket.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.error !== undefined) {
            error_1.Error.encode(message.error, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAllTicketRes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.tickets.push(exports.Ticket.decode(reader, reader.uint32()));
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
            tickets: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.tickets) ? object.tickets.map((e) => exports.Ticket.fromJSON(e)) : [],
            error: isSet(object.error) ? error_1.Error.fromJSON(object.error) : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.tickets) === null || _a === void 0 ? void 0 : _a.length) {
            obj.tickets = message.tickets.map((e) => exports.Ticket.toJSON(e));
        }
        if (message.error !== undefined) {
            obj.error = error_1.Error.toJSON(message.error);
        }
        return obj;
    },
    create(base) {
        return exports.GetAllTicketRes.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetAllTicketRes();
        message.tickets = ((_a = object.tickets) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Ticket.fromPartial(e))) || [];
        message.error = (object.error !== undefined && object.error !== null) ? error_1.Error.fromPartial(object.error) : undefined;
        return message;
    },
};
exports.TicketServiceService = {
    create: {
        path: "/TicketService/create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateTicketReq.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateTicketReq.decode(value),
        responseSerialize: (value) => Buffer.from(exports.CreateTicketRes.encode(value).finish()),
        responseDeserialize: (value) => exports.CreateTicketRes.decode(value),
    },
    all: {
        path: "/TicketService/all",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetAllTicketReq.encode(value).finish()),
        requestDeserialize: (value) => exports.GetAllTicketReq.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetAllTicketRes.encode(value).finish()),
        responseDeserialize: (value) => exports.GetAllTicketRes.decode(value),
    },
};
exports.TicketServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.TicketServiceService, "TicketService");
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
