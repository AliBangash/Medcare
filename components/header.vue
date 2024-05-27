<template>
  <div class="main-header">
    <div class="container">
      <header class="header-area">
        <nav class="nav">
          <input type="checkbox" id="nav-check" v-model="isChecked" />
          <div class="nav-header">
            <div class="nav-title">
              <NuxtLink to="/">
                <NuxtImg src="/logo.png" alt="logo" class="main-logo" />
              </NuxtLink>
            </div>
          </div>
          <ul class="nav-list">
                 <li>
              <NuxtLink to="/" @click="closeMenu">Home</NuxtLink>
            </li>
            <li>
              <div class="dropdown">
                <div class="dropdown-flex">
                  <NuxtLink to="/services" @click="closeMenu">Servizi</NuxtLink>
                  <div class="dropsvg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="dropdown-content">
                  <NuxtLink to="/certificsto-medico-sprtivo" @click="closeMenu"
                    >Certificato Medico Sportivo</NuxtLink
                  >
                  <NuxtLink to="/ecg-a-riposo" @click="closeMenu">ECG a Riposo</NuxtLink>
                  <NuxtLink to="/ecg-sotto-sforzo" @click="closeMenu"
                    >ECG-Sotto-Sforzo</NuxtLink
                  >
                  <NuxtLink to="/visita-cardiologica-con-ecg" @click="closeMenu"
                    >Visita Cardiologica con ECG</NuxtLink
                  >
                  <NuxtLink to="/holter-pressorio" @click="closeMenu"
                    >Holter Pressorio</NuxtLink
                  >
                  <NuxtLink to="/holter-ecg" @click="closeMenu">Holter ECG</NuxtLink>
                  <NuxtLink to="/spirometria" @click="closeMenu">Spirometria</NuxtLink>
                  <NuxtLink to="/ecocardiografia" @click="closeMenu">Ecocardiografia</NuxtLink>
                  <NuxtLink to="/visita-generica" @click="closeMenu">Visita-generica</NuxtLink>
                </div>
              </div>
            </li>
            <li>
              <NuxtLink to="/about-us" @click="closeMenu">Il nostro centro</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" @click="closeMenu">Contatti</NuxtLink>
            </li>
          </ul>
          <div class="social-icon">
            <ul>
              <li>
                <NuxtLink to="#" class="fb">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path
                      d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                    />
                  </svg>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink href="tel:336794562">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      d="M497.4 361.8l-112-48a24 24 0 0 0 -28 6.9l-49.6 60.6A370.7 370.7 0 0 1 130.6 204.1l60.6-49.6a23.9 23.9 0 0 0 6.9-28l-48-112A24.2 24.2 0 0 0 122.6 .6l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.3 24.3 0 0 0 -14-27.6z"
                    />
                  </svg>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink href="mailto:giovanniarata1@gmail.com">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                    />
                  </svg>
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="nav-btn" @click="toggleMenu">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
        </nav>
      </header>
    </div>
  </div>
</template>

<script setup>
const isChecked = ref(false);

 const toggleMenu = () => {
 return isChecked.value = isChecked.value;
}
const closeMenu = () => {
  isChecked.value = false; 
}
</script>

<style scoped>
.dropdown-content a:hover {
  background: #000000;
}
.dropdown-flex {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
}

.dropsvg {
  margin-left: 5px;
}

.dropsvg svg {
  width: 10px;
  fill: #2f67aa;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #2f67aa;
  min-width: 320px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 10;
  /* padding: 13px; */
}

.dropdown-content a {
  display: block;
  padding: 12px 10px;
}

.dropdown-content a {
  color: #fff !important;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.main-header {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3) !important;
}

.social-icon ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.social-icon svg {
  fill: #fff;
  width: 15px;
  height: 15px;
}

.social-icon .fb {
  fill: #fff;
  width: 15px;
}

.social-icon li {
  background: #2f67aa;
  fill: #fff;
  width: 27px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}

.main-logo {
  height: auto;
  object-fit: cover;
  width: 100%;
  cursor: pointer;
}

.nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
}

.nav > .nav-header > .nav-title {
  font-size: 22px;
  color: #fff;
}

.nav > .nav-list {
  display: flex;
  gap: 2rem;
}

.nav > .nav-list > li {
  list-style-type: none;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
}

.nav > .nav-list > li a {
  text-decoration: none;
  color: #2f67aa;
  cursor: pointer;
}

.nav > #nav-check {
  display: none;
}
.nav-btn label {
  cursor: pointer;
  position: relative;
  display: block;
  width: 35px;
  height: 35px;
}

.nav-btn span {
  transition: all 0.2s ease-in-out;
}

#nav-check:checked ~ .nav-btn label span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
#nav-check:checked ~ .nav-btn label span:nth-child(2) {
  opacity: 0;
}
#nav-check:checked ~ .nav-btn label span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -4px);
}

@media (max-width: 767px) {
  .nav > .nav-list {
    box-shadow: 0 0 10px rgba(47, 103, 170, 0.5); 
  }
  .dropdown-content {
    display: block !important; 
  }
  .dropsvg svg {
    fill: #fff;
  }
  .nav > .nav-list > li a {
    color: #fff;
  }
  .main-logo {
    max-width: 200px;
  }
  .nav {
    padding: 1rem 0;
  }

  .nav > .nav-btn {
    cursor: pointer;
    background: #2f67aa;
    border-radius: 4px;
    width: 35px;
    height: 35px;
  }

  .nav > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    top: 10px;
    position: relative;
    left: 5px;
  }

  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 7px;
    border-top: 2px solid #eee;
  }

  .nav > .nav-list {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 0;
    width: 100%;
    height: 0;
    transition: all 0.3s ease-in;
    top: 75px;
    left: 0;
    overflow: hidden;
    background: #2f67aa;
    z-index: 99;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .nav > .nav-list > li {
    width: 100%;
    padding: 15px 0;
    text-align: center;
  }

  .nav > #nav-check:checked ~ .nav-list {
    height: auto;
  }
  .dropdown-content {
    position: relative;
    box-shadow: none;
  }
}
@media (min-width: 768px) and (max-width: 991px){
.nav > .nav-list > li a {
    font-size: 14px;
}
.nav > .nav-list{
    gap: 1rem;
}
.main-logo {
  max-width: 240px;
}
}

@media (min-width: 768px){
  .nav-btn {
    display: none;
}
}
</style>