import { defineStore } from 'pinia'
import * as acapunks from '@/services/web3/contract-meta'
import { getUserProvider, isMetaMskInstalled } from '@/services/web3/wallet'

const getWalletStore = defineStore('wallet', {
  state: () => {
    return {
      address: null as string | null,
      validChain: false
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

  const self = getWalletStore()

  // Init the result
  const provider = getUserProvider()
  let [currAddr]: string[] = await provider.send('eth_accounts', [])
  let currChainId = +window.ethereum!.networkVersion

  function updateCallback() {
    if (!currAddr) {
      // not connected or connected but no account
      self.address = null
      self.validChain = false
    } else {
      // connected at correct chain and has at least one account
      self.address = currAddr
      self.validChain = currChainId === acapunks.metaMaskChainId
    }
  }

  // register listeners
  window.ethereum!.on('accountsChanged', (addresses: string[]) => {
    // detect disconnecting or account changed event
    currAddr = addresses[0] // undefined if disconnected
    updateCallback()
  })
  window.ethereum!.on('chainChanged', (chainId: string) => {
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
