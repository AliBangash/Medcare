<template>
  <div class="slider-container">
    <Carousel :autoplay="2000" :wrap-around="true">
      <Slide v-for="item in items" :key="item.id">
        <img :src="item.imageUrl" :alt="item.text" class="slider-image" style="background-color: #6395ce; opacity: 0.7;" />
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
const items = ref([
  { id: 1, imageUrl: '/slider.webp', text: 'Slide1' },
  { id: 2, imageUrl: '/slider2.webp', text: 'Slide2' },
   { id: 1, imageUrl: '/slider.webp', text: 'Slide1' },
])
</script>

<style scoped>
.slider-image {
  width: 100%;
  max-height: 625px;
  object-fit: cover;
  height: auto;
}

.slider-container {
  width: 100%;
  height: 500px;
  overflow: hidden;
  position: relative;
  background-color: #6395ce;
}
svg.carousel__icon{
  fill: #fff;
  background: #2f67aa;
}
@media (max-width: 767px) {
  .slider-container {
    height: 210px;
  }
}
</style>
