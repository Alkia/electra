Miscellaneous Encoding Utilities for Crypto-related Objects in JavaScript
--
[![npm version](https://badge.fury.io/js/js-encoding-utils.svg)](https://badge.fury.io/js/js-encoding-utils)
[![CircleCI](https://circleci.com/gh/junkurihara/jseu.svg?style=svg)](https://circleci.com/gh/junkurihara/jseu)
[![Dependencies](https://david-dm.org/junkurihara/jseu.svg)](https://david-dm.org/junkurihara/jseu)
[![codecov](https://codecov.io/gh/junkurihara/jseu/branch/develop/graph/badge.svg)](https://codecov.io/gh/junkurihara/jseu)
[![Maintainability](https://api.codeclimate.com/v1/badges/771abd93ae5d986f1e0a/maintainability)](https://codeclimate.com/github/junkurihara/jseu/maintainability)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


> **WARNING**: At this time this solution should be considered suitable for research and experimentation, further code and security review is needed before utilization in a production application.

# Introduction and Overview
This library is being developed to handle cryptographic data objects, e.g., PEM-formatted X.509 certificate, in JavaScript. Note that this library provides no cryptographic functions like encryption, but provides encoders, decoders and formatters of data formats related to cryptographic data objects. In particular, this introduces Base64(Url)-ArrayBuffer en/decoder, HexString-ArrayBuffer en/decoder and PEM-Binary formatter at this point. Moreover, this library is designed to be 'universal', i.e., it works both on most browsers and on Node.js just by importing from npm/source code.


# Installation
At your project directory, do either one of the following.

- From npm/yarn:
  
  ```shell
  $ npm install --save js-encoding-utils // npm
  $ yarn add js-encoding-utils // yarn
  ```
  
- From GitHub:
  ```shell
  $ git clone https://github.com/junkurihara/jseu.git
  ```
  
Then you should import the package as follows.
```javascript
import jseu from 'js-encoding-utils'; // for npm
import jseu from 'jseu/dist/index.js'; // for github
```
  
# Usage
## Base64 <-> Binary
```javascript
// msg is an ArrayBuffer or Typed Array 
const encoded = jseu.encoder.encodeBase64(msg);
// now you get Base64 string

const decoded = jseu.encoder.decodeBase64(encoded);
// now you get the original message in Uint8Array 
```

## Base64Url <-> Binary
```javascript
// msg is an ArrayBuffer or Typed Array 
const encoded = jseu.encoder.encodeBase64Url(msg);
// now you get Base64Url string

const decoded = jseu.encoder.decodeBase64Url(encoded);
// now you get the original message in Uint8Array 
```

## HexString <-> Binary
```javascript
// msg is an ArrayBuffer or Typed Array 
const encoded = jseu.encoder.arrayBufferToHexString(msg);
// now you get the hex-stringified message string

const decoded = jseu.encoder.hexStringToArrayBuffer(encoded);
// now you get the original message in Uint8Array
```

## PEM <-> Binary (usually DER encoding)
```javascript
// X.509 formatted certificate
const certPEM ='-----BEGIN CERTIFICATE-----...';

const binCert = jseu.formatter.pemToBin(certPEM);
// now you get the DER encoded certificate in Uint8Array

const pemCert = jseu.formatter.binToPem(binCert, 'certificate');
// now you get the original certificate.
```

# License
Licensed under the MIT license, see `LICENSE` file.
