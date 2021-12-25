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
  data() {
    return {
      items: []
    }
  },
  async asyncData({ params, $axios  }) {


    const items = await $axios.$get('api/catalog/getAllItems')


    return { items }
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

@media (max-width: 1200px) {
  .catalog {
    width: 800px;

    .wrapper {
      grid-template-columns: repeat(3, 270px);
    }

  }

}


@media (max-width: 820px) {
  .catalog {
    width: 600px;

    .wrapper {
      grid-template-columns: repeat(2, 300px);
      justify-items: center;
    }

  }

}

@media (max-width: 720px) {
  .catalog {
    width: 550px;

    .wrapper {
      grid-template-columns: repeat(2, 275px);
    }

  }
}

</style>
