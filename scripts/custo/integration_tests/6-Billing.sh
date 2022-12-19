#!/usr/bin/env bash
electrad query meter currentcycle-id
#### Prepare Bill ######################################################
rm ~/electra/billing.log
electrad query meter currentcycle-id
electrad tx meter prepare-bill 78 false --from bob -y
more ~/electra/billing.log

electrad query meter list-customerbills
# Result = customerbills:
#- billCurrency: uelectra
#  billCycleID: "77"
#  billTotalPrice: "6690"
#  billTotalWh: "1000"
#  billValid: true
#  creator: electra1krkk5xtp8s7lk9xf2az70txle50zfzga7dah87
#  customerDeviceID: electra12lhecv88myvrmgv92syj782dxjfsnjjg3lzvv7
#  paid: false
 
#### Prepare Bill & Write in the blockchain ############################
rm ~/electra/billing.log
electrad query meter currentcycle-id
electrad tx meter prepare-bill 78 true --from alice -y
more ~/electra/billing.log

electrad query meter list-customerbills

# Result =
# customerbills:
# - billCurrency: uelectra
#   billCycleID: "77"
#   billDate: "1666772570"
#   billTotalPrice: "6690"
#   billTotalWh: "1000"
#   billValid: true
#   creator: electra1krkk5xtp8s7lk9xf2az70txle50zfzga7dah87
#   customerDeviceID: electra12lhecv88myvrmgv92syj782dxjfsnjjg3lzvv7
#   paid: false
# - billCurrency: uelectra
#   billCycleID: "78"
#   billDate: "1666772865"
#   billTotalPrice: "135000000"
#   billTotalWh: "20000"
#   billValid: false
#   creator: ""
#   customerDeviceID: electra12lhecv88myvrmgv92syj782dxjfsnjjg3lzvv7
#   paid: false
# pagination:
#   next_key: null
#   total: "0"