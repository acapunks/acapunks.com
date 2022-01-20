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
        <div class="timeline h-100 absolute left-0 top-0 bottom-0 w-36 border-r" style="border-right-color: hsla(0,0%,100%,.4);"></div>
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
.goals {
  .goal {
    @apply bg-[#04091a] p-16 pl-52;

    &:not(:last-child) {
      @apply mb-12;
    }

    h3 {
      @apply text-3xl text-white font-black;
    }

    p {
      @apply mt-6;
    }
  }
}
</style>
