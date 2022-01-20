<template>
  <section id="roadmap" class="bg-[#01030d] text-[#848198] py-48">
    <div class="container mx-auto">
      <div class="mb-24 px-96">
        <h2 class="text-center text-4xl mb-6 text-white font-black">Roadmap</h2>
        <p class="text-center">
          The AcaPunks aims to be a long-term community-driven project.Holders will be able
          to stake to earn.
          <a href="https://twitter.com/ParachainLabs" rel="noopener noreferrer">Parachain Labs</a>
          is also building an NFT marketplace — Acalart, whose profit will be distributed to
          DAO token stakers.
        </p>
      </div>
      <div class="goals flex flex-col relative py-48">
        <div class="timeline"></div>
        <div class="goal">
          <h3>Title 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum laoreet arcu, at faucibus
            lectus condimentum et. Cras hendrerit eget tortor pellentesque vehicula. Quisque a interdum quam, et
            fringilla velit. Suspendisse sit amet tincidunt mi. Fusce porta egestas fringilla. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat.
          </p>
        </div>
        <div class="goal">
          <h3>Title 2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum laoreet arcu, at faucibus
            lectus condimentum et. Cras hendrerit eget tortor pellentesque vehicula. Quisque a interdum quam, et
            fringilla velit. Suspendisse sit amet tincidunt mi. Fusce porta egestas fringilla. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum laoreet arcu, at faucibus
            lectus condimentum et. Cras hendrerit eget tortor pellentesque vehicula. Quisque a interdum quam, et
            fringilla velit. Suspendisse sit amet tincidunt mi. Fusce porta egestas fringilla. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat.
          </p>
        </div>
        <div class="goal">
          <h3>Title 3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum laoreet arcu, at faucibus
            lectus condimentum et. Cras hendrerit eget tortor pellentesque vehicula. Quisque a interdum quam, et
            fringilla velit. Suspendisse sit amet tincidunt mi. Fusce porta egestas fringilla. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat.
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
    @apply absolute left-36 top-0 bottom-0 w-[2px];
    border-right-color: hsla(0, 0%, 100%, 0.4);
    background: $aca-gradient;
  }

  .goals {
    .goal {
      @apply p-16 pl-52 bg-[#04091a] rounded-lg bg-opacity-20;
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
        @apply text-3xl text-white font-black;
      }

      p {
        @apply mt-6;
      }
    }
  }
}
</style>
