import { ethers } from 'ethers'
import { JsonRpcProvider, Provider } from '@ethersproject/providers'
import * as acapunks from './contract-meta'

export function isMetaMskInstalled() {
  return typeof window.ethereum !== 'undefined'
}

let provider: undefined | JsonRpcProvider = undefined
export function getUserProvider(): JsonRpcProvider {
  if (provider === undefined) {
    provider = new ethers.providers.Web3Provider(window.ethereum!)
  }
  return provider
}

export async function connectToWallet(): Promise<boolean> {
  if (!isMetaMskInstalled()) {
    return false
  }
  const provider = getUserProvider() as JsonRpcProvider
  // Prompt user for connecting metamask
  await provider.send('eth_requestAccounts', [])
  // Require user to change network
  await provider.send('wallet_switchEthereumChain', [
    { chainId: '0x' + acapunks.metaMaskChainId.toString(16) }
  ])
  return true
}

let defaultProvider: undefined | Provider = undefined
export function getAnonymousProvider(): Provider {
  if (defaultProvider === undefined) {
    defaultProvider = ethers.getDefaultProvider(acapunks.network)
  }
  return defaultProvider
}
