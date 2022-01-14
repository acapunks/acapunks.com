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

let defaultProvider: undefined | Provider = undefined
export function getAnonymousProvider(): Provider {
  if (!defaultProvider) {
    defaultProvider = ethers.getDefaultProvider(acapunks.network)
  }
  return defaultProvider
}
