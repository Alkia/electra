package keeper

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Tools for logging and debugging purposes
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import (
	"fmt"
	"log"
	"os"
	"reflect"
	"time"
	//"math"
	//"encoding/json"
	// "errors"
)

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Address to Name Resolution from the directory or the hardcoded for test
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
func resolvName(address string) string {
	var resolv string = ""
	switch address {
	case "Test1-bob-2b26b794-e281-415d-916e-faa4e5af11e6":
		resolv = "agrement test1 => bob"
	case "cosmos1krkk5xtp8s7lk9xf2az70txle50zfzgazqnnua":
		resolv = "bob"
	case "cosmos12lhecv88myvrmgv92syj782dxjfsnjjgdjvgha":
		resolv = "test 1 (producer)"
	case "cosmos16n5tnkck6rcg7gxmalc057daputvac5p7lheyx":
		resolv = "alice"
	case "test3-test2-3336b794-e281-415d-916e-faa4e5af1133":
		resolv = "agrement test3 => test2"
	case "cosmos12r6lx69zfef6ht3fk7drm9f5222qk4urx0u9hp":
		resolv = "test 2"
	case "cosmos19mhfyxz7532gumtyw5zrq00qv23mqtc4ajxde8":
		resolv = "test 3 (producer)"
	default:
		resolv = address // Return the original address by default if it's not found
	}
	return resolv
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Reflction
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
func show(m reflect.Value) {
	t := m.Type()
	if t.Kind() != reflect.Map {
		panic("not a map")
	}
	kt := t.Key()
	et := t.Elem()
	fmt.Printf("m = map from %s to %s\n", kt, et)
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Log function
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
func writelog(line string) {
	// If the file doesn't exist, create it or append to the file
	file, err := os.OpenFile("billing.log", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0666)
	defer file.Close()
	if err != nil {
		log.Fatal(err)
	}
	Hostname, err := os.Hostname()
	var header string
	log.SetOutput(file)
	header = "=== Start Logging === " + Hostname + " | " + time.Now().String()
	if len(line) == 0 {
		log.Println(header)
	} else {
		log.Println(line)
	}
	//fmt.Println(header)
}

/*
	// Throw error
	stErr := "No remaining WH in any active contract"
	fmt.Println("======================================================")
	fmt.Println(stErr)
	fmt.Println("======================================================")
	err = errors.New(stErr)
	log.Println(err)
*/
