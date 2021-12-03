<template>
  <div class="form-container">
    <div>
      <b-tabs content-class="mt-3">
        <b-tab v-for="(item, index) in content" :key="index+item.title" :title="`Секция №${index+1}`">
          <section-component :content="item" type="content" @editData="editData"/>
        </b-tab>
        <b-tab v-for="(item, index) in achievements" :key="index+item.title" :title="`Достижение №${index+1}`">
          <section-component :content="item" type="achievement" @editData="editData"/>
        </b-tab>
        <b-tab
          title="Контакты"
        >
          <select class="form-select" v-model="selectedContact">
            <option value="" disabled>Выберите контант для изменения</option>
            <option value="" v-for="item in contacts" :value="item" :key="item.id">{{item.title}}</option>
          </select>
          <contact-component :contactData="selectedContact" v-if="selectedContact !== ''" @editData="editData"/>
        </b-tab>
      </b-tabs>
    </div>
    <modal-message :message="message"/>
  </div>
</template>

<script>
import SectionComponent from "../../components/admin/section";
import ContactComponent from "../../components/admin/contact";
import ModalMessage from "../../components/UI/modal";
export default {
  components: {ModalMessage, ContactComponent, SectionComponent},
  data() {
    return {
      text: "",
      content: [],
      achievements: [],
      contacts: [],
      selectedContact: "",
      message: "Значение успешно изменино"
    }
  },
  name: "content",
  layout: "admin",
  methods: {
    async editData(content, type) {

      let res = null

      if (type === "content") {
        res = await this.$axios.put('api/admin/sections/edit', content)

      } else if (type === "achievement") {
        res = await this.$axios.put('api/admin/achievements/edit', content)
      } else {
        res = await this.$axios.put('api/admin/contacts/edit', content)
      }

      if (res.statusText) {
        this.$bvModal.show("modalMessage")
      }
    }
  },
  async fetch() {
    this.content = await this.$axios.$get('api/admin/sections/all')
    this.achievements = await this.$axios.$get('api/admin/achievements/all')
    this.contacts = await this.$axios.$get('api/admin/contacts/all')
  }
}
</script>

<style scoped>
.form-container {
  width: 1000px;
  margin: 30px auto 0;
}
.form-select {
  margin: 0 auto;
  display: block;
}
</style>
