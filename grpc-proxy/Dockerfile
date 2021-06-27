FROM debian:stretch-slim

WORKDIR /proxy

COPY grpcwebproxy-v0.14.0-linux-x86_64 ./proxy-binary

CMD ["./proxy-binary", "--backend_addr=grpc-java-service:3000", "--run_tls_server=false", "--allow_all_origins"]
