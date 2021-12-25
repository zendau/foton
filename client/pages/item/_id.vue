<template>
    <section class="read-item">
      <img :src="`http://localhost:8080/catalog_img/${this.item[0].name}`" alt="" class="read-item__img">
      <div class="read-item__data">
        <h2 class="read-item__title">Товар  {{ this.item[0].title }}</h2>
        <p class="read-item__text"> {{this.item[0].desc}} </p>
      </div>
    </section>

</template>

<script>
export default {
  name: "_id",
  layout: "main",
  async asyncData({ params, $axios  }) {


    const item = await $axios.$get(`api/catalog/get/${params.id}`)

    console.log(item)

    return { item }
  }
}
</script>

<style lang="scss">
.read-item {
  display: grid;
  grid-template-columns: 1fr 3fr;

  grid-column-gap: 35px;

  &__img {
    width: 400px;
    height: 400px;
  }

  &__title {
    text-align: center;
  }

  &__text {
    margin-top: 15px;
    text-align: justify;
  }

}

@media (max-width: 1200px) {
  .read-item {
    padding: 0 20px;
  }
}

@media (max-width: 720px) {
  .read-item {
    justify-items: center;
    grid-template-columns: 1fr;
    grid-row-gap: 35px;
    grid-column-gap: 0;
  }
}

</style>
