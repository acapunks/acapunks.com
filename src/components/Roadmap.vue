<template>
  <section id="roadmap" class="bg-[#01030d] text-[#848198] py-24">
    <div class="container mx-auto px-4">
      <div class="mb-24 lg:px-[15vw]">
        <h2 class="text-center text-4xl mb-6 text-white font-black">Roadmap</h2>
        <p class="text-center">
          The AcaPunks aims to be a long-term community-driven project.Holders will be able
          to stake to earn.
          <a href="https://twitter.com/ParachainLabs" rel="noopener noreferrer">Parachain Labs</a>
          is also building an NFT marketplace — Acalart, whose profit will be distributed to
          DAO token stakers.
        </p>
      </div>
      <div class="goals flex flex-col relative py-24 lg:py-48">
        <div class="timeline"></div>
        <div class="goal">
          <h3>Welcome to the AcaPunks</h3>
          <p>
            The official discord is open. Whitelists and free AcaPunks giveaways are held
            to reward early supporters and community contributors.
          </p>
        </div>
        <div class="goal">
          <h3>Private Mint Start</h3>
          <p>
            Early supporters and community contributors will be able to mint one hour
            before everyone else for their contribution.
          </p>
        </div>
        <div class="goal">
          <h3>$ART Token</h3>
          <p>
            The staking contract will go online. Holders will be able to earn $ART by staking
            their AcaPunks!
          </p>
        </div>
        <div class="goal">
          <h3>$aUSD Giveaways</h3>
          <p>
            1000 $aUSD prize will be given to people who mint all tribes of AcaPunks.
          </p>
        </div>
        <div class="goal">
          <h3>Acalart</h3>
          <p>
            Acalart — a DAO governed NFT marketplace will open. Transaction fees will be
            distributed to $ART token stakers.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/color";

#roadmap {
  .timeline {
    @apply absolute left-8 lg:left-36 top-0 bottom-0 w-[2px];
    border-right-color: hsla(0, 0%, 100%, 0.4);
    background: $aca-gradient;
  }

  .goals {
    .goal {
      @apply p-8 pl-16 lg:p-16 lg:pl-52 bg-[#04091a] rounded-lg bg-opacity-20;
      backdrop-filter: blur(2px);
      // background: $aca-red;

      &:nth-child(3n + 2) {
        box-shadow: 0px 0px 0.5rem 5px $aca-orange, 0px 0px 0.5rem 1px $aca-orange inset;
      }
      &:nth-child(3n) {
        box-shadow: 0px 0px 0.5rem 5px $aca-red, 0px 0px 0.5rem 1px $aca-red inset;
      }
      &:nth-child(3n + 1) {
        box-shadow: 0px 0px 0.5rem 5px $aca-purple, 0px 0px 0.5rem 1px $aca-purple inset;
      }

      // box-shadow: 0px 0px 10px 10px rgba(1, 3, 13, 0.9) inset;

      &:not(:last-child) {
        @apply mb-24;
      }

      h3 {
        @apply text-2xl lg:text-3xl text-white font-black;
      }

      p {
        @apply mt-6;
      }
    }
  }
}
</style>
