<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="/">Главная</b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <NuxtLink class="admin-menu__link"  to="/admin/add">Добавление продукции</NuxtLink>
            <NuxtLink class="admin-menu__link"  to="/admin/edit">Изменение продукции</NuxtLink>
            <NuxtLink class="admin-menu__link"  to="/admin/delete">Удаление продукции</NuxtLink>
            <NuxtLink class="admin-menu__link"  to="/admin/content">Редактирование сайта</NuxtLink>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <Nuxt/>
  </div>
</template>

<script>
export default {
  name: "admin"
}
</script>

<style scoped>
  .admin-menu__link {
    color: rgba(255, 255, 255, 0.5);
    margin-left: 10px;
  }

  .nuxt-link-exact-active {
    color: #F3D5C0;
  }
</style>
