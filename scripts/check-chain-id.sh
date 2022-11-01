#!/bin/bash

CONTAINER_NAME="electra-node-1"
CHAIN_ID=$(docker exec -i $CONTAINER_NAME electrad status --node http://localhost:1711 | jq ".NodeInfo.network" -r)
if [ $CHAIN_ID == "electra" ]
then 
    echo "success: chain id is electra"
else
    echo "chain id is not electra"
    exit 1
fi