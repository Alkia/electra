#!/usr/bin/env bash
# Created account "test1" with address "electra12lhecv88myvrmgv92syj782dxjfsnjjg3lzvv7" with mnemonic: "slogan wreck armor floor change female industry smart daughter spawn today system shop pigeon game olive always dish camp response can perfect salon stone"
# Created account "test2" with address "electra12r6lx69zfef6ht3fk7drm9f5222qk4ur6zjpvz" with mnemonic: "boil silk digital carry photo explain kitchen wall unusual garlic suspect leave accident discover banana catch margin reward gap asset raccoon anchor leisure ostrich"
# Created account "test3" with address "electra19mhfyxz7532gumtyw5zrq00qv23mqtc4plgfzy" with mnemonic: "bounce duty afraid make item occur curious mention stamp lava inspire shock wall hungry culture apart harsh icon burden glide cabbage deal during charge"
# Created account "alice" with address "electra16n5tnkck6rcg7gxmalc057daputvac5pzjeal9" with mnemonic: "satisfy dirt consider electric apart coin later recall enhance pizza dust way shop erosion innocent actor member double always budget rival congress person uncle"
# Created account "bob" with address "electra1krkk5xtp8s7lk9xf2az70txle50zfzga7dah87" with mnemonic: "address slogan history guitar fringe health coral dish exercise excite utility now thank mosquito soul vacuum doctor squeeze host never dinosaur afford tide tide"
timestamp0=$(date +%s)
echo $timestamp0
electrad tx meter record $(date '+%s') 1 1300 0 230000 50000 958 16  --from alice -y  | grep "raw_log:"
sleep 2
electrad tx meter record $(date '+%s') 1 1500 0 230000 50000 975 17  --from bob -y  | grep "raw_log:"
sleep 1
electrad tx meter record $(date '+%s') 1 0 3200 230000 50000 0 50  --from test1 -y | grep "raw_log:"
sleep 1
electrad tx meter record $(date '+%s') 1 1200 0 230000 50000 0 16  --from test2 -y | grep "raw_log:"
sleep 1
electrad tx meter record $(date '+%s') 1 0 6200 230000 50000 0 50  --from test3 -y | grep "raw_log:"
sleep 1
timestamp1=$(date +%s)
echo $timestamp1
electrad tx meter record $(date '+%s') 1 1400 0 230000 50000 958 16  --from alice -y | grep "raw_log:"
sleep 1
electrad tx meter record $(date '+%s') 1 1600 0 230000 50000 975 17  --from bob -y | grep "raw_log:"
sleep 1
electrad tx meter record $(date '+%s') 1 1500 0 230000 50000 958 16  --from alice -y | grep "raw_log:"
sleep 1
electrad tx meter record $(date '+%s') 1 0 4000  230000 50000 0 16  --from test1 -y | grep "raw_log:"
sleep 1
timestamp2=$(date +%s)
echo $timestamp2
electrad tx meter record $(date '+%s') 1 1800 0 230000 50000 975 17  --from bob -y | grep "raw_log:"
sleep 1
electrad tx meter record $(date '+%s') 1 1600 0 230000 50000 958 16  --from alice -y | grep "raw_log:"
sleep 1
electrad tx meter record $(date '+%s') 1 0 5000 230000 50000 0 16  --from test1 -y | grep "raw_log:"
sleep 1
electrad tx meter record $(date '+%s') 1 1400 0 230000 50000 0 16  --from test2 -y | grep "raw_log:"
sleep 1
electrad tx meter record $(date '+%s') 1 0 7000 230000 50000 0 16  --from test3 -y | grep "raw_log:"
sleep 1
electrad tx meter record $(date '+%s') 1 2000 230000 50000 0 16  --from bob -y | grep "raw_log:"
sleep 1
timestamp3=$(date +%s)
#Count all records from alice
echo $timestamp0
echo $timestamp1
echo $timestamp2
# Count the number of records from Alice since the begining
electrad query meter listrecordings electra16n5tnkck6rcg7gxmalc057daputvac5pzjeal9 $timestamp0  $(date '+%s') false
electrad query meter listrecordings electra16n5tnkck6rcg7gxmalc057daputvac5pzjeal9 $timestamp0  $(date '+%s') false  |  grep ^total:

# Count the number of recornds between 2 dates
electrad query meter listrecordings electra16n5tnkck6rcg7gxmalc057daputvac5pzjeal9 $timestamp1  $(date '+%s') false
electrad query meter listrecordings electra16n5tnkck6rcg7gxmalc057daputvac5pzjeal9 $timestamp1  $(date '+%s') false | grep ^total:

# Count the number of recornds between 2 dates
electrad query meter listrecordings electra16n5tnkck6rcg7gxmalc057daputvac5pzjeal9 $timestamp1 $timestamp2 false
electrad query meter listrecordings electra16n5tnkck6rcg7gxmalc057daputvac5pzjeal9 $timestamp1 $timestamp2 false | grep ^total:

#if [[ "$TEST" =~ [^a-zA-Z0-9\ ] ]]; then BLAH; fi