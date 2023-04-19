#!/bin/bash
# Copyright (c) 2022-2023 Alkia <www.alkia.net>
# All rights reserved.   
#
# Redistribution and use in source and binary forms, with or without
# modification, are permitted provided that the following conditions
# are met:
# 1. Redistributions of source code must retain the above copyright
#    notice, this list of conditions and the following disclaimer.
# 2. Redistributions in binary form must reproduce the above copyright
#    notice, this list of conditions and the following disclaimer in the
#    documentation and/or other materials provided with the distribution.
#
# THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
# ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
# IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
# ARE DISCLAIMED.  IN NO EVENT SHALL AUTHOR OR CONTRIBUTORS BE LIABLE
# FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
# DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
# OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
# HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
# LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
# OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
# SUCH DAMAGE.
#
DESTINATION="/home/alkia/electra"
#SOURCE__DIR="/home/alkia/electra01"
SOURCE__DIR="/home/alkia/projects/electra"
BACKUP__DIR="/home/alkia/tmp"
# cp electra01/scripts/scaffold_ALL_electra_script.sh .
##################################################################################################################
start=`date +%s`
cp $DESTINATION/scripts $SOURCE__DIR -r
cp $DESTINATION/scripts $BACKUP__DIR -r
sudo rm $DESTINATION -r
rm .electra -r
rm .ignite/local-chains/electra -r
##################################################################################################################
# in case electrad do not start 
# sudo rm $(which ignite)
# sudo curl https://get.ignite.com/cli! | sudo bash\\
##################################################################################################################
clear
ignite scaffold chain electra --no-module --address-prefix electra --clear-cache 
git init electra
cd electra
##################################################################################################################
git remote add origin https://github.com/Alkia/electra_SCB.git
git remote add origin https://github.com/Alkia/electra.git
# https://github.com/Alkia/electra.git
git add .
git commit -m "scaffold electra chain"
##################################################################################################################
clear
ignite scaffold module meter --dep bank,account,staking,authz,mint,gov --params maxBillingIteration:uint,moduleParamBestForCustomer:bool,payAutomatically:bool,billingAdmin:string -y
# x/auth: retrieve information about internal blockchain accounts
# x/bank: mint, burn or send coins
# x/staking: bond, unbond, delegate tokens and hooks
# x/distribution: withdraw rewards
# x/gov:
# Git Save ####################################################################################################### 
git add .
git commit -am "scaffold electra meter module"
# Create the meterreadings map-list ##############################################################################
ignite scaffold map meterreadings phase:uint whin:uint whout:uint mvolt:uint mhertz:uint mpf:uint maxmi:uint --index deviceID:string,timestamp:uint --module meter --no-message -y
# Create the record command to store the monophased meterreadings in the blockchain ##############################
ignite scaffold message record timestamp:uint phase:uint whin:uint whout:uint mvolt:uint mhertz:uint mpf:uint maxmi:uint --desc "Post a monophase meter reading on the chain" --module meter -y
# Create the record command to store the three-phased meterreadings in the blockchain ############################
ignite scaffold message record3 timestamp:uint whin1:uint whout1:uint mvolt1:uint mhertz1:uint mpf1:uint maxmi1:uint whin2:uint whout2:uint mvolt2:uint mhertz2:uint mpf2:uint maxmi2:uint whin3:uint whout3:uint mvolt3:uint mhertz3:uint mpf3:uint maxmi3:uint --desc "Post a tri-phase meter reading on the chain" --module meter -y
# Map-List the directory of authorized smartmeters ###############################################################
ignite scaffold map meterdirectory model:string installationdate:uint address:string ownerlastname:string  ownerfirstname:string ownerphone:string gpsjson:string active:bool triphased:bool phasenbmono:uint --index deviceID:string,barcodeserial:string --module meter --no-message -y
# Select the meter recordings Beteween a start and end timestamps ################################################
ignite scaffold query listrecordings deviceID:string start:uint end:uint byUnixTime:bool --response meterreadings,comments:string,total:uint --module meter --desc "List the recordings from START to END [when byUnixTime=true parameters are interpreted as unix DateTime timestams]" -y
git add .
git commit -am "scaffold electra meter module messages maps & queries"
##################################################################################################################
# Map-List the producer's Power Purchase Contract PPC| for billing purpose
ignite scaffold map powerPurchaseContract contractName:string contractActive:bool contractPhase:uint contractForAll:bool contractForAllPrice:uint contractForAllCurency:string contractForAllActivePeriod:string contractPreferred:bool contractPreferredPrice:uint contractPreferredActivePeriod:string contractPreferredCurency:string contractStartDate:uint contractEndDate:uint Phase1remainingWh:uint Phase2remainingWh:uint Phase3remainingWh:uint --index contractID:string,contractDeviceID:string  --module meter -y
#cp ./scripts/custo/meter/msg_server_create_power_purchase_contract.go ./x/meter/keeper/
git add .
git commit -am "scaffold electra powerPurchaseContract message"
##################################################################################################################
# List the subscriptions from a Consumer to a PPC contract
ignite scaffold map ppaMap producerDeviceID:string agreementStartDate:uint agreementEndDate:uint contractPreferredPrice:uint contractPreferredCurency:string --index consumerDeviceID:string,agreementID:string,agreementActive:bool,contractID:string --module meter -y
git commit -am "scaffold electra ppaMap maps"
##################################################################################################################
# Billing Cycle
ignite scaffold map billingcycles begin:uint end:uint whin:uint whout:uint moneyin:uint moneyout:uint curency:string valid:bool paid:bool  --index cycleID:uint --module meter -y		 
ignite scaffold query currentcycleID --response cycleID:uint,begin:uint,end:uint,whin:uint,whout:uint,moneyin:uint,moneyout:uint,curency:string  --module meter --desc "Get the current cycleID:uint" -y
#ignite scaffold message incrementcycleID --response cycleID:uint  --module meter --desc "Increment the current cycleID:uint" -y
git add .
git commit -am "scaffold electra billingcycles maps & queries"
##################################################################################################################
# Le concesuss sur une bill est le checksum du tableau [customer][producer][amount][prices] le fingerprint etant le [TotalTurnover][curency][#consumers][#producers]   
# Type Bcustomer illingLine
##################################################################################################################
# Billing
##################################################################################################################
# ignite scaffold module billing --dep bank,meter --params defaultCurrency:string,maxBillingIteration:uint,moduleParamBestForCustomer:bool,payAutomatically:bool,billingAdmin:string,billingAdmin2:string,billingAdmin3:string -y
##################################################################################################################
ignite scaffold message prepareBill cycleID:uint record:bool executePayment:bool --response jsonCustomerbill:string,jsonProducerbill:string,comment:string --module meter --desc "Increment the current cycleID:uint" -y

ignite scaffold map customerbillingline producerDeviceID:string billContractID:string lineWh:uint lineWhPrice:uint curency:string lineWhTotalPrice:uint phase:uint --index customerDeviceID:string,cycleID:uint,lineid:uint,paid:bool --module meter -y
# Display the content of one customer bill
##
## 
ignite scaffold query getcustomerbill customerDeviceID:string billCycleID:uint --response customerbillinglines,billTotalWh:uint,billTotalPrice:uint,currency:string,nblines:uint,comments:string --module meter --desc "dispaly the customer bill from Cycle ID or START to END [parameters are interpreted as unix DateTime timestams]" -y
# Map-list customer bills ########################################################################################
ignite scaffold map customerbills billDate:uint billTotalWh:uint billTotalPrice:uint billCurrency:string billValid:bool paid:bool --index billCycleID:uint,customerDeviceID:string --module meter -y
# Select the customer bills Beteween a start and end timestamps
#ignite scaffold query listcustomerbills customerDeviceID:string start:uint end:uint billCycleID:uint paid:bool --response listofbills,total:uint --module meter --desc "List the customer bills from START to END [parameters are interpreted as unix DateTime timestams]" -y
#
ignite scaffold map producerbillingline customerDeviceID:string billContractID:string lineWh:uint lineWhPrice:uint curency:string lineWhTotalPrice:uint phase:uint --index producerDeviceID:string,cycleID:uint,lineid:uint,paid:bool --module meter -y
# Display the content of one producer bill
## 
ignite scaffold query getproducerbill producerDeviceID:string billCycleID:uint  --response producerbillinglines,billTotalWh:uint,billTotalPrice:uint,curency:string,nblines:uint,comments:string --module meter --desc "dispaly the producer bill from Cycle ID or START to END [parameters are interpreted as unix DateTime timestams]" -y
# Map-list producer bills ########################################################################################
ignite scaffold map producerbills billDate:uint billTotalWh:uint billTotalPrice:uint billCurrency:string billValid:bool paid:bool --index billCycleID:uint,producerDeviceID:string --module meter -y
# Select the customer bills Beteween a start and end timestamps
# ignite scaffold query listproducerbills producerdeviceID:string start:uint end:uint billCycleID:uint paid:bool --response listofbills,total:uint --module meter --desc "List the producer bills from START to END [parameters are interpreted as unix DateTime timestams]" -y	 
#
git add .
git commit -am "scaffold electra meter billing messages maps & queries"
##################################################################################################################
# Keep the index - COMMENTED as such index could be useful if not have to browse the full recording map earch time to find the latest recordings but so far it needs ...  
# ignite scaffold map userlistmap whin1:uint whout1:uint whin2:uint whout2:uint whin3:uint whout3:uint  --index prosumerID:string --module meter -y	
git add .
git commit -am "scaffold electra billing in meter module"
#  look at  vi ts-client/client.ts
# Give the rights and Copy the scripts ###########################################################################
chmod a+x $SOURCE__DIR/scripts/custo/integration_tests/*.*
# Copy Scripts ###################################################################################################
cp $SOURCE__DIR/scripts $DESTINATION -r
# Copy Front End Customisation ###################################################################################################
cp ./scripts/custo/public ./vue -r
cp ./scripts/custo/vue/index.html ./vue
cp ./scripts/custo/vue/.env* ./vue
cp ./scripts/custo/vue/vite.config.ts ./vue
# set the external address in the .env file 
external_address=$(wget -qO- eth0.me)
sed -i.bak -e "s/localhost/$external_address/g" $HOME/electra/vue/.env
# Copy Front End Customisation ###################################################################################################
cp ./scripts/custo/config.ym* .
cp ./scripts/custo/readme.md .
cp ./scripts/custo/.gitignore .
# Coding meter parameters ########################################################################################
cp ./scripts/custo/meter/params.go ./x/meter/types/ 
# Coding meter record & record3phases messages ###################################################################
cp ./scripts/custo/meter/msg_server_record.go          ./x/meter/keeper/
cp ./scripts/custo/meter/msg_server_record_3.go        ./x/meter/keeper/
cp ./scripts/custo/meter/query.proto                   ./proto/electra/meter/
#cp ./scripts/custo/meter/tx.proto ./proto/electra/meter/
cp ./scripts/custo/meter/grpc_query_listrecordings.go  ./x/meter/keeper/
# coding power_purchase_contract #################################################################################
cp ./scripts/custo/meter/msg_server_power_purchase_contract.go ./x/meter/keeper/
# Add electra logo ###############################################################################################
cp ./scripts/custo/vue/SpNavbar.vue ./vue/node_modules/@starport/vue/src/components/SpNavbar/
#######################################################
cp ./scripts/custo/meter/grpc_query_getcustomerbill.go ./x/meter/keeper/
cp ./scripts/custo/meter/grpc_query_getproducerbill.go ./x/meter/keeper/
# Cycle ID management ############################################################################################
cp ./scripts/custo/meter/grpc_query_currentcycle_id.go ./x/meter/keeper/
cp ./scripts/custo/meter/a_tools.go                    ./x/meter/keeper/
# Bill Preparation ###############################################################################################
cp ./scripts/custo/meter/msg_server_prepare_bill.go    ./x/meter/keeper/
cp ./scripts/custo/meter/a_meter_billing.go            ./x/meter/keeper/
cp ./scripts/custo/meter/a_tools.go                    ./x/meter/keeper/
# This module uses the SendCoins function of bankKeeper. We add this SendCoins function to :
cp ./scripts/custo/meter/expected_keepers.go           ./x/meter/types/
##################################################################################################################
git add .
git commit -am "Customize the code in meter module"
# ignite g vuex --proto-all-modules --clear-cache -y
##################################################################################################################
# Add any new scaffolding here to not overwrite existing proto changes query.proto and tx.proto
##################################################################################################################
# Querry find the latest cycle
##################################################################################################################
# END any new scaffolding here to not overwrite existing proto changes query.proto and tx.proto
##################################################################################################################
cd vue
npm install
cd ..
cp ./scripts/custo/vue/SpNavbar.vue ./vue/node_modules/@starport/vue/src/components/SpNavbar/
# replaced by next line # cp ./scripts/custo/vue/env.js ./vue/node_modules/@starport/vuex/src/modules/common/env/
sed -i.bak -e "s/localhost/$external_address/g" $HOME/electra/vue/node_modules/@starport/vuex/src/modules/common/env/env.js
# 1317 1318
# 26657 26659
sed -i.bak -e "s/localhost/$external_address/g" $HOME/electra/vue/node_modules/.vite/@starport_vuex.js
sed -i.bak -e "s/1317/1318/g" $HOME/electra/vue/node_modules/.vite/@starport_vuex.js
sed -i.bak -e "s/26657/26659/g" $HOME/electra/vue/node_modules/.vite/@starport_vuex.js
##################################################################################################################
git tag v0.1.5
end=`date +%s`
echo Execution time was `expr $end - $start` seconds.
#git push --set-upstream origin master --force
# ignite chain serve -r
rm ~/scaffold_ALL_electra_script.sh

code .
ignite chain serve
##################################################################################################################
# Module voter
##################################################################################################################
clear
ignite scaffold module voter 
# Git Save ####################################################################################################### 
git add .
git commit -m "scaffold module voter"
ignite scaffold list poll title options --module voter
git add .
git commit -m "scaffold list poll in module voter"
# Modify the Protobuffer Types
cp proto/voter/poll.proto
cp proto/voter/tx.proto
cp x/voter/types/messages_poll.go
cp /x/voter/client/cli/tx_poll.go
cp /x/voter/client/cli/tx_poll.go
# test electrad tx voter create-poll "How wonderful is Cosmos on a scale of 1(worst) to 4(best) ?" "1" "2" "3" "4" --from bob
# check the result on the front-end http://localhost:1317/#/Query/ElectraVoterPollAll

ignite scaffold list vote pollID option --module voter
git add .
git commit -m "scaffold list poll in module voter"
# Test electrad tx voter create-poll "Do you like this tuto?" "Yes absolutelly" "No" "I have no idea" --from alice
