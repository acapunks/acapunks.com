import * as acapunksContract from './contract-meta'
import { ethers } from 'ethers'
import { getWallet } from './wallet'

const poopooKey = ethers.utils.arrayify(
  '0x525b97ee356971c896d04ead6fe238dcc71c38e590cf23a967b33ec5e5b2b2cf50d959a6658b79d1896ff3047ec98ae4e82434d8fb0f4c3b791a16710ff0f1471c'
)

export async function mint(count: number): Promise<void> {
  const provider = await getWallet()
  if (provider !== undefined) {
    const signer = provider.getSigner()
    const cAcapunk = new ethers.Contract(
      acapunksContract.address,
      acapunksContract.abi
    )
    await cAcapunk.connect(signer).mint(count, poopooKey, {
      value: ethers.utils.parseUnits('20', '15')
    })
  }
}

/*
user = new Wallet(connect to metamask)
cACAPunk = new ethers.Contract(address, ABI)
cACAPunk.connect(user).mint(n)
*/
