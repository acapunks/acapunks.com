<template>
  <button class="disabled:opacity-50" @click="connectToMetaMask" :disabled="operating">{{ text }}</button>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { connectToWallet } from '@/services/web3/wallet'
import { useWalletStore } from '@/store/wallet'

const props = defineProps({
  connectHint: {
    type: String,
    required: true
  },
  switchHint: {
    type: String,
    required: true
  }
})

const operating = ref(false)
const walletStore = useWalletStore()
const text = computed(() => {
  if (walletStore.address === null) return props.connectHint
  if (!walletStore.validChain) return props.switchHint
  return walletStore.address.substring(0, 8) + ' ... ' + walletStore.address.substring(walletStore.address.length - 6)
})

async function connectToMetaMask() {
  try {
    operating.value = true
    await connectToWallet()
  } finally {
    operating.value = false
  }
}
</script>
