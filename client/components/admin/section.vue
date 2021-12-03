<template>
  <b-form @submit.prevent="editData">
    <b-form-group
      label="Заголовок"
      label-for="input-1"
    >
      <b-form-input id="input-1" v-model="content.title" placeholder="Введите название"></b-form-input>
    </b-form-group>
    <b-form-group
      label="Описание"
      label-for="textarea"
    >

      <b-form-textarea
        id="textarea"
        v-model="content.desc"
        placeholder="Введите описание"
        rows="3"
        max-rows="6"
      ></b-form-textarea>

    </b-form-group>

    <b-form-group
      v-if="type === 'achievement'"
      label="Кол-во"
      label-for="textarea"
    >

      <b-form-input id="input-1" v-model="content.count" placeholder="Введите кол-во"></b-form-input>

    </b-form-group>


    <b-button class="btn" type="submit" variant="primary">Изменить</b-button>
  </b-form>
</template>

<script>
export default {
  name: "sectionComponent",
  props: ["content", "type"],
  methods: {
    editData() {
      this.$emit("editData", this.content, this.type)
    }
  }
}
</script>

<style scoped>


.btn {
  padding: 0;
  margin: 0 auto;
}

</style>
