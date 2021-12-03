<template>
  <b-form @submit.prevent="editData">
      <b-form-group
        label="Заголовок"
        :label-for="`input-1${contactData.id}`"
      >
        <b-form-input :id="`input-1${contactData.id}`" v-model="contactData.title" placeholder="Введите название"></b-form-input>
      </b-form-group>
      <b-form-group
        label="Содержимое"
        :label-for="`input-2${contactData.id}`"
      >
        <b-form-input :id="`input-2${contactData.id}`" v-model="contactData.desc" placeholder="Введите название"></b-form-input>
      </b-form-group>
    <b-button class="btn" type="submit" variant="primary">Изменить</b-button>
  </b-form>
</template>

<script>
export default {
  name: "contactComponent",
  props: ["contactData"],
  methods: {
    editData() {
      this.$emit("editData", this.contactData)
    }
  }
}
</script>

<style scoped>
.btn {
  padding: 0;
  margin: 0 auto 50px;
}
</style>
