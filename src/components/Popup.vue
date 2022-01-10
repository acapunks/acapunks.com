<template>
  <div v-if="!closed" class="rounded-md">
    <slot></slot>
    <p class="text-left"><button class="border text-white bg-green-600 hover:bg-opacity-80 rounded-md py-1 px-3" @click="closePopup">OK</button></p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const closed = ref(false)
const closePopup = () => closed.value = true
</script>

<style lang="scss">
.title {
  @apply font-bold text-lg mb-2;
}

.content {
  @apply mb-2;
}
</style>
