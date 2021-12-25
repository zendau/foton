<template>
  <b-navbar toggleable="lg" type="dark" variant="info" class="main-menu">
    <NuxtLink class="main-menu__logo" to="/"><img src="~static/img/logo.png" alt="лого"></NuxtLink>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav class="ml-5">
      <b-navbar-nav>
        <NuxtLink class="main-menu__link" :prefetch="false" to="/">Главная</NuxtLink>
        <NuxtLink class="main-menu__link"  to="/catalog">Производство</NuxtLink>
        <NuxtLink class="main-menu__link"  to="/feedback">Обратная связь</NuxtLink>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" class="main-menu__login main-menu__link" v-b-modal.loginModal>Вход</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
<!--  <header>-->
<!--    <nav class="main-menu">-->
<!--      -->
<!--      <ul class="main-menu__items">-->
<!--        <li></li>-->
<!--        <li></li>-->
<!--        <li></li>-->
<!--      </ul>-->
<!--      <a </a>-->
<!--    </nav>-->
<!--  </header>-->
</template>

<script>
export default {
  name: "headerComponent"

}
</script>

<style scoped lang="scss">
.main-menu {
  background-color: #506D84!important;

&__logo {
   grid-area: menu-logo;
   margin: 5px 10px;
 }

&__items {
   grid-area: menu-nav;
   list-style: none;
   display: flex;
   justify-self: start;
   width: 100%;
   margin: 0;
 }

&__link {
   text-decoration: none;
   color: white;
   font-size: 18px;
   margin-right: 15px;
   padding: 0 5px;

   position: relative;

&:before {
   position: absolute;
   top: 50px;
   left: 0;
   display: block;
   height: 3px;
   width: 0%;
   background-color: #D4B499;
   content: "";

   transition: .4s ease;

 }

&:hover {
&:before {
   width: 100%;
 }
}

}

&__login {
   grid-area: menu-login;
    cursor: pointer;
 }

}

.nuxt-link-exact-active {
  color: #F3D5C0;
}

@media (max-width: 988px) {
  .main-menu__link {
    &:before {
      display: none;
    }
  }
  .navbar-nav {
    margin-top: 10px;
  }

  .main-menu__link {
    margin: 10px 0;
    font-size: 24px;
  }
}

</style>
