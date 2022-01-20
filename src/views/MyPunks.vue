<template>
  <!-- https://stackoverflow.com/questions/1462138/event-listener-for-when-element-becomes-visible -->
  <section id="my-punks" class="container mx-auto grow py-20 px-4 flex items-center">
    <div class="w-full">
      <div class="md:flex items-stretch">
        <div class="grow items-center">
          <div class="text-2xl md:text-3xl lg:text-4xl">
            <h1 class="text-center" v-if="address === null">Please connect to the wallet.</h1>
            <h1 class="text-center" v-else-if="nftCount === null">Loading...</h1>
            <h1 class="text-center" v-else-if="nftCount === 0">You have no AcaPunks.</h1>
            <h1 v-else-if="nftCount === 1">You have {{ nftCount }} AcaPunk!</h1>
            <h1 v-else>You have {{ nftCount }} AcaPunks!</h1>
          </div>
          <!-- If the user is connected to a wallet and the page is not loading then show mint hint -->
          <div v-if="address !== null && nftCount !== null" class="mt-1 text-sm md:text-base">
            <p v-if="nftCount === 0" class="text-center">
              <!-- If the user has no acapunks -->
              Click
              <a href="/#mint">here</a> to Mint an AcaPunks!
            </p>
            <p v-else>
              <!-- If the user already has an acapunk -->
              <a href="/#mint">Mint</a> more Punks.
            </p>
          </div>
        </div>
      </div>

      <!-- If the user is connected to a wallet, the page is not loading, and the user has an acapunks -->
      <div v-if="address !== null && nftCount" class="pt-4 mt-9 border-t border-slate-300">
        <p class="hidden md:block text-right mb-1">Click the punk to show the detail.</p>
        <p class="text-red-500 text-right mb-1">[Hint] These are just fake punk images for testing.</p>
        <div class="grid grid-cols-2 md:grid-cols-6 gap-4 mt-4">
          <div v-for="nft in nftMeta" class="punks-wrapper">
            <div class="w-full aspect-square relative">
              <div class="skeleton w-full h-full absolute top-0 left-0"></div>
              <img loading="lazy" :src="nft?.imageUrl || emptyImage" class="w-full h-full absolute top-0 left-0 cursor-pointer" @onload="onNftImageLoaded" @click="displayImage" />
            </div>
            <p class="text-right mt-1">#{{ nft?.tokenId || '' }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- mask -->
    <screen-mask :active="detailedImageUrl !== null" class="text-neutral-300" @click="onClickPageMask">
      <div class="w-full h-full flex flex-col justify-center items-center px-8">
        <img :src="detailedImageUrl!" class="w-[80vw] lg:w-auto lg:h-[50vh] aspect-square mb-2" />
        <p class="mb-1 text-red-500">[Hint] The fake low-quality preview image is just for testing.</p>
        <p>Click anywhere to close.</p>
      </div>
    </screen-mask>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, toRef, watch } from 'vue'
import { useWalletStore } from '@/store/wallet'
import ScreenMask from '@/components/ScreenMask.vue'
import { getOwnedNftCount, fetchNftMeta, NftMeta } from '@/services/web3/nft'

const wallet = useWalletStore()
const address = toRef(wallet, 'address')
const isWalletConnected = ref(false)
const nftCount = ref(null as null | number)
const nftMeta = reactive(Array<null | NftMeta>())
const emptyImage = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
const detailedImageUrl = ref(null as null | string)

async function init() {
  if (address.value === null) {
    nftCount.value = 0 // indicates the loading is done
    return
  }
  isWalletConnected.value = true

  nftCount.value = await getOwnedNftCount(address.value)
  for (let i = 0; i < nftCount.value; i++) {
    nftMeta.push(null)
  }
  fetchNftMeta(address.value, 0, nftCount.value, nftMeta)
}

watch(address, (cur: string | null) => {
  // clear all punks
  nftCount.value = null
  nftMeta.length = 0

  if (cur === null) {
    return
  }
  // update page
  init()
})

function onNftImageLoaded(e: Event) {
  // when the image is loaded remove the skeleton
  const target = e.target as HTMLImageElement
  const parent = target.parentNode as HTMLDivElement
  const skeleton = parent.getElementsByClassName('skeleton')[0] as HTMLDivElement
  skeleton.remove()
}

function displayImage(e: Event) {
  const target = e.target as HTMLImageElement
  detailedImageUrl.value = target.src
}

function onClickPageMask() {
  detailedImageUrl.value = null
}

init()
</script>

<style lang="scss">
@import "@/assets/scss/color";

.skeleton {
  background-repeat: no-repeat;
  background-image: $aca-gradient-light;
  position: relative;
  overflow: hidden;

  &:after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateX(-100%);
    // z-index: 1;

    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );

    /* Adding animation */
    animation: loading 1.5s infinite;
  }
}

@keyframes loading {
  100% {
    transform: translateX(100%);
  }
}
</style>
