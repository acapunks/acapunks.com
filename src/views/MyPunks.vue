<template>
  <section id="my-punks" class="container mx-auto grow py-20 px-4 flex items-center">
    <div class="w-full">
      <div class="md:flex items-stretch h-[25vh]">
        <div class="grow items-center" :class="nftCount && nftCount > 0 ? 'flex' : 'block'">
          <div>
            <h1 class="text-2xl md:text-3xl lg:text-4xl mb-1 text-center" :class="nftCount && nftCount > 0 ? 'text-left' : 'text-center'">
              <span v-if="nftCount === null">Loading...</span>
              <span v-else-if="nftCount === 0">You have no AcaPunks.</span>
              <span v-else>You have {{ nftCount }} AcaPunks!</span>
            </h1>
            <p v-if="nftCount !== null" class="text-sm md:text-base" :class="nftCount && nftCount > 0 ? 'text-left' : 'text-center'">
              <span v-if="nftCount === 0">
                Click
                <a href="/#mint">here</a> to Mint an AcaPunks!
              </span>
              <span v-else>
                <a href="/#mint">Mint</a> more Punks.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div v-if="nftCount !== 0" class="pt-4 mt-9 border-t border-slate-300">
        <p class="hidden md:block text-right mb-4">Click the punk to show the detail.</p>
        <div class="grid grid-cols-2 md:grid-cols-6 xl:grid-cols-10 gap-4">
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
        <p class="mb-1 text-red-500">[Hint] the low-quality preview image is just for test phase.</p>
        <p>Click anywhere to close.</p>
      </div>
    </screen-mask>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useWalletStore } from '@/store/wallet'
import ScreenMask from '@/components/ScreenMask.vue'
import { getOwnedNftCount, fetchNftMeta, NftMeta } from '@/services/web3/nft'

const wallet = useWalletStore()
const isWalletConnected = ref(false)
const nftCount = ref(null as null | number)
const nftMeta = reactive(Array<null | NftMeta>())
const emptyImage = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
const detailedImageUrl = ref(null as null | string)

async function init() {
  const address = wallet.address

  if (address === null) {
    nftCount.value = 0 // indicates the loading is done
    return
  }
  isWalletConnected.value = true

  nftCount.value = await getOwnedNftCount(address)
  for (let i = 0; i < nftCount.value; i++) {
    nftMeta.push(null)
  }
  fetchNftMeta(wallet.address!, 0, nftCount.value, nftMeta)
}

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
