<template>
  <div v-if="!closed" class="rounded-md">
    <slot />
    <p class="text-left"><button class="border text-white bg-green-600 hover:bg-opacity-80 rounded-md py-1 px-3" @click="closePopup">Accept</button></p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Popup',

  setup() {
    const closed = ref(false)
    return {
      closed,
      closePopup: () => (closed.value = true)
    }
  }
})
</script>

<style lang="scss">
.title {
  @apply font-bold text-lg mb-2;
}

.content {
  @apply mb-2;
}
</style>
