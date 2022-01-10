import { ethers } from 'ethers'
import { JsonRpcProvider, Provider } from '@ethersproject/providers'
import * as acapunks from './contract-meta'

export const noMetaMask = Symbol()
export const disconnected = Symbol()
export const invalidChain = Symbol()

export async function connectToWallet(): Promise<JsonRpcProvider | undefined> {
  if (window.ethereum !== undefined) {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    // Prompt user for connecting metamask
    await provider.send('eth_requestAccounts', [])
    // Require user to change network
    await provider.send('wallet_switchEthereumChain', [
      { chainId: '0x' + acapunks.metaMaskChainId.toString(16) }
    ]) // ropsten
    return provider
  }
}

export function getWallet(): JsonRpcProvider | undefined {
  if (window.ethereum !== undefined) {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    return provider
  }
}

export async function addWalletListener(
  callback: (addr: string | symbol) => void
): Promise<void> {
  if (window.ethereum === undefined) {
    callback(noMetaMask)
    return
  }

  // Init the result
  const provider = getWallet()
  let [currAddr]: string[] = await provider!.send('eth_accounts', [])
  let currChainId = +window.ethereum!.networkVersion

  function updateCallback() {
    if (!currAddr) callback(disconnected)
    else if (currChainId !== acapunks.metaMaskChainId) callback(invalidChain)
    else callback(currAddr)
  }
  updateCallback()

  // Register listeners
  window.ethereum.on('accountsChanged', (addresses: string[]) => {
    currAddr = addresses[0]
    updateCallback()
  })
  window.ethereum.on('chainChanged', (chainId: string) => {
    currChainId = +chainId
    updateCallback()
  })
}

let defaultProvider: null | Provider = null
export function getAnonymousProvider(): Provider {
  if (!defaultProvider) {
    defaultProvider = ethers.getDefaultProvider(acapunks.network)
  }
  return defaultProvider
}
