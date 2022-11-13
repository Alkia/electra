#!/usr/bin/env bash
electrad tx meter record $(date '+%s') 1 1000 0 230000 50000 958 12  --from alice -y  | grep "raw_log:"
electrad tx meter record $(date '+%s') 1 1450 0 230000 50000 963 16  --from bob -y  | grep "raw_log:"
electrad tx meter record $(date '+%s') 1 1050 0 230000 50000 963 16  --from test2 -y  | grep "raw_log:"
electrad tx meter record $(date '+%s') 1 0 5000 230000 50000 938 50  --from test3 -y  | grep "raw_log:"
electrad tx meter record $(date '+%s') 1 1100 0 230000 50000 927 16  --from alice -y  | grep "raw_log:"
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