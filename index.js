import bech32 from 'https://cdn.skypack.dev/bech32-buffer'

export function encodeBech32mAddress(publicKey) {
  const taprootPrefix = 'tb'
  const witnessVersion = 0
  const publicKeyBuffer = Uint8Array.from(
    publicKey.match(/.{1,2}/g).map(byte => parseInt(byte, 16))
  )

  const btcAddress = new bech32.BitcoinAddress(
    taprootPrefix,
    witnessVersion,
    publicKeyBuffer
  )
  return btcAddress.encode()
}

