<template>
  <div>
    <div class="sub-services">
      <div class="bg-color"></div>
      <div class="container">
        <h3 class="services-heading">Certificato Medico Sportivo</h3>
      </div>
    </div>
    <div class="container">
      <div class="subservices-main">
        <div class="services-img">
          <NuxtImg src="/images/sub-servics.jpg" alt="sub services" />
        </div>
        <div class="services-content">
          <p>
            Il certificato medico sportivo è il documento che attesta lo stato di sana e robusta
costituzione necessario allo svolgimento dell’attività fisico-sportiva.
          </p>
          <p>
            Il Ministero della Salute distingue tipologie differenti di attività fisico-
sportiva : agonistica e non agonistica.
Sono qualificate come attività agonistiche le pratiche sportive eseguite in
maniera sistematica e/o continuata da membri tesserati ad una Federazione
sportiva nazionale o Enti sportivi riconosciuti dal Coni, che partecipano
regolarmente a gare ed incontri agonistici.
          </p>
          <p>In questo caso, il certificato medico di idoneità fisica allo svolgimento di sport a
livello agonistico è obbligatorio e deve essere rilasciato da un medico specialista
di medicina dello sport a seguito di accurata visita che generalmente comprende:
esami del sangue e delle urine, spirometria, test visivo
ed elettrocardiogramma sotto sforzo.</p>
<p>Sono considerate attività fisiche non agonistiche:</p>
          <ul>
            <li>
              quelle svolte da persone tesserate in società sportive affiliate alle Federazioni
sportive nazionali, alle Discipline associate, agli Enti di promozione sportiva
riconosciuti dal CONI;
            </li>
            <li>
              quelle svolte dai partecipanti ai giochi sportivi studenteschi nelle fasi
precedenti a quella nazionale;
            </li>
            <li>quelle svolte dagli alunni degli istituti scolastici pubblici nel corso
delle attività parascolastiche.</li>
          </ul>
          <p>
            Secondo le linee guida del decreto 8 agosto 2014, per svolgere queste attività è
obbligatorio un certificato medico sportivo non agonistico rilasciato da un
medico sportivo, oppure dal medico curante o dal pediatra di libera scelta.
          </p>

          <h3 class="noted_h3">Documentazione da portare alla visita:</h3>
          <ul class="noted">
            <li> <p>documento di identità e codice fiscale</p></li>
            <li> <p>richiesta della società sportiva richiedente</p></li>
            <li> <p>documentazione di eventuali problemi di salute</p></li>
          </ul>
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
h3.noted_h3 {
    font-size: 24px;
    font-weight: bold;
    color: #2f67aa;
}
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
