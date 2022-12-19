//ignite scaffold chain electra --no-module --address-prefix electra --clear-cache
ignite scaffold module meter --dep bank --params maxBillingIteration:uint,moduleParamBestForCustomer:bool,payAutomatically:bool,billingAdmin:string 
git add .
git commit -m "scaffold electra chain and meter module"
