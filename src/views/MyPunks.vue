<template>
  <section id="my-punks" class="grow flex justify-center items-center">
    <div class="p-5 w-full sm:w-[32rem]">
      <div class="carousel-wrapper aspect-square flex items-stretch shadow-lg mb-8">
        <swiper :scrollbar="{ hide: true }" class="carousel grow">
          <swiper-slide class="slide">
            <img src="https://i.imgur.com/uLJVdf0.jpg" />
          </swiper-slide>
          <swiper-slide class="slide">
            <img src="https://dvblobcdnjp.azureedge.net//Content/Upload/Popular/Images/2021-06/fee1c72f-142f-460e-b4b4-47ca6fded80f_m.jpg" />
          </swiper-slide>
          <swiper-slide class="slide">
            <img src="https://s.newtalk.tw/album/news/684/61bd2f165cbdf.jpg" />
          </swiper-slide>
          <swiper-slide class="slide">
            <img src="https://newsimg.ftv.com.tw/summernotefiles/News/60708507-ce28-4664-9b23-9747b53e8dd2.jpg" />
          </swiper-slide>
          <swiper-slide class="slide">
            <img src="https://s.yimg.com/ny/api/res/1.2/hpqCz_2f2YNqGe5R.NDdmA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ0OQ--/https://s.yimg.com/uu/api/res/1.2/8I6LJRipR0y9LP4Qgn5mpA--~B/aD04MDA7dz0xMTQwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/dailyview.tw/b252d230669de26f00672f54f1485169" />
          </swiper-slide>
        </swiper>
      </div>
      <div>
        <p class="text-center">You have 5 Punks!</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/scrollbar'
</script>

<style lang="scss">
.carousel-wrapper {
  .carousel {
    background: lightgrey;

    .slide {
      background: lightcoral;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow: hidden;
      }
    }
  }
}
</style>