#!/bin/bash

NODE_PORT="1350"
CONTAINER_NAME="electra-node-1"

# query all accounts
ALL_ACCOUNTS=$(docker exec $CONTAINER_NAME curl -X GET "http://localhost:$NODE_PORT/cosmos/auth/v1beta1/accounts" -H  "accept: application/json" | jq ".accounts[] | select(.address | . != null) | .address" -r)

# query balances
ACCOUNTS_1000000000=0
ACCOUNTS_50000000=0

for account in $ALL_ACCOUNTS
do
    echo "querying account balances of $account"
    # has to be correct balance of denom uelectra
    BALANCE=$(docker exec $CONTAINER_NAME curl -X GET "http://localhost:$NODE_PORT/cosmos/bank/v1beta1/balances/$account" -H  "accept: application/json" | jq '.balances[] | select(.denom | . == "uelectra") | .amount' -r)
    if [ $BALANCE -eq 1000000000 ]
    then 
        let ACCOUNTS_1000000000+=1
    fi
    
    if [ $BALANCE -eq 50000000 ]
    then 
        let ACCOUNTS_50000000+=1
    fi
done

if [ $ACCOUNTS_1000000000 -eq 2 ] && [ $ACCOUNTS_50000000 -eq 1 ]
then
    echo "check-balances passed"
else
    echo "check-balances failed"
    exit 1
fi