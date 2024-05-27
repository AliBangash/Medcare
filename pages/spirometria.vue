<template>
  <div>
    <div class="sub-services">
      <div class="bg-color"></div>
      <div class="container">
      <h3 class="services-heading">spirometria</h3>
      </div>
    </div>
    <div class="container">
      <div class="subservices-main">
        <div class="services-img">
          <NuxtImg src="/images/sub-servics.jpg" alt="sub services" />
        </div>
        <div class="services-content">
          <p>
            La spirometria consiste nella misurazione della quantità di aria che il
polmone utilizza nella respirazione e nella misura dei flussi dell’aria durante la respirazione
forzata confrontando i risultati con uno standard noto, in funzione della età, del sesso, della
altezza e del peso. Il paziente respira dentro un boccaglio collegato con lo spirometro e gli
viene chiesto di eseguire delle manovre respiratorie lente e forzate, ripetendole più volte in
modo da essere certi che si misurino valori reali e non viziati da manovre non corrette.
La spirometria serve per verificare se esista un danno nel funzionamento del nostro apparato
respiratorio. Raccomandiamo di portare con se la documentazione di eventuali terapie in
atto, pregresse patlogie e se disponibili precedenti esami spirometrici.
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
