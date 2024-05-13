<template>
    <div>
      <h1 class="heading-home">I NOSTRI SERVIZI</h1>
      <p class="para-home">
        Studio Relab è un punto di riferimento in tutta la provincia di Milano per
        i suoi trattamenti riabilitativi.
      </p>
      <div class="maingrid">
        <div class="services" v-for="item in serviceItems" :key="item.id">
          <NuxtImg :src="item.src" alt="home-services" class="services" />
          <NuxtLink :to="item.link">
            <div class="absolutetext">
              <p>{{ item.text }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const serviceItems = [
    {
      id: 1,
      src: "/images/services1.jpg",
      text: "CERTIFICATO MEDICO SPORTIVO",
      link: "/certificsto-medico-sprtivo",
    },
    {
      id: 2,
      src: "/images/services2.jpg",
      text: "ECG A RIPOSO",
      link: "/ega-a-riposo",
    },
    {
      id: 3,
      src: "/images/services3.jpg",
      text: "TEST DA SFORZO",
      link: "/test-da-sforzo",
    },
    {
      id: 4,
      src: "/images/services4.jpg",
      text: "VISITA CARDIOLOGICA CON ECG ",
      link: "/visita-cardiologica-con-ecg",
    },
    {
      id: 5,
      src: "/images/services5.jpg",
      text: "HOLTER PRESSORIO",
      link: "/holter-pressorio",
    },
    {
      id: 6,
      src: "/images/services6.jpg",
      text: "HOLTER ECG",
      link: "/holter-ecg",
    },
    {
      id: 7,
      src: "/images/services7.jpg",
      text: "SPIROMETRIA",
      link: "/spirometria",
    },
    {
      id: 8,
      src: "/images/services8.jpg",
      text: "Ecocardiografia",
      link: "/ecocardiografia",
    },
    {
      id: 9,
      src: "/images/services9.jpg",
      text: "Generale",
      link: "/test-da-sforzo",
    },
  ];
  </script>
  <style scoped>
  /* Header and Paragraphs */
  .heading-home {
    font-size: 45px;
    font-weight: 700;
    color: #2f67aa;
    text-align: center;
    padding: 50px 0;
  }
  
  .para-home {
    font-size: 16px;
    text-align: center;
    padding-bottom: 40px;
    max-width: 45%;
    margin: 0 auto;
    line-height: 1.8;
  }
  
  /* Grid Layout for Services */
  .maingrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 0 20px;
  }
  
  /* Service Block Styling */
  .services {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .services:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
  
  .services img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .services:hover img {
    transform: scale(1.05);
  }
  
  /* Text Overlay */
  .absolutetext {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(47, 103, 170, 0.9);
    color: white;
    cursor: pointer;
    padding: 10px;
    text-align: center;
    width: 60%;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .services:hover .absolutetext {
    background-color: rgba(47, 103, 170, 0.8);
  }
  
  /* Media Queries for Responsiveness */
  @media (max-width: 767px) {
    .maingrid {
      grid-template-columns: repeat(1, 1fr);
    }
  
    .heading-home {
      font-size: 30px;
      padding: 30px 0;
    }
  
    .para-home {
      max-width: 95%;
      font-size: 14px;
    }
  }
  </style>