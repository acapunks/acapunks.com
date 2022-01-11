import { defineStore } from 'pinia'
import { ethers, BigNumber, utils } from 'ethers'
import * as acapunks from '@/services/contract-meta'
import { getAnonymousProvider } from '@/services/wallet'

const getNftStore = defineStore('nft', {
  state: () => {
    return {
      sold: undefined as undefined | number
    }
  },
  getters: {
    remaining: state =>
      state.sold === undefined ? undefined : acapunks.totalNftCount - state.sold
  }
})

async function init() {
  const provider = getAnonymousProvider()
  const cAcapunk = new ethers.Contract(acapunks.address, acapunks.abi)
  const sold: BigNumber = await cAcapunk.connect(provider).totalSupply()
  const self = getNftStore()
  self.sold = sold.toNumber()

  const filter = {
    address: acapunks.address,
    topics: [utils.id('Transfer(address,address,uint256)')]
  }
  provider.on(filter, () => self.sold!--)
}

let initialized = false
export function useNftStore() {
  if (!initialized) {
    init() // fire and forget
    initialized = true
  }
  return getNftStore()
}
