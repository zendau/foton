<template>
  <div class="form-container">

    <select class="form-select" @change="onChange" v-model="selected">
      <option value="" disabled>Выберите элемент для изменения</option>
      <option v-for="item in items" :value="item.title" :key="item.id">{{item.title}}</option>
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
        v-if="image"
        label="Изображение товара"
        label-for="input-1"
      >
        <b-img thumbnail ref="inputImage" fluid :src="`http://localhost:8080/catalog_img/${image}`" alt="Изображение товара"></b-img>
      </b-form-group>

      <div>
        <label for="image">Новое изображение товара</label>
        <input id="image" ref="inputImage" type="file" placeholder="Изображение товара" required>
      </div>


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
      desc: "",
      id: 0,
      image: ""
    }
  },
  methods: {
    onChange() {
      const res = this.items.filter(item => item.title === this.selected)

      this.title = res[0].title
      this.desc = res[0].desc
      this.id = res[0].id
      this.image = res[0].image
    },
    async onSubmit() {

      const form = new FormData();
      form.append("id", this.id)
      form.append("title", this.title)
      form.append("desc", this.desc)
      form.append('file', this.$refs.inputImage.files[0])

      await this.$axios.put('api/catalog/edit', form)

      this.items = this.items.map(item => {
        if (item.title === this.selected) {
          item.title = this.title
          item.desc = this.desc
        }

        return item
      })

    }
  },
  async mounted() {
    this.items = await this.$axios.$get('api/catalog/getAllItems')

    console.log(this.items)
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
