package keeper
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Tools for logging and debugging purposes
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import (
	"log"
	"fmt"
	"time"
    "os"
	"reflect"
	//"math"
	//"encoding/json"
	// "errors"	
)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
func show(m reflect.Value) {
    t := m.Type()
    if t.Kind() != reflect.Map {
        panic("not a map")
    }
    kt := t.Key()
    et := t.Elem()
    fmt.Printf("m = map from %s to %s\n", kt, et)
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 func writelog(line string) {
 // If the file doesn't exist, create it or append to the file
 file, err := os.OpenFile("trace.log", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0666)
 defer file.Close() 
 if err != nil {
	 log.Fatal(err)
 }
 Hostname, err := os.Hostname()
 var header string
 log.SetOutput(file)
 header = "=== Start Logging === " + Hostname + " | " + time.Now().String() 
 if (len(line)==0) {
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