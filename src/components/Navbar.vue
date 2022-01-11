<template>
  <nav id="navbar" class="lg:flex px-3 py-3 shadow-md bg-aca-red text-white">
    <div class="self-stretch flex items-center justify-between">
      <!-- logo -->
      <div class="self-stretch flex items-center mr-8">
        <router-link to="/#landing" class="inline-flex items-center nav-link">
          <img src="@/assets/images/brand.svg" width="48" height="48" class="mr-2" />Acapunks
        </router-link>
      </div>

      <!-- navbar button; visible only in mobile -->
      <button class="flex lg:hidden ml-auto items-center rounded px-4" @click="toggleNavbar">
        <fa icon="bars" class="text-2xl" />
      </button>
    </div>

    <div class="grow self-stretch flex-col lg:flex-row justify-between overflow-hidden transition-transform" :class="[{ 'hidden': isHidden }, 'lg:flex']">
      <!-- left items -->
      <div class="lg:self-stretch lg:flex mt-4 lg:mt-0">
        <ul class="text-left self-stretch lg:flex items-center space-y-2 lg:space-y-0 lg:space-x-8">
          <li>
            <router-link to="/#mint" class="nav-link">Mint</router-link>
          </li>
          <li>
            <router-link to="/#faq" class="nav-link">FAQ</router-link>
          </li>
          <!--
          <li>
            <router-link to="/my" class="nav-link">My Punks</router-link>
          </li>
          -->
          <!--
          <li><a href="#">Market Place</a></li>
          -->
          <li>
            <router-link to="/terms-and-condition" class="nav-link">Terms & Condition</router-link>
          </li>
        </ul>
      </div>
      <!-- right items -->
      <div class="lg:self-stretch lg:flex mt-4 lg:mt-0 border-t lg:border-t-0 pt-4 lg:pt-0" style="border-top-color: rgba(255,255,255,.7);">
        <ul class="text-left self-stretch justify-end lg:flex space-y-2 lg:space-y-0 items-center lg:space-x-2 text-opacity-70 hover:text-opacity-100">
          <li>
            <a href="https://twitter.com/acapunks" target="_blank" rel="noopener noreferrer" class="nav-link">
              <span class="inline-block text-center" style="width: 2em">
                <fa :icon="['fab', 'twitter']" class="mr-1" />
              </span>
              <span class="lg:hidden xl:inline">Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://discord.com/acapunks" target="_blank" rel="noopener noreferrer" class="nav-link">
              <span class="inline-block text-center" style="width: 2em">
                <fa :icon="['fab', 'discord']" class="mr-1" />
              </span>
              <span class="lg:hidden xl:inline">Discord</span>
            </a>
          </li>
        </ul>
        <div class="lg:ml-8">
          <wallet-button class="border rounded-full w-60 py-3 lg:py-0 my-4 lg:my-0 bg-white bg-opacity-0 hover:bg-opacity-10 h-full" connect-hint="Connect to Wallet" switch-hint="Switch Network" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WalletButton from '@/components/WalletButton.vue'

const isHidden = ref(true)
const toggleNavbar = () => isHidden.value = !isHidden.value
</script>

<style lang="scss">
#navbar {
  .nav-link {
    @apply text-white text-opacity-70;

    &:hover {
      @apply text-opacity-100;
      text-decoration: none;
    }
  }
}
</style>