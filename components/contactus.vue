<template>
    <div class="container">
        <div class="mainaddress">
            <div class="address-data">
                <div class="data-info">
                    <div class="info">
                        <div class="info-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path
                                    d="M172.3 501.7C27 291 0 269.4 0 192 0 86 86 0 192 0s192 86 192 192c0 77.4-27 99-172.3 309.7-9.5 13.8-29.9 13.8-39.5 0zM192 272c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80z" />
                            </svg>
                        </div>
                        <div class="info-details">
                            <h3>INDIRIZZO</h3>
                            <p>VIA PRIMO MAGGIO, 87, 29121 PIACENZA (PC)</p>
                        </div>
                    </div>
                    <!-- <div class="info">
                        <div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path
                                    d="M172.3 501.7C27 291 0 269.4 0 192 0 86 86 0 192 0s192 86 192 192c0 77.4-27 99-172.3 309.7-9.5 13.8-29.9 13.8-39.5 0zM192 272c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80z" />
                            </svg></div>
                        <div class="info-details">
                            <h3>INDIRIZZO</h3>
                            <p>VIA PRIMO MAGGIO, 87, 29121 PIACENZA  (PC)</p>
                        </div>
                    </div> -->
                    <div class="info">
                        <div class="info-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    d="M497.4 361.8l-112-48a24 24 0 0 0 -28 6.9l-49.6 60.6A370.7 370.7 0 0 1 130.6 204.1l60.6-49.6a23.9 23.9 0 0 0 6.9-28l-48-112A24.2 24.2 0 0 0 122.6 .6l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.3 24.3 0 0 0 -14-27.6z" />
                            </svg>
                        </div>
                        <div class="info-details">
                            <h3>TELEFONO</h3>
                            <p>336794562</p>
                            <p>3339590909</p>
                        </div>
                    </div>
                    <!-- <div class="info">
                        <div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    d="M497.4 361.8l-112-48a24 24 0 0 0 -28 6.9l-49.6 60.6A370.7 370.7 0 0 1 130.6 204.1l60.6-49.6a23.9 23.9 0 0 0 6.9-28l-48-112A24.2 24.2 0 0 0 122.6 .6l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.3 24.3 0 0 0 -14-27.6z" />
                            </svg></div>
                        <div class="info-details">
                            <h3>TELEFONO</h3>
                            <p> 3339590909</p>
                        </div>
                    </div> -->
                    <div class="info">
                        <div class="info-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                            </svg>
                        </div>
                        <div class="info-details">
                            <h3>E-mail</h3>
                            <p>info@random.it</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="address-iframe">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818.8950921074406!2d9.6665603!3d45.0473507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4780dd30d8f87ddb%3A0xd64fd56647943d9e!2sVia%20Primo%20Maggio%2C%2087%2C%2029121%20Piacenza%20PC%2C%20Italy!5e0!3m2!1sen!2s!4v1715259833135!5m2!1sen!2s"
                    width="600" height="450" style="border: 0" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</template>
<style scoped>
.info-details {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.info {
    display: flex;
    gap: 1rem;
    align-items: start;
    padding: 15px 0;
}

.info-details h3 {
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
}

.info-details p {
    font-size: 16px;
    font-weight: 400;
    color: #fff;
}

.address-iframe {
    width: 50%;
}

.address-iframe iframe {
    width: 100%;
    height: 436px;
}

.mainaddress {
    padding: 80px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.address-data {
    background-image: url("/images/bg.jpg");
    background-size: cover;
    background-position: center;
    position: relative;
    width: 50%;
}

.data-info {
    background-color: #2f67aa;
    padding: 60px;
    opacity: 0.5;
}

.info-icon svg {
    width: 21px;
    fill: #fff;
}
@media (max-width: 767px){
    .address-data {
    width: 100%;
}
.address-iframe {
    width: 100%;
}
.mainaddress {
flex-direction: column;
}
}
@media (max-width: 1199px) and  (min-width: 768px) {
    .data-info {
    padding: 50px;
}
}
@media (max-width: 520px){
    .data-info {
    padding: 60px 20px;
}
}
</style>
