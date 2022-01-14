<template>
  <div class="lds-circle">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/color";

.lds-circle {
  transform: translateZ(1px);

  & > div {
    animation: spinner 2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
}

@keyframes spinner {
  0% {
    transform: rotateY(0deg);
  }
  7% {
    transform: rotateY(0deg);
  }
  93% {
    transform: rotateY(3600deg);
  }
  100% {
    transform: rotateY(3600deg);
  }
}
</style>
