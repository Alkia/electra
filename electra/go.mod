module electra

go 1.21

replace (
	// fix upstream GHSA-h395-qcrw-5vmq vulnerability.
	github.com/gin-gonic/gin => github.com/gin-gonic/gin v1.7.0
	// replace broken goleveldb
	github.com/syndtr/goleveldb => github.com/syndtr/goleveldb v1.0.1-0.20210819022825-2ae1ddf74ef7
)

require (
	cosmossdk.io/api v0.7.5
	cosmossdk.io/client/v2 v2.0.0-beta.5
	cosmossdk.io/core v0.11.1
	cosmossdk.io/depinject v1.0.0
	cosmossdk.io/errors v1.0.1
	cosmossdk.io/log v1.4.1
	cosmossdk.io/math v1.3.0
	cosmossdk.io/store v1.1.1
	cosmossdk.io/tools/confix v0.1.2
	cosmossdk.io/x/circuit v0.1.1
	cosmossdk.io/x/evidence v0.1.1
	cosmossdk.io/x/feegrant v0.1.1
	cosmossdk.io/x/nft v0.1.0
	cosmossdk.io/x/upgrade v0.1.4
	
	github.com/bufbuild/buf v1.34.0
	github.com/cometbft/cometbft v0.38.12
	github.com/cosmos/cosmos-db v1.0.2
	github.com/cosmos/cosmos-proto v1.0.0-beta.5
	github.com/cosmos/cosmos-sdk v0.50.10
	github.com/cosmos/gogoproto v1.7.0
	github.com/cosmos/ibc-go/modules/capability v1.0.1
	github.com/cosmos/ibc-go/v8 v8.5.1
	github.com/golang/protobuf v1.5.4
	github.com/gorilla/mux v1.8.1
	github.com/grpc-ecosystem/grpc-gateway v1.16.0
	github.com/grpc-ecosystem/grpc-gateway/v2 v2.20.0
	github.com/spf13/cast v1.6.0
	github.com/spf13/cobra v1.8.1
	github.com/spf13/pflag v1.0.5
	github.com/spf13/viper v1.19.0
	github.com/stretchr/testify v1.9.0
	golang.org/x/tools v0.22.0
	google.golang.org/genproto/googleapis/api v0.0.0-20240624140628-dc46fd24d27d
	google.golang.org/grpc v1.64.1
	google.golang.org/grpc/cmd/protoc-gen-go-grpc v1.3.0
	google.golang.org/protobuf v1.34.2
)