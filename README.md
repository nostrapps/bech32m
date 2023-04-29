

<div align="center">  
  <h1>bech32m</h1>
</div>

<div align="center">  
<i>bech32m</i>
</div>

---

<div align="center">
<h4>Documentation</h4>
</div>

---

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/nostrapps/bech32m/blob/gh-pages/LICENSE)
[![npm](https://img.shields.io/npm/v/bech32m)](https://npmjs.com/package/bech32m)
[![npm](https://img.shields.io/npm/dw/bech32m.svg)](https://npmjs.com/package/bech32m)
[![Github Stars](https://img.shields.io/github/stars/nostrapps/bech32m.svg)](https://github.com/nostrapps/bech32m/)


# Bech32m Encoding Library

This JavaScript library provides a simple and easy-to-use function to encode Bitcoin public keys into Bech32m addresses, specifically for Taproot addresses.

## Usage

To use this library, simply import the `encodeBech32mAddress` function from the `bech32m.js` file and provide a public key as an argument. The function will return the Bech32m-encoded Taproot address.

```javascript
import { encodeBech32mAddress } from './bech32m.js'

const publicKey = '9ecb7085a69535b531c7877662086277804683b598101fe5984c30a371d5aa11'
const taprootAddress = encodeBech32mAddress(publicKey)

console.log(taprootAddress)
```

## Example

An example of how to use the library can be found in the [test.html](https://nostrapps.github.io/bech32m/test.html) file, which demonstrates encoding a public key into a Bech32m address using a simple web interface.

To try it out, open the `test.html` file in your web browser and enter a public key into the input field. Click the "Encode Bech32m Address" button, and the corresponding Bech32m-encoded Taproot address will be displayed on the page.

## References

- [BIP-0350: Bech32m format for v1+ witness addresses](https://github.com/bitcoin/bips/blob/master/bip-0350.mediawiki)
- [BIP-0341: Taproot: SegWit version 1 output spending rules](https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki)


## License

- MIT
