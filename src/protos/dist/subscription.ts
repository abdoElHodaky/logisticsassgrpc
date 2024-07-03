// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.176.1
//   protoc               v3.19.6
// source: subscription.proto

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

export interface Subscription {
  id: number;
  productsIds: number[];
  userId: number;
  createdAt?: Date | undefined;
  renewalAt?: Date | undefined;
  updatedAt?: Date | undefined;
}

export interface RenewedSubscription {
  id: number;
  subscriptionId: number;
  paymentId: number;
  nextRenwalAt?: Date | undefined;
}

export interface GetAllSupscriptionReq {
  userId?: number | undefined;
  productId?: number | undefined;
}

export interface RenewSupscriptionReq {
  subscriptionId: number;
}

export interface RenewSupscriptionRes {
  subscription: RenewedSubscription | undefined;
}

export interface GetAllSupscriptionRes {
  subscriptions: Subscription[];
  error?: Error | undefined;
}

function createBaseSubscription(): Subscription {
  return { id: 0, productsIds: [], userId: 0, createdAt: undefined, renewalAt: undefined, updatedAt: undefined };
}

export const Subscription = {
  encode(message: Subscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    writer.uint32(18).fork();
    for (const v of message.productsIds) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.userId !== 0) {
      writer.uint32(24).int32(message.userId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
    }
    if (message.renewalAt !== undefined) {
      Timestamp.encode(toTimestamp(message.renewalAt), writer.uint32(42).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Subscription {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscription();
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
          if (tag === 16) {
            message.productsIds.push(reader.int32());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.productsIds.push(reader.int32());
            }

            continue;
          }

          break;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.userId = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.renewalAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
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

  fromJSON(object: any): Subscription {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      productsIds: globalThis.Array.isArray(object?.productsIds)
        ? object.productsIds.map((e: any) => globalThis.Number(e))
        : [],
      userId: isSet(object.userId) ? globalThis.Number(object.userId) : 0,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      renewalAt: isSet(object.renewalAt) ? fromJsonTimestamp(object.renewalAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
    };
  },

  toJSON(message: Subscription): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.productsIds?.length) {
      obj.productsIds = message.productsIds.map((e) => Math.round(e));
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.renewalAt !== undefined) {
      obj.renewalAt = message.renewalAt.toISOString();
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Subscription>, I>>(base?: I): Subscription {
    return Subscription.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Subscription>, I>>(object: I): Subscription {
    const message = createBaseSubscription();
    message.id = object.id ?? 0;
    message.productsIds = object.productsIds?.map((e) => e) || [];
    message.userId = object.userId ?? 0;
    message.createdAt = object.createdAt ?? undefined;
    message.renewalAt = object.renewalAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
};

function createBaseRenewedSubscription(): RenewedSubscription {
  return { id: 0, subscriptionId: 0, paymentId: 0, nextRenwalAt: undefined };
}

export const RenewedSubscription = {
  encode(message: RenewedSubscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.subscriptionId !== 0) {
      writer.uint32(16).int32(message.subscriptionId);
    }
    if (message.paymentId !== 0) {
      writer.uint32(24).int32(message.paymentId);
    }
    if (message.nextRenwalAt !== undefined) {
      Timestamp.encode(toTimestamp(message.nextRenwalAt), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RenewedSubscription {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRenewedSubscription();
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
          if (tag !== 16) {
            break;
          }

          message.subscriptionId = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.paymentId = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nextRenwalAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RenewedSubscription {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      subscriptionId: isSet(object.subscriptionId) ? globalThis.Number(object.subscriptionId) : 0,
      paymentId: isSet(object.paymentId) ? globalThis.Number(object.paymentId) : 0,
      nextRenwalAt: isSet(object.nextRenwalAt) ? fromJsonTimestamp(object.nextRenwalAt) : undefined,
    };
  },

  toJSON(message: RenewedSubscription): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.subscriptionId !== 0) {
      obj.subscriptionId = Math.round(message.subscriptionId);
    }
    if (message.paymentId !== 0) {
      obj.paymentId = Math.round(message.paymentId);
    }
    if (message.nextRenwalAt !== undefined) {
      obj.nextRenwalAt = message.nextRenwalAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RenewedSubscription>, I>>(base?: I): RenewedSubscription {
    return RenewedSubscription.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RenewedSubscription>, I>>(object: I): RenewedSubscription {
    const message = createBaseRenewedSubscription();
    message.id = object.id ?? 0;
    message.subscriptionId = object.subscriptionId ?? 0;
    message.paymentId = object.paymentId ?? 0;
    message.nextRenwalAt = object.nextRenwalAt ?? undefined;
    return message;
  },
};

function createBaseGetAllSupscriptionReq(): GetAllSupscriptionReq {
  return { userId: undefined, productId: undefined };
}

export const GetAllSupscriptionReq = {
  encode(message: GetAllSupscriptionReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== undefined) {
      writer.uint32(8).int32(message.userId);
    }
    if (message.productId !== undefined) {
      writer.uint32(16).int32(message.productId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllSupscriptionReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllSupscriptionReq();
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
          if (tag !== 16) {
            break;
          }

          message.productId = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAllSupscriptionReq {
    return {
      userId: isSet(object.userId) ? globalThis.Number(object.userId) : undefined,
      productId: isSet(object.productId) ? globalThis.Number(object.productId) : undefined,
    };
  },

  toJSON(message: GetAllSupscriptionReq): unknown {
    const obj: any = {};
    if (message.userId !== undefined) {
      obj.userId = Math.round(message.userId);
    }
    if (message.productId !== undefined) {
      obj.productId = Math.round(message.productId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllSupscriptionReq>, I>>(base?: I): GetAllSupscriptionReq {
    return GetAllSupscriptionReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAllSupscriptionReq>, I>>(object: I): GetAllSupscriptionReq {
    const message = createBaseGetAllSupscriptionReq();
    message.userId = object.userId ?? undefined;
    message.productId = object.productId ?? undefined;
    return message;
  },
};

function createBaseRenewSupscriptionReq(): RenewSupscriptionReq {
  return { subscriptionId: 0 };
}

export const RenewSupscriptionReq = {
  encode(message: RenewSupscriptionReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscriptionId !== 0) {
      writer.uint32(8).int32(message.subscriptionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RenewSupscriptionReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRenewSupscriptionReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.subscriptionId = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RenewSupscriptionReq {
    return { subscriptionId: isSet(object.subscriptionId) ? globalThis.Number(object.subscriptionId) : 0 };
  },

  toJSON(message: RenewSupscriptionReq): unknown {
    const obj: any = {};
    if (message.subscriptionId !== 0) {
      obj.subscriptionId = Math.round(message.subscriptionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RenewSupscriptionReq>, I>>(base?: I): RenewSupscriptionReq {
    return RenewSupscriptionReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RenewSupscriptionReq>, I>>(object: I): RenewSupscriptionReq {
    const message = createBaseRenewSupscriptionReq();
    message.subscriptionId = object.subscriptionId ?? 0;
    return message;
  },
};

function createBaseRenewSupscriptionRes(): RenewSupscriptionRes {
  return { subscription: undefined };
}

export const RenewSupscriptionRes = {
  encode(message: RenewSupscriptionRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscription !== undefined) {
      RenewedSubscription.encode(message.subscription, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RenewSupscriptionRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRenewSupscriptionRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subscription = RenewedSubscription.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RenewSupscriptionRes {
    return { subscription: isSet(object.subscription) ? RenewedSubscription.fromJSON(object.subscription) : undefined };
  },

  toJSON(message: RenewSupscriptionRes): unknown {
    const obj: any = {};
    if (message.subscription !== undefined) {
      obj.subscription = RenewedSubscription.toJSON(message.subscription);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RenewSupscriptionRes>, I>>(base?: I): RenewSupscriptionRes {
    return RenewSupscriptionRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RenewSupscriptionRes>, I>>(object: I): RenewSupscriptionRes {
    const message = createBaseRenewSupscriptionRes();
    message.subscription = (object.subscription !== undefined && object.subscription !== null)
      ? RenewedSubscription.fromPartial(object.subscription)
      : undefined;
    return message;
  },
};

function createBaseGetAllSupscriptionRes(): GetAllSupscriptionRes {
  return { subscriptions: [], error: undefined };
}

export const GetAllSupscriptionRes = {
  encode(message: GetAllSupscriptionRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.subscriptions) {
      Subscription.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllSupscriptionRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllSupscriptionRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subscriptions.push(Subscription.decode(reader, reader.uint32()));
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

  fromJSON(object: any): GetAllSupscriptionRes {
    return {
      subscriptions: globalThis.Array.isArray(object?.subscriptions)
        ? object.subscriptions.map((e: any) => Subscription.fromJSON(e))
        : [],
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GetAllSupscriptionRes): unknown {
    const obj: any = {};
    if (message.subscriptions?.length) {
      obj.subscriptions = message.subscriptions.map((e) => Subscription.toJSON(e));
    }
    if (message.error !== undefined) {
      obj.error = Error.toJSON(message.error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllSupscriptionRes>, I>>(base?: I): GetAllSupscriptionRes {
    return GetAllSupscriptionRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAllSupscriptionRes>, I>>(object: I): GetAllSupscriptionRes {
    const message = createBaseGetAllSupscriptionRes();
    message.subscriptions = object.subscriptions?.map((e) => Subscription.fromPartial(e)) || [];
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    return message;
  },
};

export type SubscriptionServiceService = typeof SubscriptionServiceService;
export const SubscriptionServiceService = {
  renew: {
    path: "/SubscriptionService/renew",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RenewSupscriptionReq) => Buffer.from(RenewSupscriptionReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RenewSupscriptionReq.decode(value),
    responseSerialize: (value: RenewSupscriptionRes) => Buffer.from(RenewSupscriptionRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => RenewSupscriptionRes.decode(value),
  },
  all: {
    path: "/SubscriptionService/all",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetAllSupscriptionReq) => Buffer.from(GetAllSupscriptionReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetAllSupscriptionReq.decode(value),
    responseSerialize: (value: GetAllSupscriptionRes) => Buffer.from(GetAllSupscriptionRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetAllSupscriptionRes.decode(value),
  },
} as const;

export interface SubscriptionServiceServer extends UntypedServiceImplementation {
  renew: handleUnaryCall<RenewSupscriptionReq, RenewSupscriptionRes>;
  all: handleUnaryCall<GetAllSupscriptionReq, GetAllSupscriptionRes>;
}

export interface SubscriptionServiceClient extends Client {
  renew(
    request: RenewSupscriptionReq,
    callback: (error: ServiceError | null, response: RenewSupscriptionRes) => void,
  ): ClientUnaryCall;
  renew(
    request: RenewSupscriptionReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: RenewSupscriptionRes) => void,
  ): ClientUnaryCall;
  renew(
    request: RenewSupscriptionReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: RenewSupscriptionRes) => void,
  ): ClientUnaryCall;
  all(
    request: GetAllSupscriptionReq,
    callback: (error: ServiceError | null, response: GetAllSupscriptionRes) => void,
  ): ClientUnaryCall;
  all(
    request: GetAllSupscriptionReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetAllSupscriptionRes) => void,
  ): ClientUnaryCall;
  all(
    request: GetAllSupscriptionReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetAllSupscriptionRes) => void,
  ): ClientUnaryCall;
}

export const SubscriptionServiceClient = makeGenericClientConstructor(
  SubscriptionServiceService,
  "SubscriptionService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): SubscriptionServiceClient;
  service: typeof SubscriptionServiceService;
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
