package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// MeterreadingsKeyPrefix is the prefix to retrieve all Meterreadings
	MeterreadingsKeyPrefix = "Meterreadings/value/"
)

// MeterreadingsKey returns the store key to retrieve a Meterreadings from the index fields
func MeterreadingsKey(
	deviceID string,
	timestamp uint64,
) []byte {
	var key []byte

	deviceIDBytes := []byte(deviceID)
	key = append(key, deviceIDBytes...)
	key = append(key, []byte("/")...)

	timestampBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(timestampBytes, timestamp)
	key = append(key, timestampBytes...)
	key = append(key, []byte("/")...)

	return key
}
