#!/usr/bin/env bash
rm ~/electra/billing.log
./1-record.sh  
./2-QueryListrecordings.sh  
./3-PPC.sh  
./4-PPA.sh  
.//6-Billing.sh
echo "######### DONE ###########"
