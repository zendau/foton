<template>
  <div class="catalog__item">
    <h3 class="catalog__title">{{ title }}</h3>
    <img :src="`http://localhost:8080/catalog_img/${img}`" alt="Товар №1" class="catalog__img">
    <NuxtLink class="btn catalog_btn" :to="`/item/${id}`">Открыть</NuxtLink>
  </div>
</template>

<script>
export default {
  name: "catalogItem",
  props: ["title", "id", "img"]
}
</script>

<style lang="scss">
  .catalog__item {
    border: 1px solid #d3dcea;
    border-radius: 6px;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
    padding: 10px;

    &:hover {
      box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 0.2);
    }

  }

  @media (max-width: 1200px) {
    .catalog__item {
      width: 260px;
    }
  }

  @media (max-width: 720px) {
    .catalog__item {
      box-sizing: border-box;
    }
  }
</style>
