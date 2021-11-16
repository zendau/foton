<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="/">Главная</b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/admin/add">Добавление продукции</b-nav-item>
            <b-nav-item href="/admin/edit">Изменение продукции</b-nav-item>
            <b-nav-item href="/admin/delete">Удаление продукции</b-nav-item>
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

</style>
