declare global {
  interface Window {
    ethereum: any
  }
}

const addrContract = '0x0A1e3805af3113Fd9A0E4A6b4f3c6B836a6F387e'

export function isMetaMaskInstalled(): boolean {
  return typeof window.ethereum !== 'undefined'
}

export async function connectToWallet(): Promise<string | undefined> {
  const addresses: Array<string> = await window.ethereum.request({
    method: 'eth_requestAccounts'
  })

  /*
  if (addresses.length === 0) {
    alert('You have no account')
    return null
  }

  alert('The address is ' + addresses[0])
  */
  return addresses[0]
}

export async function getCurrentConnectedWallet(): Promise<string | undefined> {
  const addresses: Array<string> = await window.ethereum.request({
    method: 'eth_accounts'
  })
  return addresses[0]
}

export function addWalletListener(
  callback: (addr: string | undefined) => void
): void {
  window.ethereum.on('accountsChanged', (addresses: string[]) => {
    console.log(addresses[0])
    callback(addresses[0])
  })
}
