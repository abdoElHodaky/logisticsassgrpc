/* eslint-disable */
import {
  type CallOptions,
  ChannelCredentials,
  Client,
  type ClientOptions,
  type ClientUnaryCall,
  type handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  type ServiceError,
  type UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Error } from "./error";
import { Timestamp } from "./google/protobuf/timestamp";

export const protobufPackage = "";

export interface Ticket {
  id: number;
  type: string;
  subject: string;
  description: string;
  userId: number;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
}

export interface CreateTicketReq {
  userId: string;
  ticket: Ticket | undefined;
}

export interface CreateTicketRes {
  ticket: Ticket | undefined;
}

export interface GetAllTicketReq {
  /** Ticket ticket=2; */
  userId: string;
}

export interface GetAllTicketRes {
  tickets: Ticket[];
  error?: Error | undefined;
}

function createBaseTicket(): Ticket {
  return { id: 0, type: "", subject: "", description: "", userId: 0, createdAt: undefined, updatedAt: undefined };
}

export const Ticket = {
  encode(message: Ticket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Ticket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Ticket {
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

  toJSON(message: Ticket): unknown {
    const obj: any = {};
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
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Ticket>, I>>(base?: I): Ticket {
    return Ticket.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Ticket>, I>>(object: I): Ticket {
    const message = createBaseTicket();
    message.id = object.id ?? 0;
    message.type = object.type ?? "";
    message.subject = object.subject ?? "";
    message.description = object.description ?? "";
    message.userId = object.userId ?? 0;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
};

function createBaseCreateTicketReq(): CreateTicketReq {
  return { userId: "", ticket: undefined };
}

export const CreateTicketReq = {
  encode(message: CreateTicketReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.ticket !== undefined) {
      Ticket.encode(message.ticket, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTicketReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

          message.ticket = Ticket.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateTicketReq {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      ticket: isSet(object.ticket) ? Ticket.fromJSON(object.ticket) : undefined,
    };
  },

  toJSON(message: CreateTicketReq): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.ticket !== undefined) {
      obj.ticket = Ticket.toJSON(message.ticket);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateTicketReq>, I>>(base?: I): CreateTicketReq {
    return CreateTicketReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateTicketReq>, I>>(object: I): CreateTicketReq {
    const message = createBaseCreateTicketReq();
    message.userId = object.userId ?? "";
    message.ticket = (object.ticket !== undefined && object.ticket !== null)
      ? Ticket.fromPartial(object.ticket)
      : undefined;
    return message;
  },
};

function createBaseCreateTicketRes(): CreateTicketRes {
  return { ticket: undefined };
}

export const CreateTicketRes = {
  encode(message: CreateTicketRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ticket !== undefined) {
      Ticket.encode(message.ticket, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTicketRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTicketRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ticket = Ticket.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateTicketRes {
    return { ticket: isSet(object.ticket) ? Ticket.fromJSON(object.ticket) : undefined };
  },

  toJSON(message: CreateTicketRes): unknown {
    const obj: any = {};
    if (message.ticket !== undefined) {
      obj.ticket = Ticket.toJSON(message.ticket);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateTicketRes>, I>>(base?: I): CreateTicketRes {
    return CreateTicketRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateTicketRes>, I>>(object: I): CreateTicketRes {
    const message = createBaseCreateTicketRes();
    message.ticket = (object.ticket !== undefined && object.ticket !== null)
      ? Ticket.fromPartial(object.ticket)
      : undefined;
    return message;
  },
};

function createBaseGetAllTicketReq(): GetAllTicketReq {
  return { userId: "" };
}

export const GetAllTicketReq = {
  encode(message: GetAllTicketReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllTicketReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(object: any): GetAllTicketReq {
    return { userId: isSet(object.userId) ? globalThis.String(object.userId) : "" };
  },

  toJSON(message: GetAllTicketReq): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllTicketReq>, I>>(base?: I): GetAllTicketReq {
    return GetAllTicketReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAllTicketReq>, I>>(object: I): GetAllTicketReq {
    const message = createBaseGetAllTicketReq();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseGetAllTicketRes(): GetAllTicketRes {
  return { tickets: [], error: undefined };
}

export const GetAllTicketRes = {
  encode(message: GetAllTicketRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tickets) {
      Ticket.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllTicketRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllTicketRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tickets.push(Ticket.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error = Error.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAllTicketRes {
    return {
      tickets: globalThis.Array.isArray(object?.tickets) ? object.tickets.map((e: any) => Ticket.fromJSON(e)) : [],
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GetAllTicketRes): unknown {
    const obj: any = {};
    if (message.tickets?.length) {
      obj.tickets = message.tickets.map((e) => Ticket.toJSON(e));
    }
    if (message.error !== undefined) {
      obj.error = Error.toJSON(message.error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllTicketRes>, I>>(base?: I): GetAllTicketRes {
    return GetAllTicketRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAllTicketRes>, I>>(object: I): GetAllTicketRes {
    const message = createBaseGetAllTicketRes();
    message.tickets = object.tickets?.map((e) => Ticket.fromPartial(e)) || [];
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    return message;
  },
};

export type TicketServiceService = typeof TicketServiceService;
export const TicketServiceService = {
  create: {
    path: "/TicketService/create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateTicketReq) => Buffer.from(CreateTicketReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateTicketReq.decode(value),
    responseSerialize: (value: CreateTicketRes) => Buffer.from(CreateTicketRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateTicketRes.decode(value),
  },
  all: {
    path: "/TicketService/all",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetAllTicketReq) => Buffer.from(GetAllTicketReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetAllTicketReq.decode(value),
    responseSerialize: (value: GetAllTicketRes) => Buffer.from(GetAllTicketRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetAllTicketRes.decode(value),
  },
} as const;

export interface TicketServiceServer extends UntypedServiceImplementation {
  create: handleUnaryCall<CreateTicketReq, CreateTicketRes>;
  all: handleUnaryCall<GetAllTicketReq, GetAllTicketRes>;
}

export interface TicketServiceClient extends Client {
  create(
    request: CreateTicketReq,
    callback: (error: ServiceError | null, response: CreateTicketRes) => void,
  ): ClientUnaryCall;
  create(
    request: CreateTicketReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateTicketRes) => void,
  ): ClientUnaryCall;
  create(
    request: CreateTicketReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateTicketRes) => void,
  ): ClientUnaryCall;
  all(
    request: GetAllTicketReq,
    callback: (error: ServiceError | null, response: GetAllTicketRes) => void,
  ): ClientUnaryCall;
  all(
    request: GetAllTicketReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetAllTicketRes) => void,
  ): ClientUnaryCall;
  all(
    request: GetAllTicketReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetAllTicketRes) => void,
  ): ClientUnaryCall;
}

export const TicketServiceClient = makeGenericClientConstructor(TicketServiceService, "TicketService") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): TicketServiceClient;
  service: typeof TicketServiceService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
