<template>
  <button @click="connectToWallet">{{ address ? address.substring(0, 12) : value }}</button>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import {
  addWalletListener,
  connectToWallet,
  getWalletAddress
} from '@/store/wallet'

export default defineComponent({
  name: 'WalletButton',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  setup() {
    const address = ref(undefined as undefined | string)

    async function bindMetaMask(): Promise<void> {
      address.value = await getWalletAddress()
      addWalletListener(x => (address.value = x))
    }

    onMounted(() => bindMetaMask())

    return {
      address,
      connectToWallet
    }
  }
})
</script>
