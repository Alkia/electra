package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// BillingcyclesKeyPrefix is the prefix to retrieve all Billingcycles
	BillingcyclesKeyPrefix = "Billingcycles/value/"
)

// BillingcyclesKey returns the store key to retrieve a Billingcycles from the index fields
func BillingcyclesKey(
	cycleID uint64,
) []byte {
	var key []byte

	cycleIDBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(cycleIDBytes, cycleID)
	key = append(key, cycleIDBytes...)
	key = append(key, []byte("/")...)

	return key
}
