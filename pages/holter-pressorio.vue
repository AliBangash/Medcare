<template>
  <div>
    <div class="sub-services">
      <div class="bg-color"></div>
      <div class="container">
        <h3 class="services-heading">holter-pressorio</h3>
      </div>
    </div>
    <div class="container">
      <div class="subservices-main">
        <div class="services-img">
          <NuxtImg src="/images/sub-servics.jpg" alt="sub services" />
        </div>
        <div class="services-content">
          <p>
            Il monitoraggio continuo della pressione arteriosa per 24 ore è un esame strumentale che
            consiste nella misurazione automatica, a intervalli regolari, della pressione sanguigna e
            della frequenza cardiaca nell’arco di 24 ore.
          </p>
          <p>Questa indagine è utile sia per confermare il sospetto diagnostico di ipertensione, sia per
            valutare l'efficacia di una eventuale terapia in atto. Grazie alla compilazione da parte del
            paziente di un diario delle attività della giornata e degli eventuali sintomi consente di
            mettere in relazione i valori misurati con le attività svolte (lavoro, riposo, sonno, eccetera) e
            di valutare l’efficacia dell’eventuale terapia antipertensiva assunta dal paziente.</p>

        </div>
      </div>
      <div class="add-appointment">
        <button @click="showForm = !showForm" class="book-appointment">
          per prenotare l'appuntamento clicca qui</button>
        <div v-if="showForm" class="appointment-form-container">
          <appointment />
        </div>
      </div>
      <contactus />
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
}</style>
