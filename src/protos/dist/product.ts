// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.176.1
//   protoc               v3.14.0
// source: product.proto

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
import { Attachment } from "./attachment";
import { Error } from "./error";
import { Any } from "./google/protobuf/any";
import { Timestamp } from "./google/protobuf/timestamp";

export const protobufPackage = "";

export interface Product {
  id: number;
  specs: Any | undefined;
  subs: Product[];
  parent?: Product | undefined;
  attachments: Attachment[];
  userId?: number | undefined;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
}

export interface CreateProductReq {
  userId: number;
  product: Product | undefined;
}

export interface CreateProductRes {
  userId?: number | undefined;
  product: Product | undefined;
}

export interface GetAllProductsReq {
  userId?: number | undefined;
}

export interface GetAllProductsRes {
  products: Product[];
  error?: Error | undefined;
}

export function createBaseProduct(): Product {
  return {
    id: 0,
    specs: undefined,
    subs: [],
    parent: undefined,
    attachments: [],
    userId: undefined,
    createdAt: undefined,
    updatedAt: undefined,
  };
}

export const Product = {
  encode(message: Product, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.specs !== undefined) {
      Any.encode(message.specs, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.subs) {
      Product.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.parent !== undefined) {
      Product.encode(message.parent, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.attachments) {
      Attachment.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.userId !== undefined) {
      writer.uint32(48).int32(message.userId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(58).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Product {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProduct();
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

          message.specs = Any.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subs.push(Product.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.parent = Product.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.attachments.push(Attachment.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.userId = reader.int32();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
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

  fromJSON(object: any): Product {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      specs: isSet(object.specs) ? Any.fromJSON(object.specs) : undefined,
      subs: globalThis.Array.isArray(object?.subs) ? object.subs.map((e: any) => Product.fromJSON(e)) : [],
      parent: isSet(object.parent) ? Product.fromJSON(object.parent) : undefined,
      attachments: globalThis.Array.isArray(object?.attachments)
        ? object.attachments.map((e: any) => Attachment.fromJSON(e))
        : [],
      userId: isSet(object.userId) ? globalThis.Number(object.userId) : undefined,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
    };
  },

  toJSON(message: Product): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.specs !== undefined) {
      obj.specs = Any.toJSON(message.specs);
    }
    if (message.subs?.length) {
      obj.subs = message.subs.map((e) => Product.toJSON(e));
    }
    if (message.parent !== undefined) {
      obj.parent = Product.toJSON(message.parent);
    }
    if (message.attachments?.length) {
      obj.attachments = message.attachments.map((e) => Attachment.toJSON(e));
    }
    if (message.userId !== undefined) {
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

  create<I extends Exact<DeepPartial<Product>, I>>(base?: I): Product {
    return Product.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Product>, I>>(object: I): Product {
    const message = createBaseProduct();
    message.id = object.id ?? 0;
    message.specs = (object.specs !== undefined && object.specs !== null) ? Any.fromPartial(object.specs) : undefined;
    message.subs = object.subs?.map((e) => Product.fromPartial(e)) || [];
    message.parent = (object.parent !== undefined && object.parent !== null)
      ? Product.fromPartial(object.parent)
      : undefined;
    message.attachments = object.attachments?.map((e) => Attachment.fromPartial(e)) || [];
    message.userId = object.userId ?? undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
};

function createBaseCreateProductReq(): CreateProductReq {
  return { userId: 0, product: undefined };
}

export const CreateProductReq = {
  encode(message: CreateProductReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).int32(message.userId);
    }
    if (message.product !== undefined) {
      Product.encode(message.product, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProductReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProductReq();
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

          message.product = Product.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateProductReq {
    return {
      userId: isSet(object.userId) ? globalThis.Number(object.userId) : 0,
      product: isSet(object.product) ? Product.fromJSON(object.product) : undefined,
    };
  },

  toJSON(message: CreateProductReq): unknown {
    const obj: any = {};
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.product !== undefined) {
      obj.product = Product.toJSON(message.product);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateProductReq>, I>>(base?: I): CreateProductReq {
    return CreateProductReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateProductReq>, I>>(object: I): CreateProductReq {
    const message = createBaseCreateProductReq();
    message.userId = object.userId ?? 0;
    message.product = (object.product !== undefined && object.product !== null)
      ? Product.fromPartial(object.product)
      : undefined;
    return message;
  },
};

function createBaseCreateProductRes(): CreateProductRes {
  return { userId: undefined, product: undefined };
}

export const CreateProductRes = {
  encode(message: CreateProductRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== undefined) {
      writer.uint32(8).int32(message.userId);
    }
    if (message.product !== undefined) {
      Product.encode(message.product, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProductRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProductRes();
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

          message.product = Product.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateProductRes {
    return {
      userId: isSet(object.userId) ? globalThis.Number(object.userId) : undefined,
      product: isSet(object.product) ? Product.fromJSON(object.product) : undefined,
    };
  },

  toJSON(message: CreateProductRes): unknown {
    const obj: any = {};
    if (message.userId !== undefined) {
      obj.userId = Math.round(message.userId);
    }
    if (message.product !== undefined) {
      obj.product = Product.toJSON(message.product);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateProductRes>, I>>(base?: I): CreateProductRes {
    return CreateProductRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateProductRes>, I>>(object: I): CreateProductRes {
    const message = createBaseCreateProductRes();
    message.userId = object.userId ?? undefined;
    message.product = (object.product !== undefined && object.product !== null)
      ? Product.fromPartial(object.product)
      : undefined;
    return message;
  },
};

function createBaseGetAllProductsReq(): GetAllProductsReq {
  return { userId: undefined };
}

export const GetAllProductsReq = {
  encode(message: GetAllProductsReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== undefined) {
      writer.uint32(8).int32(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllProductsReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllProductsReq();
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

  fromJSON(object: any): GetAllProductsReq {
    return { userId: isSet(object.userId) ? globalThis.Number(object.userId) : undefined };
  },

  toJSON(message: GetAllProductsReq): unknown {
    const obj: any = {};
    if (message.userId !== undefined) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllProductsReq>, I>>(base?: I): GetAllProductsReq {
    return GetAllProductsReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAllProductsReq>, I>>(object: I): GetAllProductsReq {
    const message = createBaseGetAllProductsReq();
    message.userId = object.userId ?? undefined;
    return message;
  },
};

function createBaseGetAllProductsRes(): GetAllProductsRes {
  return { products: [], error: undefined };
}

export const GetAllProductsRes = {
  encode(message: GetAllProductsRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.products) {
      Product.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllProductsRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllProductsRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.products.push(Product.decode(reader, reader.uint32()));
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

  fromJSON(object: any): GetAllProductsRes {
    return {
      products: globalThis.Array.isArray(object?.products) ? object.products.map((e: any) => Product.fromJSON(e)) : [],
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GetAllProductsRes): unknown {
    const obj: any = {};
    if (message.products?.length) {
      obj.products = message.products.map((e) => Product.toJSON(e));
    }
    if (message.error !== undefined) {
      obj.error = Error.toJSON(message.error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllProductsRes>, I>>(base?: I): GetAllProductsRes {
    return GetAllProductsRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAllProductsRes>, I>>(object: I): GetAllProductsRes {
    const message = createBaseGetAllProductsRes();
    message.products = object.products?.map((e) => Product.fromPartial(e)) || [];
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    return message;
  },
};

export type ProductServiceService = typeof ProductServiceService;
export const ProductServiceService = {
  create: {
    path: "/ProductService/create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateProductReq) => Buffer.from(CreateProductReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateProductReq.decode(value),
    responseSerialize: (value: CreateProductRes) => Buffer.from(CreateProductRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateProductRes.decode(value),
  },
  all: {
    path: "/ProductService/all",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetAllProductsReq) => Buffer.from(GetAllProductsReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetAllProductsReq.decode(value),
    responseSerialize: (value: GetAllProductsRes) => Buffer.from(GetAllProductsRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetAllProductsRes.decode(value),
  },
} as const;

export interface ProductServiceServer extends UntypedServiceImplementation {
  create: handleUnaryCall<CreateProductReq, CreateProductRes>;
  all: handleUnaryCall<GetAllProductsReq, GetAllProductsRes>;
}

export interface ProductServiceClient extends Client {
  create(
    request: CreateProductReq,
    callback: (error: ServiceError | null, response: CreateProductRes) => void,
  ): ClientUnaryCall;
  create(
    request: CreateProductReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateProductRes) => void,
  ): ClientUnaryCall;
  create(
    request: CreateProductReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateProductRes) => void,
  ): ClientUnaryCall;
  all(
    request: GetAllProductsReq,
    callback: (error: ServiceError | null, response: GetAllProductsRes) => void,
  ): ClientUnaryCall;
  all(
    request: GetAllProductsReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetAllProductsRes) => void,
  ): ClientUnaryCall;
  all(
    request: GetAllProductsReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetAllProductsRes) => void,
  ): ClientUnaryCall;
}

export const ProductServiceClient = makeGenericClientConstructor(
  ProductServiceService,
  "ProductService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ProductServiceClient;
  service: typeof ProductServiceService;
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
