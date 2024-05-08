<template>
    <div>
        <slider></slider>
        <div class="container">
            <h1 class="heading-home">OUR SERVICES</h1>
            <div class="maingrid">
                <div class="services" v-for="item in serviceItems" :key="item.id">
                    <NuxtImg  :src="item.src" alt="home-services" class="services" />
                    <div class="absolutetext">
                        <p>{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const serviceItems = [
    {id:1, src:'/images/services1.jpg', text:'hello we are'},
    {id:2, src:'/images/services2.jpg', text:'hello we are'},
    {id:3, src:'/images/services3.jpg', text:'hello we are'},
    {id:4, src:'/images/services4.jpg', text:'hello we are'},
    {id:5, src:'/images/services5.jpg', text:'hello we are'},
    {id:6, src:'/images/services6.jpg', text:'hello we are'},
    {id:7, src:'/images/services7.jpg', text:'hello we are'},
    {id:8, src:'/images/services8.jpg', text:'hello we are'},
    {id:9, src:'/images/services9.jpg', text:'hello we are'},
    {id:10, src:'/images/services10.jpg', text:'hello we are'},
]

</script>

<style scoped>
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
    gap: 20px; /* Adjust as needed */
}

.services {
    position: relative;
    overflow: hidden;
}

.services img {
    width: 100%;
    height: auto;
    display: block;
}

.absolutetext {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #2f67aa;
    color: white;
    padding: 10px;
    text-align: center;
}
</style>
