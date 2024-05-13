<template>
    <div>
      <div class="aboutus">
        <div class="bg-color"></div>
        <div class="container">
          <h3 class="about-heading">CHI SIAMO</h3>
        </div>
      </div>
      <div class="container">
        <div class="aboutus-main">
          <div class="aboutus-content flex-item">
            <h3>Sports Medicine Via Novara, 53 Rome (RM)</h3>
            <p>
              The sports medical examination must be carried out by a sports
              medicine specialist and must always be carried out in an authorized
              facility. It involves a series of in-depth tests to evaluate the
              suitability of the aspiring athlete to participate in training and
              competitions in a continuous and competitive manner.
            </p>
            <p>
              The visit includes a 'family history' to identify any risk factors
              and a series of tests.
            </p>
            <p>
              Among these tests there are spirometry, the electrocardiogram before
              and after exercise or under stress (for post-covid or over 40
              visits), the visual test and the urinalysis.
            </p>
          </div>
          <div class="aboutus-img flex-item">
            <NuxtImg src="/images/about.jpg" alt="about-us" />
          </div>
        </div>
        <ourteam/>
      </div>
    </div>
  </template>
  <style scoped>
  .flex-item {
    flex: 1;
    padding: 10px;
  }
  
  .aboutus {
    background-image: url("/images/sub-servics.jpg");
    background-size: cover;
    background-position: center;
    position: relative;
    width: 100%;
    height: 170px;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
  .bg-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #2f67aa;
    opacity: 0.8;
    z-index: 1;
  }
  .aboutus-main {
    padding: 50px 0 0;
    gap: 2rem;
    display: flex;
    align-items: center;
  }
  .aboutus-img img {
    width: 100%;
    object-fit: contain;
    height: auto;
    border-radius: 20px;
  }
  .aboutus-content p {
    font-size: 16px;
    line-height: 1.5;
    padding: 10px 3px;
  }
  .about-heading {
    position: relative;
    z-index: 2;
    color: white;
    font-weight: 600;
    font-size: 30px;
    text-transform: capitalize;
  }
  .aboutus-content h3 {
    font-size: 30px;
    font-weight: bold;
    color: #2f67aa;
  }
  
  @media (max-width: 992px) {
    .aboutus-main {
      flex-direction: column;
    }
    .about-heading {
      font-size: 24px;
    }
  }
  </style>