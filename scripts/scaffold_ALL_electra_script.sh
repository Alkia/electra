# cp electra01/scripts/scaffold_ALL_electra_script.sh .
# Alkia
# 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
start=`date +%s`
sudo rm electra -r
rm .electra -r
rm .ignite/local-chains/electra -r
# in case electrad do not start 
# sudo rm $(which ignite)
# sudo curl https://get.ignite.com/cli! | sudo bash\\
##################################################################################################################
clear
ignite scaffold chain electra --no-module --address-prefix electra --clear-cache 

git init electra
cd electra
git remote add origin https://github.com/Alkia/electra.git
https://github.com/Alkia/electra.git
git add .
git commit -m "scaffold electra chain"
ignite scaffold module meter --dep bank --params maxBillingIteration:uint,moduleParamBestForCustomer:bool,payAutomatically:bool,billingAdmin:string -y
# Git Save
git add .
git commit -am "scaffold electra meter module"
# Create the meterreadings map-list
ignite scaffold map meterreadings phase:uint whin:uint whout:uint mvolt:uint mhertz:uint mpf:uint maxmi:uint --index deviceID:string,timestamp:uint --module meter --no-message -y
# Create the record command to store the monophased meterreadings in the blockchain
ignite scaffold message record timestamp:uint phase:uint whin:uint whout:uint mvolt:uint mhertz:uint mpf:uint maxmi:uint --desc "Post a monophase meter reading on the chain" --module meter -y
# Create the record command to store the three-phased meterreadings in the blockchain
ignite scaffold message record3 timestamp:uint whin1:uint whout1:uint mvolt1:uint mhertz1:uint mpf1:uint maxmi1:uint whin2:uint whout2:uint mvolt2:uint mhertz2:uint mpf2:uint maxmi2:uint whin3:uint whout3:uint mvolt3:uint mhertz3:uint mpf3:uint maxmi3:uint --desc "Post a tri-phase meter reading on the chain" --module meter -y
# Map-List the directory of authorized smartmeters
ignite scaffold map meterdirectory model:string installationdate:uint address:string ownerlastname:string  ownerfirstname:string ownerphone:string gpsjson:string active:bool triphased:bool phasenbmono:uint --index deviceID:string,barcodeserial:string --module meter --no-message -y
# Select the meter recordings Beteween a start and end timestamps
ignite scaffold query listrecordings deviceID:string start:uint end:uint byUnixTime:bool --response listrecording,comments:string,total:uint --module meter --desc "List the recordings from START to END [when byUnixTime=true parameters are interpreted as unix DateTime timestams]" -y
git add .
git commit -am "scaffold electra meter module messages maps & queries"
###################################################################################################################
# Map-List the producer's Power Purchase Contract PPC| for billing purpose
ignite scaffold map powerPurchaseContract contractName:string contractActive:bool contractPhase:uint contractForAll:bool contractForAllPrice:uint contractForAllCurency:string contractForAllActivePeriod:string contractPreferred:bool contractPreferredPrice:uint contractPreferredActivePeriod:string contractPreferredCurency:string contractStartDate:uint contractEndDate:uint Phase1remainingWh:uint Phase2remainingWh:uint Phase3remainingWh:uint --index contractID:string,contractDeviceID:string  --module meter -y
#cp ./scripts/custo/meter/msg_server_create_power_purchase_contract.go ./x/meter/keeper/
git add .
git commit -am "scaffold electra powerPurchaseContract message"
##################################################################################################################
# List the subscriptions from a Consumer to a PPC contract
ignite scaffold map ppaMap producerDeviceID:string agreementStartDate:uint agreementEndDate:uint --index consumerDeviceID:string,agreementID:string,agreementActive:bool,contractID:string --module meter -y
# Billing Cycle
ignite scaffold map billingcycles start:uint end:uint whin:uint whout:uint moneyin:uint moneyout:uint curency:string  --index cycleID:uint --module meter -y		 
# Le concesuss sur une bill est le checksum du tableau [customer][producer][amount][prices] le fingerprint etant le [TotalTurnover][curency][#consumers][#producers]   
# Type Bcustomer illingLine
ignite scaffold map customerbillingline producerDeviceID:string billContractID:string lineWh:uint lineWhPrice:uint curency:string decremented:uint phase:uint --index customerdeviceID:string,cycleID:uint,lineid:uint --module meter -y
# Display the content of one customer bill
##
## 
ignite scaffold query getcustomerbill customerdeviceID:string billCycleID:uint --response listofbillinglines,billTotalWh:uint,billTotalPrice:uint,curency:string,nblines:uint,comments:string --module meter --desc "dispaly the customer bill from Cycle ID or START to END [parameters are interpreted as unix DateTime timestams]" -y
# Map-list customer bills
ignite scaffold map customerbills billDate:uint billTotalWh:uint billTotalPrice:uint billCurrency:string billValid:bool paid:bool --index billCycleID:uint,customerdeviceID:string --module meter -y
# Select the customer bills Beteween a start and end timestamps
#ignite scaffold query listcustomerbills customerdeviceID:string start:uint end:uint billCycleID:uint paid:bool --response listofbills,total:uint --module meter --desc "List the customer bills from START to END [parameters are interpreted as unix DateTime timestams]" -y
#
ignite scaffold map producerbillingline customerdeviceID:string billContractID:string lineWh:uint lineWhPrice:uint curency:string decremented:uint phase:uint --index producerDeviceID:string,cycleID:uint,lineid:uint --module meter -y
# Display the content of one producer bill
##
## 
ignite scaffold query getproducerbill producerdeviceID:string billCycleID:uint  --response listofbillinglines,billTotalWh:uint,billTotalPrice:uint,curency:string,nblines:uint,comments:string --module meter --desc "dispaly the producer bill from Cycle ID or START to END [parameters are interpreted as unix DateTime timestams]" -y
# Map-list producer bills
ignite scaffold map producerbills billDate:uint billTotalWh:uint billTotalPrice:uint billCurrency:string billValid:bool paid:bool --index billCycleID:uint,producerdeviceID:string --module meter -y
# Select the customer bills Beteween a start and end timestamps
# ignite scaffold query listproducerbills producerdeviceID:string start:uint end:uint billCycleID:uint paid:bool --response listofbills,total:uint --module meter --desc "List the producer bills from START to END [parameters are interpreted as unix DateTime timestams]" -y	 


git add .
git commit -am "scaffold electra billing in meter module"

# Give the rights and Copy the scripts
chmod a+x ~/electra01/scripts/custo/integration_tests/*.*
cp ~/electra01/scripts . -r

cp ./scripts/custo/public ./vue -r
cp ./scripts/custo/vue/index.html ./vue
cp ./scripts/custo/config.yml .
cp ./scripts/custo/readme.md .

# Coding meter parameters
cp ./scripts/custo/meter/params.go ./x/meter/types/
# Coding meter record & record3phases messages
cp ./scripts/custo/meter/msg_server_record.go ./x/meter/keeper/
cp ./scripts/custo/meter/msg_server_record_3.go ./x/meter/keeper/
cp ./scripts/custo/meter/query.proto ./proto/meter/
#cp ./scripts/custo/meter/tx.proto ./proto/meter/
cp ./scripts/custo/meter/grpc_query_listrecordings.go ./x/meter/keeper/
# coding power_purchase_contract 
cp ./scripts/custo/meter/msg_server_power_purchase_contract.go ./x/meter/keeper/
# cp ./electra01/scripts/custo/meter/msg_server_power_purchase_contract.go ./x/meter/keeper/ 
# Add electra logo
cp ./scripts/custo/vue/SpNavbar.vue ./vue/node_modules/@starport/vue/src/components/SpNavbar/
#
cp ./scripts/custo/meter/grpc_query_getcustomerbill.go x/meter/keeper/
cp ./scripts/custo/meter/grpc_query_getproducerbill.go x/meter/keeper/
##################################################################################################################
git add .
git commit -am "Customize the code in meter module"
# ignite g vuex --proto-all-modules --clear-cache -y

##################################################################################################################
# Add any new scaffolding here to not overwrite existing proto changes query.proto and tx.proto
##################################################################################################################
# Querry find the latest cycle
# 
# Message Prepare the Bill
# cycle-id 
# Message Pay the bill
# cycle-id 
##################################################################################################################
# END any new scaffolding here to not overwrite existing proto changes query.proto and tx.proto
##################################################################################################################

end=`date +%s`
echo Execution time was `expr $end - $start` seconds.
#git push --set-upstream origin master --force
# ignite chain serve -r
rm ~/scaffold_ALL_electra_script.sh

code .
ignite chain serve
##################################################################################################################