<template>
  <section id="faq" class="text-center py-24 bg-[#f0f1f5]">
    <div class="container mx-auto px-4">
      <div class="mb-8">
        <h1 class="text-4xl mb-6 text-gray-700 font-black">FAQ</h1>
        <p>
          Have questions? Here are the FAQs. Also follow our official
          <a href="https://twitter.com/acapunks" target="_blank" rel="noopener noreferrer">Twitter</a> for updates!
        </p>
      </div>

      <div class="lg:flex flex-row flex-wrap justify-center gap-x-24 gap-y-36 pt-28">
        <div class="question">
          <span class="icon">
            <fa icon="fish" />
          </span>
          <h3 class="title">What are AcaPunks?</h3>
          <p class="answer">
            AcaPunks are 10,000 uniquely generated characters. No two are exactly alike,
            and each one of them can be officially owned by a single person on the Acala
            blockchain.
          </p>
        </div>

        <div class="question">
          <span class="icon">
            <fa icon="dog" />
          </span>
          <h3 class="title">When is the drop?</h3>
          <p class="answer">
            Once the Acala EVM+ come online, we will deploy the smart contract ASAP. This is
            expected to happen in early Q1 2022.
          </p>
          <p class="answer">
            There will be two phases for the drop. In the first phase, whitelisted members
            will be able to claim their AcaPunks; one hour after the first phase, public sale
            will begin and everyone will have a chance to mint their unique AcaPunks.
          </p>
        </div>

        <div class="question">
          <span class="icon">
            <fa icon="spider" />
          </span>
          <h3 class="title">How to get whitelisted?</h3>
          <p class="answer">
            Active community members that interact with our official
            <a href="https://twitter.com/acapunks" target="_blank" rel="noopener noreferrer">Twitter</a> and
            <a href="https://discord.gg/DHGvhfrYFZ" target="_blank" rel="noopener noreferrer">Discord</a> will
            win a chance to mint their AcaPunks in stage one. Visit our discord for detail.
          </p>
        </div>

        <div class="question">
          <span class="icon">
            <fa icon="horse-head" />
          </span>
          <h3 class="title">How can I get an AcaPunk?</h3>
          <p class="answer">
            Set up your
            <a href="https://metamask.io" target="_blank" rel="noopener noreferrer">Metamask</a>
            wallet. On the mint page, you can connect to your wallet and mint 1 AcaPunk for ACA worth ~0.05 ETH.
            However, it will be too late to get one at mint cost if they are sold out.
          </p>
        </div>

        <div class="question">
          <span class="icon">
            <fa icon="robot" />
          </span>
          <h3 class="title">Roadmap</h3>
          <p class="answer">
            The AcaPunks aims to be a long-term community-driven project. Holders will be able to
            stake to earn. Parachain Labs is also building an NFT marketplace — Acalart, whose profit
            will be distributed to DAO token stakers.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/color";

#faq {
  background-image: url("@/assets/images/bg-faq.svg");

  .question {
    @apply relative lg:w-2/5 2xl:w-28/100 inline-block bg-white border border-gray-200 rounded-3xl shadow-md px-4 lg:px-8 pb-10;

    &:not(:last-child) {
      @apply mb-28 lg:mb-0;
    }

    padding-top: 42px;

    .icon {
      @apply text-6xl text-white absolute right-0 left-0 ml-auto mr-auto rounded-xl inline-flex justify-center items-center;

      top: -42px;
      width: 80px;
      height: 84px;
      background: $aca-gradient;
    }

    .title {
      @apply text-2xl mb-6 text-gray-700 font-black;

      margin-top: 1em;
    }

    .answer {
      &:not(:last-child) {
        @apply mb-4;
      }
    }
  }
}
</style>
