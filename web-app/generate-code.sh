protoc \
--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
--js_out=import_style=commonjs,binary:my-generated-code \
--ts_out=service=grpc-web:my-generated-code \
-I ../service/src/main/proto \
../service/src/main/proto/*.proto
