<template>
    <div class="slider-container">
      <div class="slide">
        <nuxt-img :src="currentSlideImageUrl" alt="Slide Image" class="slider-image" /></div>
    </div>
  </template>
  
  <script setup >
  

  const items = [
    { id: 1, imageUrl: '/slider.webp', text: 'Slide1' },
    { id: 2, imageUrl: '/slider2.webp' , text: 'Slide2' },
    { id: 3, imageUrl: '/slider.webp' , text: 'Slide3' },
  ];
  
const currentSlideImageUrl = ref('');
  
  const showSlide = () => {
    let index = 0;
    setInterval(() => {
      currentSlideImageUrl.value = items[index].imageUrl;
      index = (index + 1) % items.length;
    }, 2000);
  };
  
  onMounted(() => {
    showSlide();
  });
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
  }
  
  .slide {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    background-color: #6395ce;
    position: absolute;
    opacity: 0.7;
    transition: transform 0.5s ease-in-out;
  }
  @media (max-width: 767px) {
    .slider-container {
    height: 210px; 
  }
  }
  </style>