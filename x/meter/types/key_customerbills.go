package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// CustomerbillsKeyPrefix is the prefix to retrieve all Customerbills
	CustomerbillsKeyPrefix = "Customerbills/value/"
)

// CustomerbillsKey returns the store key to retrieve a Customerbills from the index fields
func CustomerbillsKey(
	billCycleID uint64,
	customerDeviceID string,
) []byte {
	var key []byte

	billCycleIDBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(billCycleIDBytes, billCycleID)
	key = append(key, billCycleIDBytes...)
	key = append(key, []byte("/")...)

	customerDeviceIDBytes := []byte(customerDeviceID)
	key = append(key, customerDeviceIDBytes...)
	key = append(key, []byte("/")...)

	return key
}
