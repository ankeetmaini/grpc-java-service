protoc \
  --js_out=import_style=commonjs,binary:./src/generated \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:./src/generated \
  -I=../service/src/main/proto \
  ../service/src/main/proto/*.proto