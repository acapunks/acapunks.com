<template>
  <footer class="py-3 text-center bg-gray-100">
    <div class="md:flex flex-row-reverse justify-center items-center text-center">
      <div class="flex-1 text-center md:text-left mb-2 md:mb-0 md:pl-12 social-links">
        <a class="mr-4" href="https://twitter.com/acapunks" target="_blank" rel="noopener noreferrer">
          <fa :icon="['fab', 'twitter']" />
        </a>
        <a class="mr-4" href="https://discord.gg/DHGvhfrYFZ" target="_blank" rel="noopener noreferrer">
          <fa :icon="['fab', 'discord']" />
        </a>
        <a href="mailto:contact@acapunks.com" target="_blank" rel="noopener noreferrer">
          <fa :icon="['fas', 'envelope']" />
        </a>
      </div>
      <div class="flex-1 text-center md:text-right md:pr-12 md:border-r md:border-slate-300">
        <span class="relative" style="top: 0.13em; font-size:1.05em;"></span>Powered By
        <a target="_blank" href="https://acala.network" rel="noopener noreferrer" class="ml-1">
          <img src="@/assets/images/acala.svg" class="h-9 inline-block" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import "@/assets/scss/color";

footer {
  // https://github.com/tailwindlabs/tailwindcss/discussions/3590#discussioncomment-372857
  box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  .social-links {
    a {
      @apply text-xl md:text-2xl;
    }
  }
}
</style>
