<template>
    <div>
        <div class="sub-services">
            <div class="bg-color"></div>
            <div class="container">
                <h3 class="services-heading">ecg-sotto-sforzo</h3>
            </div>
        </div>
        <div class="container">
            <div class="subservices-main">
                <div class="services-img">
                    <NuxtImg src="/images/sub-servics.jpg" alt="sub services" />
                </div>
                <div class="services-content">
                    <p>
                        L’Elettrocardiogramma sotto sforzo è un esame strumentale non invasivo che consiste nella
                        registrazione dell’attività elettrica del cuore (ECG) durante l’esecuzione di uno sforzo fisico,
                        effettuato camminando su una pedana mobile (treadmill o tapis roulant) oppure pedalando
                        su una cyclette. L’Elettrocardiogramma sotto sforzo (o ECG sotto sforzo) è un esame utile
                        per la diagnosi di malattie ischemiche del cuore e di disturbi del ritmo cardiaco, poiché
                        l’esame valuta la risposta del cuore allo sforzo fisico. Raccomandiamo di portare con se la
                        documentazione di eventuali terapie in atto, pregresse patlogie e se disponibili precedenti
                        eletrocardiogrammi.
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
  