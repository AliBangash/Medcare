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
            L'ECG dinamico secondo Holter, anche chiamato Holter cardiaco o semplicemente Holter,
è una metodica diagnostica usata per monitorare l'attività elettrica del cuore durante un
intervallo di tempo più o meno ampio, solitamente corrispondente a 24 ore. Durante la
giornata gli viene chiesto di annotare su un diario le varie attività svolte (dormire, mangiare,
assumere farmaci, lavorare, correre) e la comparsa di eventuali sintomi, in modo che ciascun
evento registrato possa essere messo in relazione con una delle attività descritte dal paziente.
I dispositivi attualmente in uso prevedono inoltre la presenza di un pulsante che il paziente
può azionare in caso di insorgenza di dolore toracico o di altri sintomi rilevanti, registrando
così un segnale che costituisce un punto di repere durante la lettura del tracciato da parte del
medico.
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
