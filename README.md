# Twirp Typescript example

A simple example of calling a [Twirp](https://github.com/twitchtv/twirp) service in Typescript using a client generated with [protobufjs](https://github.com/dcodeIO/ProtoBuf.js/).

## Usage

Go server

```bash
brew install protobuf
go get -u github.com/golang/protobuf/protoc-gen-go
go get -u github.com/twitchtv/twirp/protoc-gen-twirp

cd server
# Regenerate Go code if necessary
protoc --proto_path=$GOPATH/src:. --twirp_out=. --go_out=. ./haberdasher/haberdasher.proto
# Run the server at :8080
go run *.go
```

Typescript client

```bash
cd client
yarn install
yarn generate   # *.proto -> *.js and *.ts
yarn start      # Run the typescript client
```

## Limitations

- Metadata about the service not available at the protobufjs RPC layer - have to pass it in manually (would require changes to protobufjs)
- protobufjs supports binary format only, and not the canonical JSON format
