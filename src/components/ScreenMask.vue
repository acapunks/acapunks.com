<template>
  <div class="page-mask fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-80 z-20" v-if="active">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps, watch, toRef } from 'vue'

const props = defineProps({
  active: {
    type: Boolean,
    required: true
  }
})

function showMask() {
  document.body.classList.add('no-scroll') // lock scroll
}

function hideMask() {
  document.body.classList.remove('no-scroll') // lock scroll
}

watch(toRef(props, 'active'), (cur) => {
  if (cur === true) {
    showMask()
  }
  else {
    hideMask()
  }
})
</script>
