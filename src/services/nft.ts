// https://docs.ethers.io/v5/api/contract/contract/#Contract
// https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse

import { ethers, utils } from 'ethers'
import { TransactionResponse } from '@ethersproject/providers'
import * as acapunks from './contract-meta'

const requiredConfirmCount = 10
const poopooKey = ethers.utils.arrayify('') // will be changed when acala network is online

export async function mint(count: number): Promise<() => Promise<void>> {
  const provider = new ethers.providers.Web3Provider(window.ethereum!)
  const signer = provider.getSigner()

  const ctrAca = new ethers.Contract(acapunks.address, acapunks.abi)
  const _count = { value: ethers.utils.parseUnits(count.toString(), '16') }
  const ta: TransactionResponse = await ctrAca
    .connect(signer)
    // count, key, mint count
    .mint(count, poopooKey, _count)

  // throws error if the user is poor

  // minting; returns back now

  return async function (): Promise<void> {
    await ta.wait(requiredConfirmCount)
    // minted or throws error
  }
}
