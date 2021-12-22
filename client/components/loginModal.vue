<template>
<!--  <div class="login-modal modal" :class="{'modal&#45;&#45;active': status}">-->
<!--    <div class="overlay" @click="closeModal">-->
<!--    </div>-->
<!--    <form action="" class="login-modal__form" @submit.prevent = "loginUser">-->
<!--      <h2 class="login-modal__title">Вход</h2>-->
<!--      <input type="text" placeholder="Логин" v-model="login">-->
<!--      <input type="password" placeholder="Пароль" v-model="password">-->
<!--      <input type="submit" class="btn">-->
<!--    </form>-->
<!--  </div>-->
  <b-modal id="loginModal" title="Авторизация" hide-footer>
    <b-form @submit.prevent="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Логин"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="login"
          type="text"
          placeholder="Введите логин"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Пароль" label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          v-model="password"
          placeholder="Введите пароль"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" class="btn-center" variant="primary">Вход</b-button>
    </b-form>
  </b-modal>
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
    onSubmit() {
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

.btn-center {
  margin: 0 auto;
}
</style>
