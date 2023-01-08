# smartmeter.py: extract data from "smart" power-meters

This tool reads the values contained inside Landis+Gyr
power-meters and sends the output to Influxdb. It has been 
tested with the E230 model but I guess that it should work 
with other IEC 62056 compliant devices too.

I'm using an USB infrared probe to read the data, I bought mine on
Ebay for 30$, but you can create yours if you have time ;)

* http://www.optical-probe.de/Optical%20probes/op200.html
* http://wiki.volkszaehler.org/hardware/controllers/ir-schreib-lesekopf

# install

Install few dependencies using pip

* pyserial
* influxdb

# configure

You'll have to statically set the Influxdb server IP address +
database settings inside the code for now.

# run

``$ ./smartmeter.py -d /dev/ttyUSB0`` 
