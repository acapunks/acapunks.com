<template>
  <button class="disabled:opacity-50" @click="connectMetaMask" :disabled="operating">{{ text }}</button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  addWalletListener,
  connectToWallet,
  disconnected,
  invalidChain
} from '@/services/wallet'

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
const text = ref(props.connectHint)

function bindMetaMask() {
  function updateText(x: string | symbol) {
    if (x == disconnected) text.value = props.connectHint
    else if (x === invalidChain) text.value = props.switchHint
    else {
      const addr = x as string
      text.value = addr.substring(0, 8) + '...' + addr.substring(addr.length - 6, addr.length)
    }
  }
  addWalletListener(updateText)
}

async function connectMetaMask() {
  try {
    operating.value = true
    await connectToWallet()
  } finally {
    operating.value = false
  }
}

onMounted(() => {
  bindMetaMask()
})
</script>
