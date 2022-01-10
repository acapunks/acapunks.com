import { ExternalProvider } from '@ethersproject/providers'

interface MetaMask {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  networkVersion: string
  on(method: string, callback: (...args: any) => any): void
}

export interface ConnectInfo {
  chainId: string
}

declare global {
  interface Window {
    ethereum: (MetaMask & ExternalProvider) | undefined
  }
}
