<template>
  <div class="form-container">
    <b-form @submit.prevent="addItem">
      <b-form-group
        label="Заголовок"
        label-for="input-1"
        description="Заголовок для карточки товара"
      >
        <b-form-input id="input-1" v-model="title" placeholder="Введите название" required></b-form-input>
      </b-form-group>

      <b-form-group
        label="Описание товара"
        label-for="textarea"
        description="Описание товара"
      >

        <b-form-textarea
          id="textarea"
          v-model="desc"
          placeholder="Введите описание"
          rows="3"
          max-rows="6"
          required
        ></b-form-textarea>

      </b-form-group>


      <b-button class="btn" type="submit" variant="primary">Добавить</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "add",
  layout: "admin",
  data() {
    return {
      title: '',
      desc: ""
    }
  },
  methods: {
    async addItem() {
      await this.$axios.$post('api/catalog/create', {
        title: this.title,
        desc: this.desc
      })
    }
  }
}
</script>

<style scoped>
  .form-container {
    width: 600px;
    margin: 30px auto 0;
  }

  .btn {
    padding: 0;
    margin: 0 auto;
  }

</style>
