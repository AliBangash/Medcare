<template>
    <div class="container">
  <header class="header-area">
    <nav class="nav">
      <input type="checkbox" id="nav-check" />
      <div class="nav-header">
        <div class="nav-title">
            <NuxtImg src="/logo.webp" alt="logo"  class="main-logo"/>
        </div>
      </div>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <ul class="nav-list">
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
<div class="social-icon">
    <ul>
        <li><NuxtLink to="#" class="fb"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg></NuxtLink></li>
        <li><NuxtLink to="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M497.4 361.8l-112-48a24 24 0 0 0 -28 6.9l-49.6 60.6A370.7 370.7 0 0 1 130.6 204.1l60.6-49.6a23.9 23.9 0 0 0 6.9-28l-48-112A24.2 24.2 0 0 0 122.6 .6l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.3 24.3 0 0 0 -14-27.6z"/></svg></NuxtLink></li>
        <li><NuxtLink to="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg></NuxtLink></li>
    </ul>
</div>
    </nav>
  </header>
</div>
</template>

<script>
// import { NuxtLink } from '#build/components';

// import { NuxtImg } from '#build/components';

export default {
    // components: { NuxtLink }
};
</script>

<style scoped>
.social-icon ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
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
    max-width: 238px;
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
@media (max-width: 480px) {
  .nav {
    padding: 1rem;
  }
  .nav > .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0;
    padding-top: 0.2rem;
  }
  .nav > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
  }
  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  .nav > .nav-list {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 0;
    transition: all 0.3s ease-in;
    top: 40px;
    left: 0;
    overflow: hidden;
  }
  .nav > .nav-list > li {
    width: 100%;
    margin-top: 1.5rem;
  }
  .nav > #nav-check:checked ~ .nav-list {
    height: calc(100vh - 50px);
  }
}
</style>
