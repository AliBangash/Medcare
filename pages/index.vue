<template>
    <div>
        <div class="appointment-slider">
        <Slider/>
        <div class="absolute-data">
        <Appointment/>
        </div>
        </div>
       <div class="container main-ontent">
            <services/>
            <contactus/>
        </div>
    </div>
</template>

<style scoped>

@media (min-width: 768px){
    .appointment-slider {
    position: relative;
}
.absolute-data {
    position: absolute;
    left: 50%;   
    transform: translate(-50%, -50%);
    width: 100%;  
}

.main-ontent {
    margin-top: 140px;
}
}
@media (max-width: 767px){
.absolute-data {
 margin-top: 50px;
}

}
</style>