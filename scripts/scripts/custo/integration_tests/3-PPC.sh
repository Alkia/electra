#!/usr/bin/env bash
# Created account "test1" with address "electra12lhecv88myvrmgv92syj782dxjfsnjjg3lzvv7" with mnemonic: "slogan wreck armor floor change female industry smart daughter spawn today system shop pigeon game olive always dish camp response can perfect salon stone"
# Created account "test2" with address "electra12r6lx69zfef6ht3fk7drm9f5222qk4ur6zjpvz" with mnemonic: "boil silk digital carry photo explain kitchen wall unusual garlic suspect leave accident discover banana catch margin reward gap asset raccoon anchor leisure ostrich"
# Created account "test3" with address "electra19mhfyxz7532gumtyw5zrq00qv23mqtc4plgfzy" with mnemonic: "bounce duty afraid make item occur curious mention stamp lava inspire shock wall hungry culture apart harsh icon burden glide cabbage deal during charge"
# Created account "alice" with address "electra16n5tnkck6rcg7gxmalc057daputvac5pzjeal9" with mnemonic: "satisfy dirt consider electric apart coin later recall enhance pizza dust way shop erosion innocent actor member double always budget rival congress person uncle"
# Created account "bob" with address "electra1krkk5xtp8s7lk9xf2az70txle50zfzga7dah87" with mnemonic: "address slogan history guitar fringe health coral dish exercise excite utility now thank mosquito soul vacuum doctor squeeze host never dinosaur afford tide tide"
# Created account "prod1" with address "electra16p7dd9wp76kmxckus64un7udt59kvprfd0tw8v" with mnemonic: "thing lamp dwarf pupil hundred harsh snack review chest pledge people normal pattern shoe cereal drill staff people finger type timber buddy grab rate"
# Created account "prod2" with address "electra1rf56um69dum7em0kx9xen794x8gm49vxstkjwy"

electrad query meter list-power-purchase-contract --count-total
# expected total: "0"

electrad tx meter create-power-purchase-contract "uuid" "electra12lhecv88myvrmgv92syj782dxjfsnjjg3lzvv7" "contract-name-1" true 1 true 12000 "uelectra" "[contract-for-all-active-period" true 6800 "contract-preferred-active-period" "uelectra" 1665575799 1999999999 0 0 0 --from test1 -y | grep "raw_log:"
# Expected result failed as test1 is not an admin | raw_log: 'failed to execute message; message index: 0: index already set: invalid

electrad query meter list-power-purchase-contract --count-total
# expected total: "0"

electrad tx meter create-power-purchase-contract "uuid" "electra12lhecv88myvrmgv92syj782dxjfsnjjg3lzvv7" "contract-name-1" true 1 true 12000 "uelectra" "[contract-for-all-active-period" true 6800 "contract-preferred-active-period" "uelectra" 1665575799 1999999999 0 0 0 --from bob -y  | grep "raw_log: 'failed"
# success but do not use the variablle "uuid" passed as ID as it is too small and generates a random UUDI instead

electrad query meter list-power-purchase-contract --count-total
# expected total: "1"

electrad tx meter create-power-purchase-contract "bea079c9-6a65-41eb-8951-3b7fdf67d276" "electra12lhecv88myvrmgv92syj782dxjfsnjjg3lzvv7" "contract-name-1" true 1 true 12000 "uelectra" "[contract-for-all-active-period" true 6800 "contract-preferred-active-period" "uelectra" 1665575799 1999999999 0 0 0 --from bob -y  | grep "raw_log: 'failed"
# Expected result failed as test1 is not an admin | raw_log: 'failed to execute message; message index: 0: index already set: invalid

electrad query meter list-power-purchase-contract --count-total
# expected total: "2"

electrad tx meter create-power-purchase-contract "f863b4b4-1c4c-4963-872a-5c0175e612d2" "electra12lhecv88myvrmgv92syj782dxjfsnjjg3lzvv7" "contract-name-1" true 1 true 12000 "uelectra" "[contract-for-all-active-period" true 6800 "contract-preferred-active-period" "uelectra" 1665575799 1999999999 0 0 0 --from alice -y  | grep "raw_log: 'failed"
# Expected result success

electrad query meter list-power-purchase-contract --count-total  | grep "contractID:"
# expected total: "3"

#update the name 
electrad tx meter update-power-purchase-contract "bea079c9-6a65-41eb-8951-3b7fdf67d276" "electra19mhfyxz7532gumtyw5zrq00qv23mqtc4plgfzy" "contract-new-name-1" true 1 true 12000 "uelectra" "[contract-for-all-active-period" true 6800 "contract-preferred-active-period" "uelectra" 1665575799 1999999999 0 0 0 --from bob -y  | grep "raw_log: 'failed"
# Expected failure : failed to execute message; message index: 0: index not set: key not found
# the ContractDeviceID was wrong

electrad tx meter update-power-purchase-contract "bea079c9-6a65-41eb-8951-3b7fdf67d276" "electra12lhecv88myvrmgv92syj782dxjfsnjjg3lzvv7" "contract-new-name-1" true 1 true 12000 "uelectra" "[contract-for-all-active-period" true 6800 "contract-preferred-active-period" "uelectra" 1665575799 1999999999 0 0 0 --from bob -y  | grep "raw_log: 'failed"
# Expected result success

electrad query meter list-power-purchase-contract --count-total | grep "contractName:"
# expected see the new name

electrad tx meter delete-power-purchase-contract "bea079c9-6a65-41eb-8951-3b7fdf67d276" "electra12lhecv88myvrmgv92syj782dxjfsnjjg3lzvv7" --from bob -y  | grep "raw_log: 'failed"
# expected : one contractActive is false | We do not delete contracts
electrad query meter list-power-purchase-contract --count-total | grep "contractActive:"

# "prod1" with address "electra16p7dd9wp76kmxckus64un7udt59kvprfd0tw8v" 
electrad tx meter create-power-purchase-contract "prod10000-1c4c-4963-872a-5c0175e612d2" "electra16p7dd9wp76kmxckus64un7udt59kvprfd0tw8v" "contract-prod-1" true 1 true 12000 "uelectra" "[contract-for-all-active-period" true 6611 "contract-preferred-active-period" "uelectra" 1665575799 1999999999 0 0 0 --from alice -y  | grep "raw_log: 'failed"
# "prod2" with address "electra1rf56um69dum7em0kx9xen794x8gm49vxstkjwy"
electrad tx meter create-power-purchase-contract "prod20000-2222-4963-872a-5c0175e612d2" "electra1rf56um69dum7em0kx9xen794x8gm49vxstkjwy" "contract-prod-2" true 1 true 19000 "uelectra" "[contract-for-all-active-period" true 8822 "contract-preferred-active-period" "uelectra" 1665575799 1999999999 0 0 0 --from alice -y  | grep "raw_log: 'failed"
# Expected result success