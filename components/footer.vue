<template>
    <div class="footermain">
        <div class="container footer-data">
        <p>VIA PRIMO MAGGIO, 87, 29121 PIACENZA  (PC)</p>
        <p><NuxtLink href="mailto:studiomedicoarata@gmail.com">studiomedicoarata@gmail.com</NuxtLink></p>
        <div class="social-icon">
    <ul>
        <li><NuxtLink target="_blank" to="https://www.facebook.com/profile.php?id=61560332996763&mibextid=ZbWKwL" class="fb"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg></NuxtLink></li>
        <li><NuxtLink href="tel:336794562"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M497.4 361.8l-112-48a24 24 0 0 0 -28 6.9l-49.6 60.6A370.7 370.7 0 0 1 130.6 204.1l60.6-49.6a23.9 23.9 0 0 0 6.9-28l-48-112A24.2 24.2 0 0 0 122.6 .6l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.3 24.3 0 0 0 -14-27.6z"/></svg></NuxtLink></li>
        <li><NuxtLink href="mailto:giovanniarata1@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg></NuxtLink></li>
    </ul>
</div>
    </div>
    </div>
</template>
<style scoped>
.social-icon ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}
.social-icon svg{
    fill: #fff;
    width: 15px;
    height: 15px;
}
.social-icon .fb{
    fill: #fff;
    width: 15px;
}
.social-icon li{
    background: #21538F;
    fill: #fff;
    width: 27px;
    height: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
}
.footermain{
    background: #2f67aa;
    width: 100%;
}
.footer-data {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
}
.footer-data p {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
}
@media (max-width: 767px){
    .footer-data {
    padding: 16px 20px !important;
    flex-direction: column;
    gap: 20px;
}
.footer-data p {
    font-size: 12px;
}
}
</style>