<template>
  <header>
    <nav class="main-menu">
      <NuxtLink class="main-menu__logo" to="/"><img src="~static/img/logo.png" alt="лого"></NuxtLink>
      <ul class="main-menu__items">
        <li><NuxtLink class="main-menu__link" :prefetch="false" to="/">Главная</NuxtLink></li>
        <li><NuxtLink class="main-menu__link"  to="/catalog">Производство</NuxtLink></li>
        <li><NuxtLink class="main-menu__link"  to="/feedback">Обратная связь</NuxtLink></li>
      </ul>
      <a class="main-menu__login main-menu__link" @click="openModal">Вход</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "headerComponent",
  emits: ["openModal"],
  methods: {
    openModal() {
      this.$emit("openModal")
    }
  }
}
</script>

<style scoped lang="scss">
.main-menu {
  display: grid;
  grid-template-columns: 1.5fr 5fr 1fr;
  grid-template-areas: "menu-logo menu-nav menu-login";
  grid-column-gap: 15px;
  align-items: center;
  justify-items: center;
  background-color: #506D84;

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
   top: 33px;
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
</style>
