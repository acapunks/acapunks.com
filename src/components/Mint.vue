<template>
  <section class="h-screen-no-navbar flex justify-center items-center">
    <figure class="shadow-lg">
      <img src="@/assets/images/mint.gif" width="280" height="280">
      <figcaption class="text-center bg-white py-6 rounded-bottom">
        <div class="mb-8 px-16">
          <input v-model="mintCount" type="range" min="1" max="10" class="mint-bar mb-3 w-full"><br>
          <button class="block w-full py-2 px-12 border rounded-full border-acared text-acared active:text-white hover:shadow active:bg-acared active-bg-opacity-1 transition-colors" @click="onMint">Mint <span class="inline-block text-center" style="width: 1em">{{ mintCount }}</span></button>
        </div>
        <div class="mt-3" style="font-weight: 600">9487 Punks Remaining!</div>
      </figcaption>
    </figure>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { mint } from '@/services/mint'

export default defineComponent({
  name: 'Mint',
  setup() {
    const mintCount = ref(1)
    return {
      mintCount,
      async onMint() {
        await mint(mintCount.value)
      }
    }
  }
})
</script>

<style lang="scss">
@import '@/assets/scss/color';

section {
  background: $acagradient-light;
}
</style>
