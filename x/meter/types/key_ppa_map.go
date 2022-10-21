package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// PpaMapKeyPrefix is the prefix to retrieve all PpaMap
	PpaMapKeyPrefix = "PpaMap/value/"
)

// PpaMapKey returns the store key to retrieve a PpaMap from the index fields
func PpaMapKey(
	consumerDeviceID string,
	agreementID string,
	agreementActive bool,
	contractID string,
) []byte {
	var key []byte

	consumerDeviceIDBytes := []byte(consumerDeviceID)
	key = append(key, consumerDeviceIDBytes...)
	key = append(key, []byte("/")...)

	agreementIDBytes := []byte(agreementID)
	key = append(key, agreementIDBytes...)
	key = append(key, []byte("/")...)

	agreementActiveBytes := []byte{0}
	if agreementActive {
		agreementActiveBytes = []byte{1}
	}
	key = append(key, agreementActiveBytes...)
	key = append(key, []byte("/")...)

	contractIDBytes := []byte(contractID)
	key = append(key, contractIDBytes...)
	key = append(key, []byte("/")...)

	return key
}
