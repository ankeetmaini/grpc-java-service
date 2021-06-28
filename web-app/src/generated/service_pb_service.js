// package: 
// file: service.proto

var service_pb = require("./service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DemoService = (function () {
  function DemoService() {}
  DemoService.serviceName = "DemoService";
  return DemoService;
}());

DemoService.Sum = {
  methodName: "Sum",
  service: DemoService,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.SumRequest,
  responseType: service_pb.SumResponse
};

DemoService.Chat = {
  methodName: "Chat",
  service: DemoService,
  requestStream: true,
  responseStream: true,
  requestType: service_pb.ChatRequest,
  responseType: service_pb.ChatResponse
};

exports.DemoService = DemoService;

function DemoServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DemoServiceClient.prototype.sum = function sum(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DemoService.Sum, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DemoServiceClient.prototype.chat = function chat(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(DemoService.Chat, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.DemoServiceClient = DemoServiceClient;

