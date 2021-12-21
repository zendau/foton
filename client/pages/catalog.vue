<template>
  <section class="catalog">
    <div class="wrapper">
      <catalog-item v-for="item in items" :key="item.id" :id="item.id" :title="item.title" :img="item.image" />
    </div>
  </section>
</template>

<script>
export default {
  name: "catalog",
  layout: "main",
  async mounted() {
    this.items = await this.$axios.$get('api/catalog/getAllItems')
  },
  data() {
    return {
      items: []
    }
  }
}
</script>

<style lang="scss">
.catalog {

  .wrapper {
    display: grid;

    grid-template-columns: repeat(4, 300px);
  }



  &_btn {
    margin-top: 15px;
    margin-bottom: 5px;
  }

  &__title {
    font-size: 22px;
    text-align: center;
    margin-bottom: 15px;
  }

  &__img {
    width: 240px;
    height: 250px;
  }

}
</style>
