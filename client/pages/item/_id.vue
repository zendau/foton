<template>
    <section class="read-item">
      <img src="~static/img/item.jpg" alt="" class="read-item__img">
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


    const item = await $axios.$get(`http://localhost:8080/catalog/get/${params.id}`)

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
</style>
