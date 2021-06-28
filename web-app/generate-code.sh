protoc \
--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
--js_out=import_style=commonjs,binary:src/generated \
--ts_out=service=grpc-web:src/generated \
-I ../service/src/main/proto \
../service/src/main/proto/*.proto
