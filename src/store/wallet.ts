import assert from 'assert'
import { defineStore } from 'pinia'
import * as acapunks from '@/services/web3/contract-meta'
import { getProvider, isMetaMskInstalled } from '@/services/web3/wallet'

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
  if (!isMetaMskInstalled()) {
    // No metamask detected
    return
  }
  assert(window.ethereum !== undefined)

  const self = getWalletStore()

  // Init the result
  const provider = getProvider()
  let [currAddr]: string[] = await provider.send('eth_accounts', [])
  let currChainId = +window.ethereum.networkVersion

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
