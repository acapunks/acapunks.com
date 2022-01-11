<template>
  <section scroll="no" id="landing" class="w-100 h-screen-no-navbar lg:flex items-center">
    <div class="lg:container lg:mx-auto lg:flex lg:items-center px-4">
      <div class="lg:w-2/3 pt-12">
        <h1 class="text-transparent text-4xl lg:text-7xl font-black leading-tight mb-6">AcaPunks</h1>
        <h2 class="text-gray-50 text-xl lg:text-4xl leading-relaxed">Your virtual identity on the Acala Network</h2>
      </div>
      <div class="grow flex justify-center items-center py-24">
        <figure class="shadow-lg">
          <img src="@/assets/images/mint.gif" width="280" height="280" class="shadow" />
          <figcaption class="bg-white rounded-bottom">
            <div class="py-6 flex flex-col items-center bg-gray-50" style="box-shadow: inset 0px 4px 4px -4px #AAA, inset 0px -4px 4px -4px #AAA">
              <input v-model="mintCount" type="range" min="1" max="10" class="mint-bar mb-3 w-full block" style="width: 80%" />
              <button class="block w-full py-2 border rounded-full border-acared text-acared active:text-white hover:shadow active:bg-acared active-bg-opacity-1 transition-colors disabled:opacity-50 disabled:text-acared disabled:bg-inherit disabled:shadow-none" style="width: 60%" @click="onMint" :disabled="!mintable || minting">
                <span v-if="minting">Minting...</span>
                <span v-else>
                  Mint
                  <span class="inline-block text-right" style="width: 1em">{{ mintCount }}</span>
                </span>
              </button>
            </div>
            <div class="text-center py-6" style="font-weight: 600">{{ remNftMsg }}</div>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>

  <div v-if="minting" id="page-mask" class="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-80 z-20">
    <div id="mint-loading" class="w-full h-full flex flex-col justify-center text-center">
      <spinner />
      <h3 class="mt-6 text-3xl font-bold text-gray-50">
        <span>Minting...</span>
      </h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
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

async function onMint() {
  // start mint
  const fb = await mint(mintCount.value)
  // minting
  minting.value = true
  await fb()
  // minted
  minting.value = false
}
</script>

<style lang="scss">
@import "@/assets/scss/color";

#landing {
  background: $acagradient-light;
  min-height: calc(100vh - 72px);

  h1 {
    background: $acagradient-reverse;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(2px 2px rgba(0, 0, 0, 0.3));
  }

  h2 {
    filter: drop-shadow(2px 2px rgba(0, 0, 0, 0.3));
  }
}

#mint-loading {
  h3 {
    span {
      background: $acagradient;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
