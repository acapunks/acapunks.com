<template>
  <section id="faq" class="text-center text-gray-800 py-24">
    <div class="container mx-auto px-4">
      <div class="mb-8">
        <h2 class="text-4xl mb-6 text-gray-900 font-black">FAQ</h2>
      </div>

      <div class="flex flex-row flex-wrap justify-around">
        <div class="question">
          <span class="icon"><fa icon="dog" /></span>
          <h3 class="title">What are AcaPunks?</h3>
          <p class="answer">
            AcaPunks are 10,000 uniquely generated characters. No two are exactly alike,
            and each one of them can be officially owned by a single person on the Acala
            blockchain. Participate in Acala DeFis with an AcaPunk as your virtual identity!
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
            AcaPunks is planned to launch in 2 phases. In the first phase, whitelisted members
            will be able to claim their AcaPunks; 1 hour after the first phase, public sale
            will begin and everyone will have a chance to mint their unique AcaPunks. Please
            pay attention to our official social media for more details.
          </p>
        </div>

        <div class="question">
          <span class="icon"><fa icon="dog" /></span>
          <h3 class="title">How can I be whitelisted?</h3>
          <p class="answer">
            Active community members that interact to our official
            <a href="https://twitter.com/acapunks" target="_blank" rel="noopenner noreferrer">twitter</a>
            and <a href="https://discord.com/acapunks" target="_blank" rel="noopenner noreferrer">discord</a>
            will have a chance to get their Acapunks in stage 1 mint.
          </p>
        </div>

        <div class="question">
          <span class="icon"><fa icon="dog" /></span>
          <h3 class="title">Where can I trade my AcaPunks?</h3>
          <p class="answer">
            You can trade your AcaPunks directly on the <a href="#">Market Place</a> page. More marketplaces
            will be supported after the minting stage is completed. Ww also plan to launch
            Acalart — a marketplace where you can view and trade any NFTs on the Acala Network.
            Stay tuned.
          </p>
        </div>

        <div class="question">
          <span class="icon"><fa icon="dog" /></span>
          <h3 class="title">I am new to NFTs. How can I get an AcaPunk?</h3>
          <p class="answer">
            First, set up your <a href="https://wiki.acala.network/acala/acala-account" rel="noopenner noreferrer" target="_blank">Acala account</a>.
            On the mint page, you can connect to and mint 1 Acapunk for 100 ACA starting from
            the launch time. The launching details can be found on the official social media.
            However, it will be too late to get one at mint cost if all the Acapunks are sold
            out.
          </p>
        </div>

        <div class="question">
          <span class="icon"><fa icon="dog" /></span>
          <h3 class="title">Who is behind the project?</h3>
          <p class="answer">
            AcaPunks is built by <a href="https://twitter.com/ParachainLabs" target="_blank" rel="noopenner noreferrer">Parachain Labs</a>,
            a team dedicated to develop NFTs and Dapps on the Polkadot parachains. AcaPunks
            and Parachain Labs are not affiliated with the CryptoPunks or Larva Labs.
          </p>
        </div>

        <div class="question">
          <span class="icon"><fa icon="dog" /></span>
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
@import '@/assets/scss/bg';

#faq {
  background-image: url('~@/assets/images/bg-faq.svg');

  .question {
    @apply mb-8 w-3/4 lg:w-2/5 2xl:w-28/100 inline-block bg-gray-200 border border-gray-200 rounded-3xl shadow-md px-8 pb-10 mt-16 md:mx-6;

    & .icon {
      @apply text-6xl relative -top-9 bg-acala-gradient p-1 rounded-xl text-white;
    }

    & .title {
      @apply text-2xl mb-6 text-gray-900 font-black;
    }

    & .answer {
      &:not(:last-child) {
        @apply mb-4;
      }

      & a {
        @apply text-acared border-b inline-block;

        &:hover {
          @apply underline;
          text-underline-offset: 3pt;
        }
      }
    }
  }
}
</style>
