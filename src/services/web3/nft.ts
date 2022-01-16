// https://docs.ethers.io/v5/api/contract/contract/#Contract
// https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721Enumerable.sol

import { BigNumber, ethers } from 'ethers'
import { TransactionResponse } from '@ethersproject/providers'
import * as acapunks from './contract-meta'
import { getUserProvider, getAnonymousProvider } from './wallet'

const requiredConfirmCount = 3 // TODO: how many?
const whitelistKey = new Uint8Array() // ethers.utils.arrayify('0x1234') will be changed when acala network is online

export async function mint(count: number): Promise<() => Promise<void>> {
  const _count = { value: ethers.utils.parseUnits(count.toString(), '16') }
  const ta: TransactionResponse = await acapunks
    .getContract(getUserProvider().getSigner())
    // count, key, mint count
    .mint(count, whitelistKey, _count)

  // throws error if the user is poor

  // minting; returns back now
  return async function (): Promise<void> {
    await ta.wait(requiredConfirmCount)
    // minted or failed
  }
}

export async function getNftCount(addr: string): Promise<number> {
  const ret: BigNumber = await acapunks.getReadonlyContract().balanceOf(addr)
  return ret.toNumber()
}

async function getNftUri(addr: string, index: number) {
  const contract = acapunks.getReadonlyContract()
  const tokenId: BigNumber = await contract.tokenOfOwnerByIndex(addr, index)

  // In test phase just return token id
  return tokenId.toNumber()
  
  // In production return the metadata
  const result: string = await contract.tokenURI(tokenId)
  return result
}

export function getNfts(addr: string, offset: number, count: number) {
  const tasks = [...Array(count).keys()].map(i => getNftUri(addr, i + offset))
  return Promise.all(tasks)
}
