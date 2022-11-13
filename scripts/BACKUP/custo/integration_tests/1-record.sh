#!/usr/bin/env bash
electrad tx meter record $(date '+%s') 1 1000 0 230 50 958 12  --from alice -y  | grep "raw_log:"
electrad tx meter record $(date '+%s') 1 1450 0 230 50 963 16  --from bob -y  | grep "raw_log:"
electrad query meter list-meterreadings
# - deviceID: cosmos16n5tnkck6rcg7gxmalc057daputvac5p7lheyx
#maxmi: 16
#mhertz: "230"
#mpf: "958"
#mvolt: "50"
#phase: "1"
#timestamp: "1663739131"
#whin: "1000"
#whout: "0"
# - deviceID: cosmos16n5tnkck6rcg7gxmalc057daputvac5p7lheyx
#maxmi: 16
#mhertz: "230"
#mpf: "958"
#mvolt: "50"
#phase: "1"
#timestamp: "1663739147"
#whin: "1000"
#whout: "0"
#pagination:
#next_key: null
#total: "0"