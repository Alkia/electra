#!/bin/bash

#define variables

set -x # run in debug mode
DURATION=60 # how long should load be applied ? - in seconds
TPS=3 # number of test users # translates to requests per second (should do one transaction each 5 second)
end=$((SECONDS+$DURATION))

# start time
date +"%H:%M:%S"

# start load
while [ $SECONDS -lt $end ];
do
        for ((i=1;i<=$TPS;i++)); do
                v=$(($i+220))
                user=test + $v
                electrad tx electra post-2-map 1 100 $v --from  $user -y &
                sleep 0.5
        done
        sleep 1
done
# end load

# end time
date +"%H:%M:%S"

wait

echo "Load test has been completed"