<template>
  <div class="login-modal modal" :class="{'modal--active': status}">
    <div class="overlay" @click="closeModal">
    </div>
    <form action="" class="login-modal__form" @submit.prevent = "loginUser">
      <h2 class="login-modal__title">Вход</h2>
      <input type="text" placeholder="Логин" v-model="login">
      <input type="password" placeholder="Пароль" v-model="password">
      <input type="submit" class="btn">
    </form>
  </div>
</template>

<script>
export default {
  name: "loginModal",
  props: ["status"],
  data() {
    return {
      login: "",
      password: ""
    }
  },
  methods: {
    loginUser() {

      if (this.login === "root" && this.password === "root") {
        this.$router.push("/admin/add")
      }
    },
    closeModal() {
      this.$emit("closeModal")
    }
  }
}
</script>

<style lang="scss">
.login-modal {

  input {
    width: 300px;
    height: 30px;
    margin-bottom: 20px;


  }

  input[type="submit"] {
    height: 40px;
    width: 130px;
    padding: 0;
  }

  &__title {
     text-align: center;
     margin-bottom: 15px;
   }

  &__form {
     position: absolute;
     left: 50%;
     top: 50%;
     transform: translate(-50%, -50%);
     padding: 20px;
     background-color: #f8f5f2;
     width: 400px;
     z-index: 200;
     display: flex;
     flex-direction: column;
     align-items: center;
   }

}
</style>
