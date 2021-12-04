<template>
  <div class="form-container">

    <select class="form-select" @change="onChange" v-model="selected">
      <option value="" disabled>Выберите элемент для изменения</option>
      <option value="" v-for="item in items" :value="item.title" :key="item.id">{{item.title}}</option>
    </select>

    <b-form @submit.prevent="onSubmit">
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
          v-model="desk"
          placeholder="Введите описание"
          rows="3"
          max-rows="6"
          required
        ></b-form-textarea>

      </b-form-group>


      <b-button class="btn" type="submit" variant="primary" :disabled="selected === ''">Сохранить</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "edit.vue",
  layout: "admin",
  data() {
    return {
      selected: "",
      items: [],
      title: "",
      desk: "",
      id: 0
    }
  },
  methods: {
    onChange() {

      const res = this.items.filter(item => item.title === this.selected)

      this.title = res[0].title
      this.desk = res[0].desk
      this.id = res[0].id
    },
    async onSubmit() {
      await this.$axios.put('api/catalog/edit', {
        id: this.id,
        title: this.title,
        desc: this.desk
      })

      this.items = this.items.map(item => {
        if (item.title === this.selected) {
          item.title = this.title
          item.desk = this.desk
        }

        return item
      })




    }
  },
  async mounted() {
    this.items = await this.$axios.$get('api/catalog/getAllItems')
  }
}
</script>

<style scoped>
.form-container {
  width: 600px;
  margin: 30px auto 0;
}

.form-select {
  display: inline-block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  vertical-align: middle;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  appearance: none;
}

.btn {
  padding: 0;
  margin: 0 auto;
}

button[disabled] {
  cursor: not-allowed;
}
</style>
