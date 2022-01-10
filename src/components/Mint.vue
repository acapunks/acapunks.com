<template>
  <section class="h-screen-no-navbar flex justify-center items-center">
    <figure class="shadow-lg">
      <img src="@/assets/images/mint.gif" width="280" height="280" class="shadow">
      <figcaption class="bg-white rounded-bottom">
        <div class="py-6 flex flex-col items-center bg-gray-50" style="box-shadow: inset 0px 4px 4px -4px #AAA, inset 0px -4px 4px -4px #AAA">
          <input v-model="mintCount" type="range" min="1" max="10" class="mint-bar mb-3 w-full block" style="width: 80%">
          <button class="block w-full py-2 border rounded-full border-acared text-acared active:text-white hover:shadow active:bg-acared active-bg-opacity-1 transition-colors" style="width: 60%" @click="onMint">Mint <span class="inline-block text-right" style="width: 1em">{{ mintCount }}</span></button>
        </div>
        <div class="text-center py-6" style="font-weight: 600">9487 Punks Remaining!</div>
      </figcaption>
    </figure>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { mint } from '@/services/mint'

const mintCount = ref(1)

async function onMint() {
  await mint(mintCount.value)
}
</script>

<style lang="scss">
@import '@/assets/scss/color';

section {
  background: $acagradient-light;
}
</style>
