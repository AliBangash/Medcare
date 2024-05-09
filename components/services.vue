<template>
    <div>
        <h1 class="heading-home">I NOSTRI SERVIZI</h1>
        <p class="para-home">Studio Relab è un punto di riferimento in tutta la provincia di Milano per i suoi trattamenti riabilitativi.</p>
        <div class="maingrid">
            <div class="services" v-for="item in serviceItems" :key="item.id">
                <NuxtImg :src="item.src" alt="home-services" class="services" />
                <div class="absolutetext">
                    <p>{{ item.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const serviceItems = [
    { id: 1, src: '/images/services1.jpg', text: 'CERTIFICATO MEDICO SPORTIVO' },
    { id: 2, src: '/images/services2.jpg', text: 'ECG A RIPOSO' },
    { id: 3, src: '/images/services3.jpg', text: 'TEST DA SFORZO' },
    { id: 4, src: '/images/services4.jpg', text: 'VISITA CARDIOLOGICA CON ECG ' },
    { id: 5, src: '/images/services5.jpg', text: 'HOLTER PRESSORIO' },
    { id: 6, src: '/images/services6.jpg', text: 'HOLTER ECG' },
    { id: 7, src: '/images/services7.jpg', text: 'SPIROMETRIA' },
    // { id: 8, src: '/images/services8.jpg', text: 'hello we are' },
    // { id: 9, src: '/images/services9.jpg', text: 'hello we are' },
]

</script>

<style scoped>
.absolutetext p {
    font-size: 12px;
    font-weight: bold;
}
.para-home {
    font-size: 14px;
    text-align: center;
    padding-bottom: 40px;
    max-width: 45%;
    margin: 0 auto;
    line-height: 2;
}
.heading-home {
    font-size: 45px;
    font-weight: 700;
    color: #2f67aa;
    text-align: center;
    padding: 50px 0;
}

.maingrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.services {
    position: relative;
    overflow: hidden;
}

.services img {
    width: 100%;
    height: 244px;
    display: block;
    object-fit: cover;
}

.absolutetext {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #2f67aa;
    color: white;
    cursor: pointer;
    padding: 10px;
    text-align: center;
    width: 60%;
    border-radius: 5px;
}
</style>
