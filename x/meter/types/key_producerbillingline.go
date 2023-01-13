package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ProducerbillinglineKeyPrefix is the prefix to retrieve all Producerbillingline
	ProducerbillinglineKeyPrefix = "Producerbillingline/value/"
)

// ProducerbillinglineKey returns the store key to retrieve a Producerbillingline from the index fields
func ProducerbillinglineKey(
	producerDeviceID string,
	cycleID uint64,
	lineid uint64,
	paid bool,
) []byte {
	var key []byte

	producerDeviceIDBytes := []byte(producerDeviceID)
	key = append(key, producerDeviceIDBytes...)
	key = append(key, []byte("/")...)

	cycleIDBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(cycleIDBytes, cycleID)
	key = append(key, cycleIDBytes...)
	key = append(key, []byte("/")...)

	lineidBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(lineidBytes, lineid)
	key = append(key, lineidBytes...)
	key = append(key, []byte("/")...)

	paidBytes := []byte{0}
	if paid {
		paidBytes = []byte{1}
	}
	key = append(key, paidBytes...)
	key = append(key, []byte("/")...)

	return key
}
