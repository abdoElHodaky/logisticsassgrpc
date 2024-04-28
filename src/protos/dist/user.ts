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
import { Address } from "./address";
import { Article } from "./article";
import { Error } from "./error";
import { Timestamp } from "./google/protobuf/timestamp";
import { Ticket } from "./ticket";

export const protobufPackage = "";

export interface User {
  id: number;
  type?: string | undefined;
  username?: string | undefined;
  firstname: string;
  lastname: string;
  email: User_Email | undefined;
  passwordHash?: string | undefined;
  articles: Article[];
  tickets: Ticket[];
  address: Address | undefined;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
}

export interface User_Email {
  value: string;
  verified?: string | undefined;
}

export interface CreateUserReq {
  user: User | undefined;
}

export interface CreateUserRes {
  user: User | undefined;
}

export interface GetUserIdReq {
  userId: number;
}

export interface GetUserIdRes {
  user: User | undefined;
  error?: Error | undefined;
}

export interface GetAllUserReq {
  type?: string | undefined;
}

export interface GetAllUserRes {
  users: string[];
  error?: Error | undefined;
}

function createBaseUser(): User {
  return {
    id: 0,
    type: undefined,
    username: undefined,
    firstname: "",
    lastname: "",
    email: undefined,
    passwordHash: undefined,
    articles: [],
    tickets: [],
    address: undefined,
    createdAt: undefined,
    updatedAt: undefined,
  };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.email !== undefined) {
      User_Email.encode(message.email, writer.uint32(50).fork()).ldelim();
    }
    if (message.passwordHash !== undefined) {
      writer.uint32(58).string(message.passwordHash);
    }
    for (const v of message.articles) {
      Article.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.tickets) {
      Ticket.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(82).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(90).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
          if (tag !== 50) {
            break;
          }

          message.email = User_Email.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.passwordHash = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.articles.push(Article.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.tickets.push(Ticket.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.address = Address.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 98) {
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

  fromJSON(object: any): User {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      type: isSet(object.type) ? globalThis.String(object.type) : undefined,
      username: isSet(object.username) ? globalThis.String(object.username) : undefined,
      firstname: isSet(object.firstname) ? globalThis.String(object.firstname) : "",
      lastname: isSet(object.lastname) ? globalThis.String(object.lastname) : "",
      email: isSet(object.email) ? User_Email.fromJSON(object.email) : undefined,
      passwordHash: isSet(object.passwordHash) ? globalThis.String(object.passwordHash) : undefined,
      articles: globalThis.Array.isArray(object?.articles) ? object.articles.map((e: any) => Article.fromJSON(e)) : [],
      tickets: globalThis.Array.isArray(object?.tickets) ? object.tickets.map((e: any) => Ticket.fromJSON(e)) : [],
      address: isSet(object.address) ? Address.fromJSON(object.address) : undefined,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
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
    if (message.email !== undefined) {
      obj.email = User_Email.toJSON(message.email);
    }
    if (message.passwordHash !== undefined) {
      obj.passwordHash = message.passwordHash;
    }
    if (message.articles?.length) {
      obj.articles = message.articles.map((e) => Article.toJSON(e));
    }
    if (message.tickets?.length) {
      obj.tickets = message.tickets.map((e) => Ticket.toJSON(e));
    }
    if (message.address !== undefined) {
      obj.address = Address.toJSON(message.address);
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<User>, I>>(base?: I): User {
    return User.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.id = object.id ?? 0;
    message.type = object.type ?? undefined;
    message.username = object.username ?? undefined;
    message.firstname = object.firstname ?? "";
    message.lastname = object.lastname ?? "";
    message.email = (object.email !== undefined && object.email !== null)
      ? User_Email.fromPartial(object.email)
      : undefined;
    message.passwordHash = object.passwordHash ?? undefined;
    message.articles = object.articles?.map((e) => Article.fromPartial(e)) || [];
    message.tickets = object.tickets?.map((e) => Ticket.fromPartial(e)) || [];
    message.address = (object.address !== undefined && object.address !== null)
      ? Address.fromPartial(object.address)
      : undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
};

function createBaseUser_Email(): User_Email {
  return { value: "", verified: undefined };
}

export const User_Email = {
  encode(message: User_Email, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    if (message.verified !== undefined) {
      writer.uint32(18).string(message.verified);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User_Email {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(object: any): User_Email {
    return {
      value: isSet(object.value) ? globalThis.String(object.value) : "",
      verified: isSet(object.verified) ? globalThis.String(object.verified) : undefined,
    };
  },

  toJSON(message: User_Email): unknown {
    const obj: any = {};
    if (message.value !== "") {
      obj.value = message.value;
    }
    if (message.verified !== undefined) {
      obj.verified = message.verified;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<User_Email>, I>>(base?: I): User_Email {
    return User_Email.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<User_Email>, I>>(object: I): User_Email {
    const message = createBaseUser_Email();
    message.value = object.value ?? "";
    message.verified = object.verified ?? undefined;
    return message;
  },
};

function createBaseCreateUserReq(): CreateUserReq {
  return { user: undefined };
}

export const CreateUserReq = {
  encode(message: CreateUserReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUserReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = User.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateUserReq {
    return { user: isSet(object.user) ? User.fromJSON(object.user) : undefined };
  },

  toJSON(message: CreateUserReq): unknown {
    const obj: any = {};
    if (message.user !== undefined) {
      obj.user = User.toJSON(message.user);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateUserReq>, I>>(base?: I): CreateUserReq {
    return CreateUserReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateUserReq>, I>>(object: I): CreateUserReq {
    const message = createBaseCreateUserReq();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseCreateUserRes(): CreateUserRes {
  return { user: undefined };
}

export const CreateUserRes = {
  encode(message: CreateUserRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUserRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = User.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateUserRes {
    return { user: isSet(object.user) ? User.fromJSON(object.user) : undefined };
  },

  toJSON(message: CreateUserRes): unknown {
    const obj: any = {};
    if (message.user !== undefined) {
      obj.user = User.toJSON(message.user);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateUserRes>, I>>(base?: I): CreateUserRes {
    return CreateUserRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateUserRes>, I>>(object: I): CreateUserRes {
    const message = createBaseCreateUserRes();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseGetUserIdReq(): GetUserIdReq {
  return { userId: 0 };
}

export const GetUserIdReq = {
  encode(message: GetUserIdReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).int32(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserIdReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(object: any): GetUserIdReq {
    return { userId: isSet(object.userId) ? globalThis.Number(object.userId) : 0 };
  },

  toJSON(message: GetUserIdReq): unknown {
    const obj: any = {};
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUserIdReq>, I>>(base?: I): GetUserIdReq {
    return GetUserIdReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUserIdReq>, I>>(object: I): GetUserIdReq {
    const message = createBaseGetUserIdReq();
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseGetUserIdRes(): GetUserIdRes {
  return { user: undefined, error: undefined };
}

export const GetUserIdRes = {
  encode(message: GetUserIdRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserIdRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserIdRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = User.decode(reader, reader.uint32());
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

  fromJSON(object: any): GetUserIdRes {
    return {
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GetUserIdRes): unknown {
    const obj: any = {};
    if (message.user !== undefined) {
      obj.user = User.toJSON(message.user);
    }
    if (message.error !== undefined) {
      obj.error = Error.toJSON(message.error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUserIdRes>, I>>(base?: I): GetUserIdRes {
    return GetUserIdRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUserIdRes>, I>>(object: I): GetUserIdRes {
    const message = createBaseGetUserIdRes();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    return message;
  },
};

function createBaseGetAllUserReq(): GetAllUserReq {
  return { type: undefined };
}

export const GetAllUserReq = {
  encode(message: GetAllUserReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== undefined) {
      writer.uint32(10).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllUserReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(object: any): GetAllUserReq {
    return { type: isSet(object.type) ? globalThis.String(object.type) : undefined };
  },

  toJSON(message: GetAllUserReq): unknown {
    const obj: any = {};
    if (message.type !== undefined) {
      obj.type = message.type;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllUserReq>, I>>(base?: I): GetAllUserReq {
    return GetAllUserReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAllUserReq>, I>>(object: I): GetAllUserReq {
    const message = createBaseGetAllUserReq();
    message.type = object.type ?? undefined;
    return message;
  },
};

function createBaseGetAllUserRes(): GetAllUserRes {
  return { users: [], error: undefined };
}

export const GetAllUserRes = {
  encode(message: GetAllUserRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      writer.uint32(10).string(v!);
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllUserRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllUserRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.users.push(reader.string());
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

  fromJSON(object: any): GetAllUserRes {
    return {
      users: globalThis.Array.isArray(object?.users) ? object.users.map((e: any) => globalThis.String(e)) : [],
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GetAllUserRes): unknown {
    const obj: any = {};
    if (message.users?.length) {
      obj.users = message.users;
    }
    if (message.error !== undefined) {
      obj.error = Error.toJSON(message.error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllUserRes>, I>>(base?: I): GetAllUserRes {
    return GetAllUserRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAllUserRes>, I>>(object: I): GetAllUserRes {
    const message = createBaseGetAllUserRes();
    message.users = object.users?.map((e) => e) || [];
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    return message;
  },
};

export type UserServiceService = typeof UserServiceService;
export const UserServiceService = {
  create: {
    path: "/UserService/create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateUserReq) => Buffer.from(CreateUserReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateUserReq.decode(value),
    responseSerialize: (value: CreateUserRes) => Buffer.from(CreateUserRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateUserRes.decode(value),
  },
  id: {
    path: "/UserService/id",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetUserIdReq) => Buffer.from(GetUserIdReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetUserIdReq.decode(value),
    responseSerialize: (value: GetUserIdRes) => Buffer.from(GetUserIdRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetUserIdRes.decode(value),
  },
  all: {
    path: "/UserService/all",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetAllUserReq) => Buffer.from(GetAllUserReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetAllUserReq.decode(value),
    responseSerialize: (value: GetAllUserRes) => Buffer.from(GetAllUserRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetAllUserRes.decode(value),
  },
} as const;

export interface UserServiceServer extends UntypedServiceImplementation {
  create: handleUnaryCall<CreateUserReq, CreateUserRes>;
  id: handleUnaryCall<GetUserIdReq, GetUserIdRes>;
  all: handleUnaryCall<GetAllUserReq, GetAllUserRes>;
}

export interface UserServiceClient extends Client {
  create(
    request: CreateUserReq,
    callback: (error: ServiceError | null, response: CreateUserRes) => void,
  ): ClientUnaryCall;
  create(
    request: CreateUserReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateUserRes) => void,
  ): ClientUnaryCall;
  create(
    request: CreateUserReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateUserRes) => void,
  ): ClientUnaryCall;
  id(request: GetUserIdReq, callback: (error: ServiceError | null, response: GetUserIdRes) => void): ClientUnaryCall;
  id(
    request: GetUserIdReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetUserIdRes) => void,
  ): ClientUnaryCall;
  id(
    request: GetUserIdReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetUserIdRes) => void,
  ): ClientUnaryCall;
  all(request: GetAllUserReq, callback: (error: ServiceError | null, response: GetAllUserRes) => void): ClientUnaryCall;
  all(
    request: GetAllUserReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetAllUserRes) => void,
  ): ClientUnaryCall;
  all(
    request: GetAllUserReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetAllUserRes) => void,
  ): ClientUnaryCall;
}

export const UserServiceClient = makeGenericClientConstructor(UserServiceService, "UserService") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): UserServiceClient;
  service: typeof UserServiceService;
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
