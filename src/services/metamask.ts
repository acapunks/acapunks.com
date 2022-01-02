import { ExternalProvider } from '@ethersproject/providers'

interface MetaMask {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  on(method: string, callback: (...args: any) => any): void
}

declare global {
  interface Window {
    ethereum: (MetaMask & ExternalProvider) | undefined
  }
}
