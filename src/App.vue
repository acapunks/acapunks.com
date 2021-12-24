<template>
  <navbar class="fixed top-0 right-0 left-0 z-50" />

  <main style="margin-top: 72px">
    <router-view />
  </main>

  <!-- footer -->
  <footer class="py-3 bg-gray-200 text-center">
    Powered By
    <a target="_blank" href="https://acala.network" rel="noopenner norefererr"><img src="@/assets/images/acala.svg" class="h-9 inline-block relative" style="bottom: 1.1pt;"></a>
  </footer>

  <!-- privacy -->
  <popup class="fixed bottom-0 right-0 bg-gray-100 px-6 py-4 rounded-lg m-4 min-w-1-4 max-w-screen md:max-w-3/5 popup-shadow">
    <h3 class="title">Terms and Conditions</h3>
    <p class="content">
      The Acapunks is decentralized software running on the Acala network. This website is only an
      interface built to help users interact with that Acala smart contract. No Acapunk ownership
      is managed by this website or by Parachain Labs. Users are entirely responsible for the safety
      and management of their own private Acala wallets and validating all transactions generated
      by Parachain Labs before approving them. Use of this website is at the user's own risk and
      Parachain Labs is not liable for any incorrect or failed transactions. Furthermore, as the
      contract runs on Acala, Parachain Labs has no power to undo, reverse, or restore any
      transactions.
    </p>
    <p class="content">
      In order to use this website, and any related tools it may provide, you agree to hold
      Parachain Labs harmless for any and all problems, errors, and failures no matter the cause or
      source of those errors and accept sole responsibility for all transactions.
    </p>
  </popup>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Popup from '@/components/Popup.vue'

export default defineComponent({
  name: 'App',
  components: {
    navbar: Navbar,
    popup: Popup
  }
})
</script>

<style lang="scss">
.popup-shadow {
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.2);
}
</style>
