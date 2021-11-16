<template>
  <section class="contact-form">
    <h1>Напишите нам и мы вам ответим</h1>
    <form action="" @submit.prevent="sendMail">
      <input type="text" placeholder="Ваше имя*" v-model="name" required>
      <input type="text" placeholder="Ваша компания" v-model="company">
      <input type="text" placeholder="Ваш телефон*" v-model="phone" required>
      <input type="text" placeholder="Ваш e-mail*" v-model="email" required>
      <input type="text" placeholder="Тема для обсужденя" v-model="subject">
      <b-form-textarea
        id="textarea"
        v-model="text"
        placeholder="Сообщение"
        rows="3"
        max-rows="6"
      ></b-form-textarea>
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
      email: "",
      company: "",
      phone: "",
      text: ""
    }
  },
  methods: {
    sendMail() {

      this.$axios.$post('api//email/sendEmail', {
        name: this.name,
        company: this.company,
        phone: this.phone,
        text: this.text,
        author: this.email,
        subject: this.subject
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

    textarea {
      margin-top: 10px;
      grid-column: 1/3;
    }

    input[type="submit"] {
      margin-top: 15px;
      line-height: 0;
      grid-column: 1/3;
      justify-self: center;
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
