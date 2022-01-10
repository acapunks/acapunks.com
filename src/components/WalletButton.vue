<template>
  <button @click="connectToWallet">{{ address ? address.substring(0, 12) : value }}</button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  addWalletListener,
  connectToWallet,
  getWalletAddress
} from '@/services/wallet'

const address = ref(undefined as undefined | string)
async function bindMetaMask(): Promise<void> {
  address.value = await getWalletAddress()
  addWalletListener(x => (address.value = x))
}

defineProps<{ value: { type: String, required: true } }>()
onMounted(() => bindMetaMask())
</script>
