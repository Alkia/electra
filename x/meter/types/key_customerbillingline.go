package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// CustomerbillinglineKeyPrefix is the prefix to retrieve all Customerbillingline
	CustomerbillinglineKeyPrefix = "Customerbillingline/value/"
)

// CustomerbillinglineKey returns the store key to retrieve a Customerbillingline from the index fields
func CustomerbillinglineKey(
	customerDeviceID string,
	cycleID uint64,
	lineid uint64,
) []byte {
	var key []byte

	customerDeviceIDBytes := []byte(customerDeviceID)
	key = append(key, customerDeviceIDBytes...)
	key = append(key, []byte("/")...)

	cycleIDBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(cycleIDBytes, cycleID)
	key = append(key, cycleIDBytes...)
	key = append(key, []byte("/")...)

	lineidBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(lineidBytes, lineid)
	key = append(key, lineidBytes...)
	key = append(key, []byte("/")...)

	return key
}
