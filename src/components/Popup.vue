<template>
  <div v-if="!closed" class="rounded-md">
    <h4 v-if="title" class="font-bold text-lg mb-2" :class="titleClasses">{{ title }}</h4>
    <p v-if="content" class="mb-2" :class="contentClasses">{{ content }}</p>
    <p><button class="border text-white bg-green-600 hover:bg-opacity-80 rounded-md py-1 px-3" @click="closePopup">Accept</button></p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Popup',

  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    titleClasses: {
      type: Array,
      default() {
        return []
      }
    },
    contentClasses: {
      type: Array,
      default() {
        return []
      }
    }
  },

  setup() {
    const closed = ref(false)
    return {
      closed,
      closePopup: () => (closed.value = true)
    }
  }
})
</script>
