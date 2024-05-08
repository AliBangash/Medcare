<template>
    <div>
        <slider></slider>
        <div class="container">
            <h1 class="heading-home">OUR SERVICES</h1>
            <div class="maingrid">
                <div class="services">
                    <NuxtImg  src="/images/services1.jpg" alt="home-services" class="services" />
                    <div class="absolutetext">
                        <p>hello we are</p>
                    </div>
                </div>
                <div class="services">
                    <NuxtImg  src="/images/services2.jpg" alt="home-services" class="services" />
                    <div class="absolutetext">
                        <p>hello we are</p>
                    </div>
                </div>
                <div class="services">
                    <NuxtImg  src="/images/services3.jpg" alt="home-services" class="services" />
                    <div class="absolutetext">
                        <p>hello we are</p>
                    </div>
                </div>
                <div class="services">
                    <NuxtImg  src="/images/services4.jpg" alt="home-services" class="services" />
                    <div class="absolutetext">
                        <p>hello we are</p>
                    </div>
                </div>
                <div class="services">
                    <NuxtImg  src="/images/services5.jpg" alt="home-services" class="services" />
                    <div class="absolutetext">
                        <p>hello we are</p>
                    </div>
                </div>
                <div class="services">
                    <NuxtImg  src="/images/services6.jpg" alt="home-services" class="services" />
                    <div class="absolutetext">
                        <p>hello we are</p>
                    </div>
                </div>
                <div class="services">
                    <NuxtImg  src="/images/services7.jpg" alt="home-services" class="services" />
                    <div class="absolutetext">
                        <p>hello we are</p>
                    </div>
                </div>
                <div class="services">
                    <NuxtImg  src="/images/services8.jpg" alt="home-services" class="services" />
                    <div class="absolutetext">
                        <p>hello we are</p>
                    </div>
                </div>
                <div class="services">
                    <NuxtImg  src="/images/services9.jpg" alt="home-services" class="services" />
                    <div class="absolutetext">
                        <p>hello we are</p>
                    </div>
                </div>
                <div class="services">
                    <NuxtImg  src="/images/services10.jpg" alt="home-services" class="services" />
                    <div class="absolutetext">
                        <p>hello we are</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

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
