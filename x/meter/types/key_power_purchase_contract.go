package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// PowerPurchaseContractKeyPrefix is the prefix to retrieve all PowerPurchaseContract
	PowerPurchaseContractKeyPrefix = "PowerPurchaseContract/value/"
)

// PowerPurchaseContractKey returns the store key to retrieve a PowerPurchaseContract from the index fields
func PowerPurchaseContractKey(
	contractID string,
	contractDeviceID string,
) []byte {
	var key []byte

	contractIDBytes := []byte(contractID)
	key = append(key, contractIDBytes...)
	key = append(key, []byte("/")...)

	contractDeviceIDBytes := []byte(contractDeviceID)
	key = append(key, contractDeviceIDBytes...)
	key = append(key, []byte("/")...)

	return key
}
