<script>
    import { Autoplay,  Navigation } from 'swiper/modules';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import Container from '@/utils/Container.vue'
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
    import 'swiper/css';

    export default{
        components:{Container, Swiper, SwiperSlide  },
        setup() {
      return {
        modules: [Autoplay,  Navigation],
      };
    },
    }
</script>

<template>
    <Container>
        <div class="hero-banner">

        <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :speed="1500"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
        :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
        <img src="../assets/banner1.png" alt="Banner">
    </swiper-slide>
    <swiper-slide>
        <img src="../assets/banner2.png" alt="Banner">
    </swiper-slide>
    <swiper-slide>
        <img src="../assets/banner3.png" alt="Banner">
    </swiper-slide>
    <swiper-slide>
        <img src="../assets/banner4.png" alt="Banner">
    </swiper-slide>
    <swiper-slide>
        <img src="../assets/banner5.png" alt="Banner">
    </swiper-slide>
    <swiper-slide>
        <img src="../assets/banner6.png" alt="Banner">
    </swiper-slide>
    <swiper-slide>
        <img src="../assets/banner7.png" alt="Banner">
    </swiper-slide>
   
    
  </swiper>
</div>

    </Container>
</template>


<style lang="scss" scoped>
.hero-banner{
    width: 100%;
    max-height: 500px;
    border-radius: 8px;
    overflow: hidden;
}
    .swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  overflow: hidden;
  img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  }
}


@media only screen and (max-width:370px){
  .hero-banner{
    height: 160px;
  }
  .swiper-slide{
    img{
      object-fit: fill;
    }
  }
}


</style>