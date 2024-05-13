<template>
  <div>
    <div class="sub-services">
      <div class="bg-color"></div>
      <div class="container">
      <h3 class="services-heading">holter-ecg</h3>
      </div>
    </div>
    <div class="container">
      <div class="subservices-main">
        <div class="services-img">
          <NuxtImg src="/images/sub-servics.jpg" alt="sub services" />
        </div>
        <div class="services-content">
          <p>
            Only at the center in via Vismara 68 in Garbagnate is it possible to
            carry out:
          </p>
          <ul>
            <li>
              Nutrition visit with bioimpedance measurement and drafting of the
              relevant food program
            </li>
            <li>
              Indirect calorimetry for measuring basal metabolism (depending on
              the amount of oxygen consumed in a resting situation)
            </li>
            <li>Bioimpedancemetry for the evaluation of body composition</li>
            <li>Periodic checks</li>
            <li>Periodic checks</li>
            <li>Periodic checks</li>
          </ul>
          <p>
            The visits include bioimpedance measurement for the evaluation of
            body composition (fat and lean mass and percentage of intra and
            extracellular water) and indirect calorimetry for the measurement of
            basal metabolism (depending on the quantity of oxygen consumed in a
            resting situation).
          </p>
        </div>
      </div>
      <div class="add-appointment">
        <button @click="showForm = !showForm" class="book-appointment">
          per prenotare l'appuntamento clicca qui</button>
        <div v-if="showForm" class="appointment-form-container">
          <appointment />
        </div>
      </div>
      <contactus/>
    </div>
  </div>
</template>

<script setup>
const showForm = ref(false);
</script>

<style scoped>
.sub-services {
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

.services-heading {
  position: relative;
  z-index: 2;
  color: white;
  font-weight: 600;
  font-size: 30px;
  text-transform: capitalize;
}
.subservices-main {
  padding: 50px 0 0;
  gap: 2rem;
  display: flex;
}
.services-img img {
    width: 100%;
    object-fit: contain;
    height: auto;
}
.services-content p {
    font-size: 16px;
    line-height: 1.5;
    padding: 10px 3px;
}
.services-content li {
    list-style: square;
}
.services-content ul {
    margin-left: 25px;
}
@media (max-width: 992px) {
.subservices-main {
flex-direction: column;
}
.services-heading {
  font-size: 24px;
}
}
</style>
