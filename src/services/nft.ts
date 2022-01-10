import { ethers, utils, BigNumber } from 'ethers'
import * as acapunks from './contract-meta'
import { getWallet, getAnonymousProvider } from './wallet'

const poopooKey = ethers.utils.arrayify(
  '0x525b97ee356971c896d04ead6fe238dcc71c38e590cf23a967b33ec5e5b2b2cf50d959a6658b79d1896ff3047ec98ae4e82434d8fb0f4c3b791a16710ff0f1471c'
)

export async function mint(count: number): Promise<() => Promise<void>> {
  const provider = getWallet() as ethers.providers.JsonRpcProvider
  const signer = provider!.getSigner()
  const myAddr = await signer.getAddress()
  const ctrAca = new ethers.Contract(acapunks.address, acapunks.abi)
  // https://docs.ethers.io/v5/api/contract/contract/#Contract--readonly
  await ctrAca.connect(signer).mint(count, poopooKey, {
    value: ethers.utils.parseUnits(count.toString(), '16')
  })

  // Now minting
  return async function (): Promise<void> {
    const filter = {
      address: acapunks.address,
      topics: [
        // the name of the event, parentheses containing the data type of each event, no spaces
        utils.id('Transfer(address,address,uint256)'),
        null,
        utils.hexZeroPad(myAddr, 32)
      ]
    }

    return new Promise(res => {
      let minted = 0
      function callback() {
        minted++
        if (minted == /* don't use === since count may be string */ count) {
          // Remove listener once the transaction is done
          provider!.off(filter, callback)
          res()
        }
      }
      provider.on(filter, callback)
    })
  }
}

export async function getRemainingNftCount(): Promise<number> {
  const provider = getAnonymousProvider()
  const cAcapunk = new ethers.Contract(acapunks.address, acapunks.abi)
  const rem: BigNumber = await cAcapunk.connect(provider).totalSupply()
  return acapunks.totalNftCount - rem.toNumber()
}

export async function onNftSold(listener: () => void) {
  const provider = getAnonymousProvider()
  const filter = {
    address: acapunks.address,
    topics: [
      // the name of the event, parentheses containing the data type of each event, no spaces
      utils.id('Transfer(address,address,uint256)')
    ]
  }
  provider.on(filter, () => listener())
}

/*
user = new Wallet(connect to metamask)
cACAPunk = new ethers.Contract(address, ABI)
cACAPunk.connect(user).mint(n)
*/
