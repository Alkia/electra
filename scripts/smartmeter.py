#!/usr/bin/env python
# -*- coding: utf-8 -*-
# Initial work: Joost Baltissen
# 2016.10.xx: Romain Aviolat -> added argument support
#                            -> send output to Influxdb
# 2023.01.08 Maxime CARPENTIER -> send output to Electra blockchain

import sys,time,serial,struct,numpy,requests,argparse
from influxdb import InfluxDBClient

class smartmeter():
    def __init__(self):
        self.ser = serial.Serial(
            port = '/dev/ttyUSB0',
            baudrate = '300',
            parity=serial.PARITY_EVEN,
            bytesize=serial.SEVENBITS,
            stopbits=serial.STOPBITS_ONE,
            xonxoff = 0,
            rtscts = 0,
            timeout = 20
         )

    def readData(self, source=None, event=None):

        while True:

            self.ser.close()
            #self.ser.open()
            try:
                self.ser.open()
            except:
                sys.exit ("Error while opening serial-port:"  % self.ser.port)

            request = struct.pack('BBBBB', 0x2F, 0x3F, 0x21, 0x0D, 0x0A)
            self.ser.write(request)
            time.sleep(.2)                    #give time to send
            self.ser.flushInput()
            tdata = self.ser.read()           # Wait forever for anything
            time.sleep(1)                     # Sleep (or inWaiting() doesn't give the correct value)
            data_left = self.ser.inWaiting()  # Get the number of characters ready to be read
            tdata += self.ser.read(data_left) # Do the read and combine it with the first character

            self.ser.flushInput()
            intString = numpy.frombuffer(tdata, numpy.uint8)
            Baudrate = tdata[4]
            ModID = tdata[6]
            intBaudrate = numpy.frombuffer(Baudrate, numpy.int8)
            ack= struct.pack('BBBBBB',0x06,0x30,0x30,0x30,0x0D,0x0A)
            self.ser.write(ack)
            print ack
            time.sleep(.02)

            self.ser.flushInput()
            tdata = self.ser.read()           # Wait forever for anything
            time.sleep(12)                    # Sleep (or inWaiting() doesn't give the correct value)
            data_left = self.ser.inWaiting()  # Get the number of characters ready to be read
            tdata += self.ser.read(data_left) # Do the read and combine it with the first character
            self.ser.close()
        
            start = tdata.find('1.8.1')+6
            end = tdata.find('*', start)
            use_high = float(tdata[start:end])

            start = tdata.find('1.8.2')+6
            end = tdata.find('*', start)
            use_low = float(tdata[start:end])

            start = tdata.find('2.8.1')+6
            end = tdata.find('*', start)
            prod_high = float(tdata[start:end])

            start = tdata.find('2.8.2')+6
            end = tdata.find('*', start)
            prod_low = float(tdata[start:end])

            start = tdata.find('31.7(')+5
            end = tdata.find('*', start)

            values={'use_low':use_low, 
                    'use_high':use_high, 
                    'prod_low':prod_low, 
                    'prod_high':prod_high}
            
            stacked_json = []
            
            for val in values:
            
                json_body = {
                    "measurement": val,
                    "tags": {
                        "host": "smartmeter"
                    },
                    "fields": {
                        "value": values[val]
                    }
                }
            
                stacked_json.append(json_body)
            
            print(stacked_json)

            client = InfluxDBClient('localhost', 8086, 'user', 'pass', 'smartmeter_db')
            client.write_points(stacked_json)

            time.sleep(30)

            
if __name__ == '__main__':

    device = smartmeter()

    parser = argparse.ArgumentParser()
    parser.add_argument('-d', '--device', help="Specify the device ex: /dev/ttyUSB0", required=True)
    parser.add_argument('-D', '--daemon', action="store_true", help="Fork and run in background")
    args = parser.parse_args()
                    
    #device.ser.port = args.device

    if args.daemon:

        if os.fork()==0:
            os.setsid()
            sys.stdout=open("/dev/null", 'w')
            sys.stdin=open("/dev/null", 'r')

            if os.fork()==0:
                device.readData()
            sys.exit(0)

    else:

        device.readData()
