// https://docs.ethers.io/v5/api/contract/contract/#Contract
// https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse

import { ethers } from 'ethers'
import { TransactionResponse } from '@ethersproject/providers'
import * as acapunks from './contract-meta'
import { getProvider } from './wallet'

const requiredConfirmCount = 3 // TODO: how many?
const whitelistKey = new Uint8Array() // ethers.utils.arrayify('0x1234') will be changed when acala network is online

export async function mint(count: number): Promise<() => Promise<void>> {
  const provider = getProvider()
  const signer = provider.getSigner()
  const ctrAca = new ethers.Contract(acapunks.address, acapunks.abi)
  const _count = { value: ethers.utils.parseUnits(count.toString(), '16') }
  const ta: TransactionResponse = await ctrAca
    .connect(signer)
    // count, key, mint count
    .mint(count, whitelistKey, _count)

  // throws error if the user is poor

  // minting; returns back now
  return async function (): Promise<void> {
    await ta.wait(requiredConfirmCount)
    // minted or failed
  }
}

export async function getNftCount() {}

export async function getNfts(offset: 0, count: 5) {}
