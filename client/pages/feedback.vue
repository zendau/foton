<template>
  <section class="contact-form">
    <h1>Напишите нам и мы вам ответим</h1>
    <form action="" @submit.prevent="sendMail">
      <input type="text" placeholder="Ваше имя*" v-model="name">
      <input type="text" placeholder="Ваша компания">
      <input type="text" placeholder="Ваш телефон*">
      <input type="text" placeholder="Ваш e-mail*" v-model="email">
      <input type="text" placeholder="Тема для обсужденя" v-model="subject">
      <input type="submit" class="btn" value="Отправить">
    </form>
  </section>
</template>

<script>
export default {
  name: "about",
  layout: "main",
  data() {
    return {
      name: "",
      subject: "",
      email: ""
    }
  },
  methods: {
    sendMail() {

      this.$axios.$post('api//email/sendEmail', {
        text: this.subject,
        author: this.email
      })

      this.name = ""
      this.subject = ""
      this.email = ""
    }
  }
}
</script>

<style lang="scss">
.contact-form {

  margin-top: 50px;

  h1 {
    text-align: center;
    margin-bottom: 15px;
  }

  form {
    width: 800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    input[type="text"] {
      margin-top: 15px;
      margin-right: 10px;
      height: 45px;
      width: 400px;
      font-size: 16px;
      color: #404041;
      border: 1px solid #dfeeff;
      border-radius: 6px;
      box-sizing: border-box;
      padding: 0 20px;

    }

    input[type="submit"] {
      margin-top: 15px;
      line-height: 0;
    }

    input:nth-child(5) {
      grid-column: 1/3;
    }

    input:nth-child(6) {
      justify-self: center;
      grid-column: 1/3;
      margin-top: 20px;
      height: 40px;
      width: 130px;
    }

  }

}
</style>
