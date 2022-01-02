<template>
  <section id="faq" class="text-center text-gray-800 py-24">
    <div class="container mx-auto px-4">
      <div class="mb-8">
        <h2 class="text-4xl mb-6 text-gray-900 font-black">FAQ</h2>
        <p>Have questions? Here are the FAQs. Also follow our social media for the latest updates!</p>
      </div>

      <div class="lg:flex flex-row flex-wrap justify-around">
        <div class="question">
          <span class="icon"><fa icon="fish" /></span>
          <h3 class="title">What are AcaPunks?</h3>
          <p class="answer">
            AcaPunks are 10,000 uniquely generated characters. No two are exactly alike, and
            each one of them can be officially owned by a single person on the Acala blockchain.
            Participate in Acala DeFis with an AcaPunk as your virtual identity!
          </p>
        </div>

        <div class="question">
          <span class="icon"><fa icon="dog" /></span>
          <h3 class="title">How will Acapunks launch?</h3>
          <p class="answer">
            Once the Acala EVM+ come online, we will deploy the smart contract ASAP. This is
            expected to happen in early Q1 2022.
          </p>
          <p class="answer">
            AcaPunks is planned to launch in two phases. In the first phase, whitelisted members
            will be able to claim their AcaPunks; one hour after the first phase, public sale
            will begin and everyone will have a chance to mint their unique AcaPunks. Please pay
            attention to our official social media for more details.
          </p>
        </div>

        <div class="question">
          <span class="icon"><fa icon="spider" /></span>
          <h3 class="title">How can I be whitelisted?</h3>
          <p class="answer">
            Active community members that interact with our official
            <a href="https://twitter.com/acapunks" target="_blank" rel="noopener noreferrer">twitter</a>
            and <a href="https://discord.com/acapunks" target="_blank" rel="noopener noreferrer">discord</a>
            will have a chance to get their Acapunks in stage 1 mint.
          </p>
        </div>

        <div class="question">
          <span class="icon"><fa icon="cat" /></span>
          <h3 class="title">Where can I trade my AcaPunks?</h3>
          <p class="answer">
            You can trade your AcaPunks directly on the <a href="#">Market Place</a> page. More marketplaces
            will be supported after the minting stage is completed. Ww also plan to launch
            Acalart — a marketplace where you can view and trade any NFTs on the Acala Network.
            Stay tuned.
          </p>
        </div>

        <div class="question">
          <span class="icon"><fa icon="horse-head" /></span>
          <h3 class="title">How can I get an AcaPunk?</h3>
          <p class="answer">
            First, set up your <a href="https://metamask.io" target="_blank" rel="noopener noreferrer">Metamask</a>
            wallet. On the mint page, you can connect to your wallet and mint 1 Acapunk for 100 ACA.
            The launching details can be found on the official social media.
          </p>
        </div>

        <div class="question">
          <span class="icon"><fa icon="dove" /></span>
          <h3 class="title">Who is behind the project?</h3>
          <p class="answer">
            AcaPunks is built by <a href="https://twitter.com/ParachainLabs" target="_blank" rel="noopener noreferrer">Parachain Labs</a>,
            a team dedicated to develop NFTs and Dapps on the Polkadot parachains. AcaPunks
            and Parachain Labs are not affiliated with the CryptoPunks or Larva Labs.
          </p>
        </div>

        <div class="question">
          <span class="icon"><fa icon="robot" /></span>
          <h3 class="title">Roadmap</h3>
          <p class="answer">
            AcaPunks aims to be a long-term community-driven project. We plan to explore ideas such as:
            DAO token airdrops to holders, whitelisting holders to future Parachain Labs projects,
            sharing the profit of Acalart marketplace and future Defi projects, etc. These are the
            things we have in mind but we'd like to hear from our community first, before setting our
            roadmap in stone.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<style lang="scss">
@import '@/assets/scss/color';

#faq {
  background-image: url('~@/assets/images/bg-faq.svg');

  .question {
    @apply mb-8 lg:w-2/5 2xl:w-28/100 inline-block bg-gray-200 border border-gray-200 rounded-3xl shadow-md px-4 lg:px-8 pb-10 mt-16 md:mx-6;

    .icon {
      @apply text-6xl relative -top-9 p-1 rounded-xl text-white;

      bg: $acagradient;
    }

    .title {
      @apply text-2xl mb-6 text-gray-900 font-black;
    }

    .answer {
      &:not(:last-child) {
        @apply mb-4;
      }
    }
  }
}
</style>
