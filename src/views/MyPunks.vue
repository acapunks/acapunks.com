<template>
  <section id="my-punks" class="container mx-auto grow py-20 px-4 flex items-center">
    <div>
      <div class="md:flex items-stretch mb-4 pb-9 border-b border-slate-300">
        <div class="grow flex items-center">
          <div>
            <h1 class="text-2xl md:text-3xl lg:text-4xl mb-1">You have 87 Punks!</h1>
            <p class="text-sm md:text-base"><a href="/#mint">Mint</a> more Punks.</p>
          </div>
        </div>
        <div class="hidden md:block aspect-square bg-slate-200" style="height: 25vh"></div>
      </div>
      <div>
        <p class="hidden md:block text-right mb-4">Hover or touch the punk to show detailed.</p>
        <div class="grid grid-cols-2 md:grid-cols-6 xl:grid-cols-10 gap-4">
          <div class="punks-wrapper"><img src="/demo/1.svg" class="w-full" /><p class="text-right mt-1">#87</p></div>
          <div class="punks-wrapper"><img src="/demo/1.svg" class="w-full" /><p class="text-right mt-1">#87</p></div>
          <div class="punks-wrapper"><img src="/demo/1.svg" class="w-full" /><p class="text-right mt-1">#87</p></div>
          <div class="punks-wrapper"><img src="/demo/1.svg" class="w-full" /><p class="text-right mt-1">#87</p></div>
          <div class="punks-wrapper"><img src="/demo/1.svg" class="w-full" /><p class="text-right mt-1">#87</p></div>
          <div class="punks-wrapper"><img src="/demo/1.svg" class="w-full" /><p class="text-right mt-1">#87</p></div>
          <div class="punks-wrapper"><img src="/demo/1.svg" class="w-full" /><p class="text-right mt-1">#87</p></div>
          <div class="punks-wrapper"><img src="/demo/1.svg" class="w-full" /><p class="text-right mt-1">#87</p></div>
          <div class="punks-wrapper"><img src="/demo/1.svg" class="w-full" /><p class="text-right mt-1">#87</p></div>
          <div class="punks-wrapper"><img src="/demo/1.svg" class="w-full" /><p class="text-right mt-1">#87</p></div>
          <div class="punks-wrapper"><img src="/demo/1.svg" class="w-full" /><p class="text-right mt-1">#87</p></div>
          <div class="punks-wrapper"><img src="/demo/1.svg" class="w-full" /><p class="text-right mt-1">#87</p></div>
          <div class="punks-wrapper"><img src="/demo/1.svg" class="w-full" /><p class="text-right mt-1">#87</p></div>
          <div class="punks-wrapper"><img src="/demo/1.svg" class="w-full" /><p class="text-right mt-1">#87</p></div>
          <div class="punks-wrapper"><img src="/demo/1.svg" class="w-full" /><p class="text-right mt-1">#87</p></div>
          <div class="punks-wrapper"><img src="/demo/1.svg" class="w-full" /><p class="text-right mt-1">#87</p></div>
          <div class="punks-wrapper"><img src="/demo/1.svg" class="w-full" /><p class="text-right mt-1">#87</p></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useWalletStore } from '@/store/wallet'
import { getNfts } from '@/services/web3/nft'

const wallet = useWalletStore()
onMounted(async () => {
  const poop = await getNfts(wallet.address as string, 0, 50)
  console.log(poop)
})
</script>
