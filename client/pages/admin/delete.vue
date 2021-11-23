<template>
  <div class="form-container">
    <b-form @submit.prevent="onSubmit">
      <select class="form-select" v-model="selectedId">
        <option value="" v-for="item in items" :value="item.id" :key="item.id">{{item.title}}</option>
      </select>

      <b-button class="btn" type="submit" variant="primary">Удалить</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "delete.vue",
  layout: "admin",
  data() {
    return {
      selectedId: null,
      items: [],
      title: ""
    }
  },
  async mounted() {
    this.items = await this.$axios.$get('api/catalog/getAllItems')
  },
  methods: {
    async onSubmit() {
      await this.$axios.delete('api/catalog/delete', {
        data : {
          id: this.selectedId,
        }
      })

      this.items = this.items.filter(item => item.id !== this.selectedId)

    },
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

</style>
