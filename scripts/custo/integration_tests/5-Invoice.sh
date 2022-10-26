#!/usr/bin/env bash
# Created account "test1" with address "electra12lhecv88myvrmgv92syj782dxjfsnjjg3lzvv7" with mnemonic: "slogan wreck armor floor change female industry smart daughter spawn today system shop pigeon game olive always dish camp response can perfect salon stone"
# Created account "test2" with address "electra12r6lx69zfef6ht3fk7drm9f5222qk4ur6zjpvz" with mnemonic: "boil silk digital carry photo explain kitchen wall unusual garlic suspect leave accident discover banana catch margin reward gap asset raccoon anchor leisure ostrich"
# Created account "test3" with address "electra19mhfyxz7532gumtyw5zrq00qv23mqtc4plgfzy" with mnemonic: "bounce duty afraid make item occur curious mention stamp lava inspire shock wall hungry culture apart harsh icon burden glide cabbage deal during charge"
# Created account "alice" with address "electra16n5tnkck6rcg7gxmalc057daputvac5pzjeal9" with mnemonic: "satisfy dirt consider electric apart coin later recall enhance pizza dust way shop erosion innocent actor member double always budget rival congress person uncle"
# Created account "bob" with address "electra1krkk5xtp8s7lk9xf2az70txle50zfzga7dah87" with mnemonic: "address slogan history guitar fringe health coral dish exercise excite utility now thank mosquito soul vacuum doctor squeeze host never dinosaur afford tide tide"
# Created account "prod1" with address "electra16p7dd9wp76kmxckus64un7udt59kvprfd0tw8v" with mnemonic: "thing lamp dwarf pupil hundred harsh snack review chest pledge people normal pattern shoe cereal drill staff people finger type timber buddy grab rate"
# Created account "prod2" with address "electra1rf56um69dum7em0kx9xen794x8gm49vxstkjwy" with mnemonic: "invest theme among elbow weekend couple erode oyster stand enjoy series collect ripple fringe actual muscle idle vast heavy brass donkey minimum envelope capable"

#  contractDeviceID: electra16p7dd9wp76kmxckus64un7udt59kvprfd0tw8v
#  contractForAllPrice: "12000"
#  contractID: prod10000-1c4c-4963-872a-5c0175e612d2
#  contractName: contract-prod-1
#  contractPhase: "1"
#  contractPreferredPrice: "6800"

# contractDeviceID: electra1rf56um69dum7em0kx9xen794x8gm49vxstkjwy
# contractForAllPrice: "19000"
#  contractID: prod20000-2222-4963-872a-5c0175e612d2
#  contractName: contract-prod-2
#  contractPreferredPrice: "8822"

timestamp77=$(date +%s)
echo $timestamp77
cycle=77
echo $cycle
prod1="electra16p7dd9wp76kmxckus64un7udt59kvprfd0tw8v" 
prod2="electra1rf56um69dum7em0kx9xen794x8gm49vxstkjwy"
contractprod1="prod10000-1c4c-4963-872a-5c0175e612d2" 
contractprod2="prod20000-2222-4963-872a-5c0175e612d2"
test1="electra12lhecv88myvrmgv92syj782dxjfsnjjg3lzvv7" 
test2="electra12r6lx69zfef6ht3fk7drm9f5222qk4ur6zjpvz" 
test3="electra19mhfyxz7532gumtyw5zrq00qv23mqtc4plgfzy" 
# Cycle 77 | From timestamp0 to timestamp1
electrad tx meter record $(date '+%s') 1 2000 0 230000 50000 958 16  --from alice -y  | grep "raw_log:"
sleep 0.5
electrad tx meter record $(date '+%s') 1 2200 0 230000 50000 975 17  --from bob -y  | grep "raw_log:"
sleep 0.5
electrad tx meter record $(date '+%s') 1 0 22000 230000 50000 0 111  --from prod1 -y | grep "raw_log:"
sleep 0.5
electrad tx meter record $(date '+%s') 1 0 22000 230000 50000 0 22  --from prod2 -y | grep "raw_log:"
sleep 0.5
electrad tx meter record $(date '+%s') 1 1200 5000 230000 50000 0 16  --from test1 -y | grep "raw_log:"
sleep 0.5
electrad tx meter record $(date '+%s') 1 2200 0 230000 50000 0 16  --from test2 -y | grep "raw_log:"
sleep 0.5
electrad tx meter record $(date '+%s') 1 3200 7000 230000 50000 0 16  --from test3 -y | grep "raw_log:"
sleep 0.5
electrad tx meter record $(date '+%s') 1 4200 5000 230000 50000 0 16  --from test1 -y | grep "raw_log:"
sleep 0.5
electrad tx meter record $(date '+%s') 1 5200 5000 230000 50000 0 16  --from test1 -y | grep "raw_log:"
sleep 0.5
electrad tx meter record $(date '+%s') 1 5200 0 230000 50000 0 16  --from test2 -y | grep "raw_log:"
sleep 0.5
electrad tx meter record $(date '+%s') 1 6200 7000 230000 50000 0 16  --from test3 -y | grep "raw_log:"
sleep 0.5
electrad tx meter record $(date '+%s') 1 2200 0 230000 50000 0 16  --from bob -y | grep "raw_log:"
sleep 0.5
electrad tx meter record $(date '+%s') 1 0 28000 230000 50000 0 111  --from prod1 -y | grep "raw_log:"
sleep 0.5
electrad tx meter record $(date '+%s') 1 0 29000 230000 50000 0 22  --from prod2 -y | grep "raw_log:"
timestamp78=$(date +%s)
echo $timestamp78

#  Prod1 "prod10000-1c4c-4963-872a-5c0175e612d2" "electra16p7dd9wp76kmxckus64un7udt59kvprfd0tw8v"
#  prod2 "prod20000-2222-4963-872a-5c0175e612d2" "electra1rf56um69dum7em0kx9xen794x8gm49vxstkjwy" 

electrad query meter list-ppa-map --count-total
# expected total: "0"

#################################################################################################################################### 
# electrad tx meter create-billingcycles [cycle-id] [start] [end] [whin] [whout] [moneyin] [moneyout] [curency] [flags]

electrad tx meter create-billingcycles $cycle $timestamp0 $timestamp1 0 0 0 0 "uelectra" --from bob -y | grep "raw_log: 'failed" 
electrad query meter list-billingcycles
electrad query meter currentcycle-id | grep "cycleID:"
####################################################################################################################################
# electrad tx meter create-customerbillingline [customerdevice-id] [cycle-id] [lineid] [producer-device-id] [bill-contract-id] [line-wh] [line-wh-price] [curency] [decremented] [phase] [flags]
# electrad tx meter create-producerbillingline [producer-device-id] [cycle-id] [lineid] [customerdevice-id] [bill-contract-id] [line-wh] [line-wh-price] [curency] [decremented] [phase] [flags]

# 
lineid=1
echo $test1 $prod1 $lineid
electrad tx meter create-customerbillingline $test1 $cycle $lineid $prod1 "test1-prod1" 1000 6600 "uelectra" 1000 1 --from bob -y | grep "raw_log: 'failed"
electrad tx meter create-producerbillingline $prod1 $cycle $lineid $test1 "test1-prod1" 1000 6600 "uelectra" 1000 1 --from bob -y | grep "raw_log: 'failed"
((lineid++)) # Increment the lineid
electrad tx meter create-customerbillingline $test1 $cycle $lineid $prod1 "test1-prod2" 1000 6600 "uelectra" 1000 1 --from bob -y | grep "raw_log: 'failed"
electrad tx meter create-producerbillingline $prod1 $cycle $lineid $test1 "test1-prod2" 1000 6600 "uelectra" 1000 1 --from bob -y | grep "raw_log: 'failed"
((lineid++)) # Increment the lineid
electrad tx meter create-customerbillingline $test1 $cycle $lineid $prod1 "test2-prod1" 1000 6600 "uelectra" 1000 1 --from bob -y | grep "raw_log: 'failed"
electrad tx meter create-producerbillingline $prod1 $cycle $lineid $test1 "test2-prod1" 1000 6600 "uelectra" 1000 1 --from bob -y | grep "raw_log: 'failed"
((lineid++)) # Increment the lineid
electrad tx meter create-customerbillingline $test1 $cycle $lineid $prod1 "test2-prod2" 1000 6600 "uelectra" 1000 1 --from bob -y | grep "raw_log: 'failed"
electrad tx meter create-producerbillingline $prod1 $cycle $lineid $test1 "test2-prod2" 1000 6600 "uelectra" 1000 1 --from bob -y | grep "raw_log: 'failed"
((lineid++)) # Increment the lineid
electrad tx meter create-customerbillingline $test1 $cycle $lineid $prod1 "test3-prod1" 1000 6600 "uelectra" 1000 1 --from bob -y | grep "raw_log: 'failed"
electrad tx meter create-producerbillingline $prod1 $cycle $lineid $test1 "test3-prod1" 1000 6600 "uelectra" 1000 1 --from bob -y | grep "raw_log: 'failed"
((lineid++)) # Increment the lineid
electrad tx meter create-customerbillingline $test1 $cycle $lineid $prod1 "test3-prod2" 1000 6600 "uelectra" 1000 1 --from bob -y | grep "raw_log: 'failed"
electrad tx meter create-producerbillingline $prod1 $cycle $lineid $test1 "test3-prod2" 1000 6600 "uelectra" 1000 1 --from bob -y | grep "raw_log: 'failed"
# Control
Echo "============ Customer ============"
# electrad tx meter create-customerbills [bill-cycle-id] [customerdevice-id] [bill-date] [bill-total-wh] [bill-total-price] [bill-currency] [bill-valid] [paid] [flags]
electrad query meter list-customerbillingline
# Finalyse the customer bill
electrad tx meter create-customerbills $cycle $test1 $(date '+%s') 1000 6690 "uelectra" true false --from bob -y | grep "raw_log: 'failed"
electrad query meter list-customerbills
##################################################################################################################
# electrad query meter customerbill [customerdevice-id] [bill-cycle-id] [start] [end] [paid] [flags]
electrad query metercustomerbill $test1 $cycle 199999 1999999999999 true
Echo "============ Producer ============"
# electrad tx meter create-producerbills [bill-cycle-id] [producerdevice-id] [bill-date] [bill-total-wh] [bill-total-price] [bill-currency] [bill-valid] [paid] [flags]
electrad query meter list-producerbillingline
# Finalyse the producer bill
electrad tx meter create-producerbills $cycle $prod1 $(date '+%s') 1000 6690 "uelectra" true false --from bob -y | grep "raw_log: 'failed"
electrad query meter list-producerbills 
##################################################################################################################
# electrad query meter getcustomerbill [customerdevice-id] [bill-cycle-id] [flags]
electrad query meter getcustomerbill $test1 $cycle

##################################################################################################################
# electrad query meter getproducerbill [producerdevice-id] [bill-cycle-id] [flags]
electrad query meter getproducerbill $prod1 $cycle

electrad query meter getcustomerbill electra12lhecv88myvrmgv92syj782dxjfsnjjg3lzvv7 77 | grep -E "customerdeviceID:"\|"cycleID:"\|"lineid:"

#################################################################################################################################### 
# increment the billing cycle
((cycle++))
# Cycle 78 | From timestamp1+1 to timestamp2
electrad tx meter record $(date '+%s') 1 1300 0 230 50 958 16  --from alice -y  | grep "raw_log:"
sleep 1
electrad tx meter record $(date '+%s') 1 5200 0 230 50 0 16  --from test1 -y | grep "raw_log:"
sleep 1
electrad tx meter record $(date '+%s') 1 2200 0 230 50 0 16  --from test1 -y | grep "raw_log:"
sleep 1
electrad tx meter record $(date '+%s') 1 6200 0 230 50 0 16  --from test2 -y | grep "raw_log:"
sleep 1
electrad tx meter record $(date '+%s') 1 7700 0 230 50 0 16  --from test3 -y | grep "raw_log:"
sleep 1
electrad tx meter record $(date '+%s') 1 3300 0 230 50 0 16  --from bob -y | grep "raw_log:"
sleep 1
electrad tx meter record $(date '+%s') 1 1400 0 230 50 958 16  --from alice -y  | grep "raw_log:"
sleep 1
electrad tx meter record $(date '+%s') 1 0 37000 230 50 0 111  --from prod1 -y | grep "raw_log:"
sleep 1
electrad tx meter record $(date '+%s') 1 0 39000 230 50 0 22  --from prod2 -y | grep "raw_log:"
sleep 1
electrad tx meter record $(date '+%s') 1 1500 0 230 50 958 16  --from alice -y  | grep "raw_log:"
sleep 1
electrad tx meter record $(date '+%s') 1 6500 0 230 50 0 16  --from test2 -y | grep "raw_log:"
sleep 1
electrad tx meter record $(date '+%s') 1 0 38000 230 50 0 111  --from prod1 -y | grep "raw_log:"
# Increment the cycle
timestamp2=$(date +%s)
echo "timestamp2:" $timestamp2
##################################################################################################################
# electrad query meter getcustomerbill [customerdevice-id] [bill-cycle-id] [flags]
electrad query meter getcustomerbill $test1 $cycle

##################################################################################################################
# electrad query meter getproducerbill [producerdevice-id] [bill-cycle-id] [flags]
electrad query meter getproducerbill $prod1 $cycle

electrad query meter getcustomerbill electra12lhecv88myvrmgv92syj782dxjfsnjjg3lzvv7 77 | grep -E "customerdeviceID:"\|"cycleID:"\|"lineid:"

#################################################################################################################################### 

# increment the last second of the previous cycle
((timestamp1++))  
electrad tx meter create-billingcycles $cycle $timestamp1 $timestamp2 0 0 0 0 "uelectra" --from bob -y | grep "raw_log: 'failed" 
electrad query meter currentcycle-id | grep "cycleID:"

electrad tx meter prepare-bill $cycle false --from bob -y
electrad query meter list-billingcycles | grep -E "cycleID:"\|"end:"\|"start:"
electrad query meter list-ppa-map --count-total  | grep "total:"
electrad query meter list-power-purchase-contract --count-total | grep "total:"
 