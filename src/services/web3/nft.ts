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

export interface NftMeta {
  tokenId: number
  imageUrl: undefined | string
}

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

export async function getOwnedNftCount(addr: string): Promise<number> {
  return 1
  const ret: BigNumber = await acapunks.getReadonlyContract().balanceOf(addr)
  return ret.toNumber()
}

async function getNftUrlByTokenId(tokenId: number): Promise<string> {
  // a fake 50 ms delay for fetching url using index
  await new Promise(res => setTimeout(res, 50))

  // In test phase just return random image anyway
  return 'https://picsum.photos/id/' + ((tokenId % 64) + 1) + '/64'
}

async function getNftUrlByAddressIndex(
  addr: string,
  index: number,
  dest: Array<null | NftMeta>
): Promise<void> {
  const contract = acapunks.getReadonlyContract()
  const _tokenId: BigNumber = await contract.tokenOfOwnerByIndex(addr, index)
  const tokenId = _tokenId.toNumber()
  const imageUrl = await getNftUrlByTokenId(tokenId)
  dest[index] = { tokenId, imageUrl }
}

export async function fetchNftMeta(
  addr: string,
  offset: number,
  count: number,
  dest: Array<null | NftMeta>
): Promise<void> {
  // Load 15 elements at once to prevent rate limits
  const limit = 5
  const delay = 1000
  for (let i = offset; i < offset + count; i++) {
    if (i - offset > 0 && (i - offset) % limit === 0)
      await new Promise(res => setTimeout(res, delay))
    getNftUrlByAddressIndex(addr, i + offset, dest) // fire and forget
  }
}
