<template>
  <nav class="lg:flex px-3 py-3 shadow-md bg-acared text-white">

    <div class="self-stretch flex items-center justify-between">
      <!-- logo -->
      <div class="self-stretch flex items-center mr-4">
        <router-link to="/" class="inline-flex items-center"><img src="@/assets/images/brand.svg" width="48" height="48" class="mr-2">Acapunks</router-link>
      </div>

      <!-- navbar button; visible only in mobile -->
      <button class="flex lg:hidden ml-auto items-center rounded px-4" @click="toggleNavbar">
        <fa icon="bars" class="text-2xl" />
      </button>
    </div>

    <div class="flex-grow self-stretch flex-col lg:flex-row justify-between overflow-hidden transition-transform" :class="[ { 'hidden': isHidden }, 'lg:flex']">
      <!-- left items -->
      <div class="lg:self-stretch lg:flex mt-4 lg:mt-0 ">
        <ul class="text-left self-stretch lg:flex items-center space-y-2 lg:space-y-0 lg:space-x-3">
          <li><router-link to="/#mint" class="text-white text-opacity-70 hover:text-opacity-100">Mint</router-link></li>
          <li><router-link to="/#faq" class="text-white text-opacity-70 hover:text-opacity-100">FAQ</router-link></li>
          <!--
          <li><a href="#" class="text-white text-opacity-70 hover:text-opacity-100">View my Punks</a></li>
          <li><a href="#" class="text-white text-opacity-70 hover:text-opacity-100">Market Place</a></li>
          -->
          <li><router-link to="/terms-and-condition" class="text-white text-opacity-70 hover:text-opacity-100">Terms and Condition</router-link></li>
        </ul>
      </div>
      <!-- right items -->
      <div class="lg:self-stretch lg:flex mt-4 lg:mt-0 border-t lg:border-t-0 pt-4 lg:pt-0">
        <ul class="text-left self-stretch justify-end lg:flex space-y-2 lg:space-y-0 items-center lg:space-x-3 text-opacity-70 hover:text-opacity-100">
          <li>
            <a href="https://twitter.com/acapunks" target="_blank" rel="noopener noreferrer" class="text-white text-opacity-70 hover:text-opacity-100">
              <span class="inline-block text-center" style="width: 2em"><fa :icon="['fab', 'twitter']" class="mr-1" /></span>
              <span class="lg:hidden xl:inline">Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://discord.com/acapunks" target="_blank" rel="noopener noreferrer" class="text-white text-opacity-70 hover:text-opacity-100">
              <span class="inline-block text-center" style="width: 2em"><fa :icon="['fab', 'discord']" class="mr-1" /></span>
              <span class="lg:hidden xl:inline">Discord</span>
            </a>
          </li>
        </ul>
        <div class="lg:ml-8">
          <button class="border rounded-full px-12 py-3 my-4 lg:my-0">Connect to Wallet</button>
        </div>
      </div>
    </div>

  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Navbar',

  setup() {
    const isHidden = ref(true)
    return {
      isHidden,
      toggleNavbar() {
        isHidden.value = !isHidden.value
      }
    }
  }
})
</script>
