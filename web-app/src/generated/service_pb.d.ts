import * as jspb from 'google-protobuf'



export class SumRequest extends jspb.Message {
  getNum1(): number;
  setNum1(value: number): SumRequest;

  getNum2(): number;
  setNum2(value: number): SumRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SumRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SumRequest): SumRequest.AsObject;
  static serializeBinaryToWriter(message: SumRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SumRequest;
  static deserializeBinaryFromReader(message: SumRequest, reader: jspb.BinaryReader): SumRequest;
}

export namespace SumRequest {
  export type AsObject = {
    num1: number,
    num2: number,
  }
}

export class SumResponse extends jspb.Message {
  getSum(): number;
  setSum(value: number): SumResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SumResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SumResponse): SumResponse.AsObject;
  static serializeBinaryToWriter(message: SumResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SumResponse;
  static deserializeBinaryFromReader(message: SumResponse, reader: jspb.BinaryReader): SumResponse;
}

export namespace SumResponse {
  export type AsObject = {
    sum: number,
  }
}

export class ChatRequest extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): ChatRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChatRequest): ChatRequest.AsObject;
  static serializeBinaryToWriter(message: ChatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatRequest;
  static deserializeBinaryFromReader(message: ChatRequest, reader: jspb.BinaryReader): ChatRequest;
}

export namespace ChatRequest {
  export type AsObject = {
    message: string,
  }
}

export class ChatResponse extends jspb.Message {
  getReply(): string;
  setReply(value: string): ChatResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChatResponse): ChatResponse.AsObject;
  static serializeBinaryToWriter(message: ChatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatResponse;
  static deserializeBinaryFromReader(message: ChatResponse, reader: jspb.BinaryReader): ChatResponse;
}

export namespace ChatResponse {
  export type AsObject = {
    reply: string,
  }
}

