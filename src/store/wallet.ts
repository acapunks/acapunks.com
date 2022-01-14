import { defineStore } from 'pinia'
import { ethers } from 'ethers'
import * as acapunks from '@/services/web3/contract-meta'

export const disconnected = Symbol()
export const invalidChain = Symbol()
type Address = string | typeof disconnected | typeof invalidChain

const getWalletStore = defineStore('wallet', {
  state: () => {
    return {
      address: disconnected as Address
    }
  },
  actions: {
    async registerWalletListener() {}
  }
})

async function init() {
  if (window.ethereum === undefined) {
    // No metamask detected
    return
  }

  const self = getWalletStore()

  // Init the result
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  let [currAddr]: string[] = await provider!.send('eth_accounts', [])
  let currChainId = +window.ethereum!.networkVersion

  function updateCallback() {
    if (!currAddr) {
      // not connected or connected but no account
      self.address = disconnected
    } else if (currChainId !== acapunks.metaMaskChainId) {
      // connected with at least one account but wrong chain
      self.address = invalidChain
    } else {
      // connected at correct chain and has at least one account
      self.address = currAddr
    }
  }

  // register listeners
  window.ethereum.on('accountsChanged', (addresses: string[]) => {
    // detect disconnecting or account changed event
    currAddr = addresses[0] // undefined if disconnected
    updateCallback()
  })
  window.ethereum.on('chainChanged', (chainId: string) => {
    // detect chain changed event
    currChainId = +chainId
    updateCallback()
  })

  // update right now
  updateCallback()
}

let initialized = false
export function useWalletStore() {
  if (!initialized) {
    init() // fire and forget
    initialized = true
  }
  return getWalletStore()
}
