package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// MeterdirectoryKeyPrefix is the prefix to retrieve all Meterdirectory
	MeterdirectoryKeyPrefix = "Meterdirectory/value/"
)

// MeterdirectoryKey returns the store key to retrieve a Meterdirectory from the index fields
func MeterdirectoryKey(
	deviceID string,
	barcodeserial string,
) []byte {
	var key []byte

	deviceIDBytes := []byte(deviceID)
	key = append(key, deviceIDBytes...)
	key = append(key, []byte("/")...)

	barcodeserialBytes := []byte(barcodeserial)
	key = append(key, barcodeserialBytes...)
	key = append(key, []byte("/")...)

	return key
}
