<template>
  <figure class="shadow-lg">
    <img src="@/assets/images/mint.gif" width="280" height="280" class="shadow" />
    <figcaption class="bg-white rounded-bottom">
      <div class="py-6 flex flex-col items-center bg-gray-50" style="box-shadow: inset 0px 4px 4px -4px #AAA, inset 0px -4px 4px -4px #AAA">
        <input v-model="mintCount" type="range" min="1" max="10" class="mint-bar mb-3 w-full block" style="width: 80%" />
        <button class="block w-full py-2 border rounded-full border-aca-red text-aca-red active:text-white hover:shadow active:bg-aca-red active-bg-opacity-1 transition-colors disabled:opacity-50 disabled:text-aca-red disabled:bg-inherit disabled:shadow-none" style="width: 60%" @click="onMint" :disabled="!mintable || minting">
          <span v-if="minting">Minting...</span>
          <span v-else>
            Mint
            <span class="inline-block text-right" style="width: 1em">{{ mintCount }}</span>
          </span>
        </button>
      </div>
      <div class="text-center py-6" style="font-weight: 600">{{ remNftMsg }}</div>
    </figcaption>

    <!-- mask -->
    <div v-if="minting" id="page-mask" class="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-80 z-20" @click="hideMintingPage">
      <div class="w-full h-full flex flex-col justify-center items-center px-8">
        <spinner><img src="@/assets/images/acala-coin.svg" width="64" height="64"></spinner>
        <div class="mt-4 text-center minting">
          <p class="text-3xl font-bold mb-2">Minting...</p>
          <p>click anywhere to close this window or wait until minted</p>
        </div>
      </div>
    </div>
  </figure>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { mint } from '@/services/nft'
import Spinner from '@/components/Spinner.vue'
import { useWalletStore } from '@/store/wallet'
import { useNftStore } from '@/store/nft'

const mintCount = ref(1)
const minting = ref(false)
const walletStore = useWalletStore()
const mintable = computed(() => typeof walletStore.address === 'string')
const nftStore = useNftStore()
const remNftMsg = computed(() => {
  if (nftStore.remaining === undefined) return 'Loading...'
  if (nftStore.remaining === 0) return 'Sold Out!'
  return nftStore.remaining + ' Punks Remaining!'
})

function hideMintingPage() {
  document.body.classList.remove('no-scroll') // unlock scroll
  minting.value = false
}

async function onMint() {
  // start mint
  const fb = await mint(mintCount.value)

  try {
    // minting
    document.body.classList.add('no-scroll') // lock scroll
    minting.value = true
    await fb()
  } finally {
    // mint done or failed
    hideMintingPage()
  }
}

</script>

<style lang="scss">
@import "@/assets/scss/color";
@import "@/assets/scss/mint-bar";

.minting {
  background: $aca-gradient;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
