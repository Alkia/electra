#!/usr/bin/env bash
# Created account "test1" with address "electra12lhecv88myvrmgv92syj782dxjfsnjjg3lzvv7" with mnemonic: "slogan wreck armor floor change female industry smart daughter spawn today system shop pigeon game olive always dish camp response can perfect salon stone"
# Created account "test2" with address "electra12r6lx69zfef6ht3fk7drm9f5222qk4ur6zjpvz" with mnemonic: "boil silk digital carry photo explain kitchen wall unusual garlic suspect leave accident discover banana catch margin reward gap asset raccoon anchor leisure ostrich"
# Created account "test3" with address "electra19mhfyxz7532gumtyw5zrq00qv23mqtc4plgfzy" with mnemonic: "bounce duty afraid make item occur curious mention stamp lava inspire shock wall hungry culture apart harsh icon burden glide cabbage deal during charge"
# Created account "alice" with address "electra16n5tnkck6rcg7gxmalc057daputvac5pzjeal9" with mnemonic: "satisfy dirt consider electric apart coin later recall enhance pizza dust way shop erosion innocent actor member double always budget rival congress person uncle"
# Created account "bob" with address "electra1krkk5xtp8s7lk9xf2az70txle50zfzga7dah87" with mnemonic: "address slogan history guitar fringe health coral dish exercise excite utility now thank mosquito soul vacuum doctor squeeze host never dinosaur afford tide tide"
# Created account "prod1" with address "electra16p7dd9wp76kmxckus64un7udt59kvprfd0tw8v" with mnemonic: "thing lamp dwarf pupil hundred harsh snack review chest pledge people normal pattern shoe cereal drill staff people finger type timber buddy grab rate"
# Created account "prod2" with address "electra1rf56um69dum7em0kx9xen794x8gm49vxstkjwy"

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

electrad query meter list-ppa-map --count-total
# expected total: "0"


# [consumer-device-id] "test2" with address "electra12r6lx69zfef6ht3fk7drm9f5222qk4ur6zjpvz" 
# [agreement-id]  ""
# subscribe to PPC:
# [contract-id] f863b4b4-1c4c-4963-872a-5c0175e612d2 
# [producer-device-id] "electra12lhecv88myvrmgv92syj782dxjfsnjjg3lzvv7"
electrad tx meter create-ppa-map "electra12r6lx69zfef6ht3fk7drm9f5222qk4ur6zjpvz" "" true "f863b4b4-1c4c-4963-872a-5c0175e612d2" "electra12lhecv88myvrmgv92syj782dxjfsnjjg3lzvv7" 1665712168 1777777777  --from test2 -y  | grep "raw_log: 'failed"
# Expected result failed as test1 is not an admin | raw_log: 'failed to execute message; message index: 0: index already set: invalid

electrad query meter list-ppa-map --count-total
# expected total: "1"

# "test3" with address "electra19mhfyxz7532gumtyw5zrq00qv23mqtc4plgfzy"
electrad tx meter create-ppa-map "electra12r6lx69zfef6ht3fk7drm9f5222qk4ur6zjpvz" "" true "f863b4b4-1c4c-4963-872a-5c0175e612d2 " "electra12lhecv88myvrmgv92syj782dxjfsnjjg3lzvv7" 1665712168 1777777777    --from test3 -y  | grep "raw_log: 'failed"

electrad query meter list-ppa-map --count-total
# expected total: "2"

# "test1" with address "electra12lhecv88myvrmgv92syj782dxjfsnjjg3lzvv7"
electrad tx meter create-ppa-map "electra12lhecv88myvrmgv92syj782dxjfsnjjg3lzvv7" "" true "f863b4b4-1c4c-4963-872a-5c0175e612d2" "electra1rf56um69dum7em0kx9xen794x8gm49vxstkjwy" 1665712168 1777777777  --from test1 -y   | grep "raw_log: 'failed"

# "test1" with address "electra12lhecv88myvrmgv92syj782dxjfsnjjg3lzvv7"
# contractDeviceID: electra1rf56um69dum7em0kx9xen794x8gm49vxstkjwy
#  contractID: prod20000-2222-4963-872a-5c0175e612d2
electrad tx meter create-ppa-map "electra12lhecv88myvrmgv92syj782dxjfsnjjg3lzvv7" "test1-prod1" true "prod10000-1c4c-4963-872a-5c0175e612d2" "electra16p7dd9wp76kmxckus64un7udt59kvprfd0tw8v" 1665712168 1777777777  --from test1 -y   | grep "raw_log: 'failed"
electrad tx meter create-ppa-map "electra12lhecv88myvrmgv92syj782dxjfsnjjg3lzvv7" "test1-prod2" true "prod20000-2222-4963-872a-5c0175e612d2" "electra1rf56um69dum7em0kx9xen794x8gm49vxstkjwy" 1665712168 1777777777  --from test1 -y   | grep "raw_log: 'failed"

# "test1" with address "electra12lhecv88myvrmgv92syj782dxjfsnjjg3lzvv7"
#  contractDeviceID: electra16p7dd9wp76kmxckus64un7udt59kvprfd0tw8v
#  contractID: prod10000-1c4c-4963-872a-5c0175e612d2
electrad tx meter create-ppa-map "electra12r6lx69zfef6ht3fk7drm9f5222qk4ur6zjpvz" "" true "prod10000-1c4c-4963-872a-5c0175e612d2" "electra16p7dd9wp76kmxckus64un7udt59kvprfd0tw8v" 1665712168 1777777777  --from test1 -y   | grep "raw_log: 'failed"
echo "Expected failure"
# Expected failure 

# "test2" with address "electra12r6lx69zfef6ht3fk7drm9f5222qk4ur6zjpvz" 
electrad tx meter create-ppa-map "electra12r6lx69zfef6ht3fk7drm9f5222qk4ur6zjpvz" "test2-prod1" true "prod10000-1c4c-4963-872a-5c0175e612d2" "electra16p7dd9wp76kmxckus64un7udt59kvprfd0tw8v" 1665712168 1777777777  --from test2 -y   | grep "raw_log: 'failed"
electrad tx meter create-ppa-map "electra12r6lx69zfef6ht3fk7drm9f5222qk4ur6zjpvz" "test2-prod2" true "prod20000-2222-4963-872a-5c0175e612d2" "electra1rf56um69dum7em0kx9xen794x8gm49vxstkjwy" 1665712168 1777777777  --from test1 -y   | grep "raw_log: 'failed"

# "test3" with address "electra19mhfyxz7532gumtyw5zrq00qv23mqtc4plgfzy"
electrad tx meter create-ppa-map "electra19mhfyxz7532gumtyw5zrq00qv23mqtc4plgfzy" "test3-prod1" true "prod10000-1c4c-4963-872a-5c0175e612d2" "electra16p7dd9wp76kmxckus64un7udt59kvprfd0tw8v" 1665712168 1777777777  --from test1 -y   | grep "raw_log: 'failed"
electrad tx meter create-ppa-map "electra19mhfyxz7532gumtyw5zrq00qv23mqtc4plgfzy" "test3-prod2" true "prod20000-2222-4963-872a-5c0175e612d2" "electra1rf56um69dum7em0kx9xen794x8gm49vxstkjwy" 1665712168 1777777777  --from test1 -y   | grep "raw_log: 'failed"


electrad query meter list-ppa-map --count-total
# expected total: "3"

electrad query meter list-ppa-map --count-total | grep "contractID:"

#update the name
electrad tx meter update-ppa-map "electra12r6lx69zfef6ht3fk7drm9f5222qk4ur6zjpvz" "agreement-id" true "prod10000-1c4c-4963-872a-5c0175e612d2" "electra16p7dd9wp76kmxckus64un7udt59kvprfd0tw8v" 1665700000 1777788888  --from test2 -y  | grep "raw_log: 'failed"

electrad query meter list-ppa-map --count-total | grep "contractName:"
# expected see the new name

electrad tx meter delete-ppa-map "electra12r6lx69zfef6ht3fk7drm9f5222qk4ur6zjpvz" "agreement-id" true "prod10000-1c4c-4963-872a-5c0175e612d2" --from bob -y   | grep "raw_log: 'failed"
# expected contractActive: false | We do not delete contracts
electrad query meter list-ppa-map --count-total | grep "agreementActive:"