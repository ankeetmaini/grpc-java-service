// package: 
// file: service.proto

import * as service_pb from "./service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DemoServiceSum = {
  readonly methodName: string;
  readonly service: typeof DemoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.SumRequest;
  readonly responseType: typeof service_pb.SumResponse;
};

type DemoServiceChat = {
  readonly methodName: string;
  readonly service: typeof DemoService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof service_pb.ChatRequest;
  readonly responseType: typeof service_pb.ChatResponse;
};

export class DemoService {
  static readonly serviceName: string;
  static readonly Sum: DemoServiceSum;
  static readonly Chat: DemoServiceChat;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class DemoServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  sum(
    requestMessage: service_pb.SumRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: service_pb.SumResponse|null) => void
  ): UnaryResponse;
  sum(
    requestMessage: service_pb.SumRequest,
    callback: (error: ServiceError|null, responseMessage: service_pb.SumResponse|null) => void
  ): UnaryResponse;
  chat(metadata?: grpc.Metadata): BidirectionalStream<service_pb.ChatRequest, service_pb.ChatResponse>;
}

