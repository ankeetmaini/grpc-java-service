/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as service_pb from './service_pb';


export class DemoServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoSum = new grpcWeb.AbstractClientBase.MethodInfo(
    service_pb.SumResponse,
    (request: service_pb.SumRequest) => {
      return request.serializeBinary();
    },
    service_pb.SumResponse.deserializeBinary
  );

  sum(
    request: service_pb.SumRequest,
    metadata: grpcWeb.Metadata | null): Promise<service_pb.SumResponse>;

  sum(
    request: service_pb.SumRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: service_pb.SumResponse) => void): grpcWeb.ClientReadableStream<service_pb.SumResponse>;

  sum(
    request: service_pb.SumRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: service_pb.SumResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/DemoService/Sum',
        request,
        metadata || {},
        this.methodInfoSum,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/DemoService/Sum',
    request,
    metadata || {},
    this.methodInfoSum);
  }

}

