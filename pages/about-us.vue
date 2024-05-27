<template>
  <div>
    <div class="aboutus">
      <div class="bg-color"></div>
      <div class="container">
        <h3 class="about-heading">CHI SIAMO</h3>
      </div>
    </div>
    <div class="container">
      <div class="aboutus-main">
        <div class="aboutus-content flex-item">
          <p>
            Lo Studio Medico Sportivo Specialistico del dott. Giovanni Arata situato a Piacenza
            in via primo maggio 87, si dedica da decenni alla prevenzione, trattamento e alla cura
            delle patologie legate all'esercizio fisico.
          </p>
          <p>
            Il dottor Arata, specializzato in Medicina dello Sport si avvale della collaborazione di
            specialisti in quelle discipline strettamente correlate alla attività fisica e sportiva,
            eseguendo test e valutazioni al fine di individuare eventuali problemi connessi
            all’attività sportiva o che potrebbero impedirne la pratica, come ad esempio patologie
            respiratorie o disturbi cardiaci.
          </p>
          <p>
            La Medicina dello Sport in Italia assume così il ruolo fondamentale di medicina
            preventiva a tutela non solo della pratica sportiva agonistica ed amatoriale ma anche
            nei riguardi di tutta la popolazione.
          </p>
        </div>
        <div class="aboutus-img flex-item">
          <NuxtImg src="/images/about.png" alt="about-us" />
        </div>
      </div>
      <ourteam />
    </div>
  </div>
</template>
<style scoped>
.flex-item {
  flex: 1;
  padding: 10px;
}

.aboutus {
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

.aboutus-main {
  padding: 50px 0 0;
  gap: 2rem;
  display: flex;
  align-items: center;
}

.aboutus-img img {
  width: 100%;
  object-fit: contain;
  height: auto;
  border-radius: 20px;
}

.aboutus-content p {
  font-size: 16px;
  line-height: 1.5;
  padding: 10px 3px;
}

.about-heading {
  position: relative;
  z-index: 2;
  color: white;
  font-weight: 600;
  font-size: 30px;
  text-transform: capitalize;
}

.aboutus-content h3 {
  font-size: 30px;
  font-weight: bold;
  color: #2f67aa;
}

@media (max-width: 992px) {
  .aboutus-main {
    flex-direction: column;
  }

  .about-heading {
    font-size: 24px;
  }
}</style>