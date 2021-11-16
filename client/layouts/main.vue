<template>
  <div class="container-100vh">
    <header-component v-on:openModal="openModal" />
    <div class="body-container">
      <Nuxt />
    </div>
    <login-modal :status="modalStatus" v-on:closeModal="closeModal"/>
    <footer-component />
  </div>

</template>

<script>
import HeaderComponent from "~/components/header";
import FooterComponent from "~/components/footer";
export default {
  name: "default",
  components: {FooterComponent, HeaderComponent},
  data() {
    return {
      modalStatus: false
    }
  },
  methods: {
    openModal() {
      this.modalStatus = true
    },
    closeModal() {
      this.modalStatus = false
    }
  }
}
</script>

<style lang="scss">
  * {
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
  }

  body {
    background-color: #f7faff;
  }

  .btn {
    display: block;
    outline: none;
    text-decoration: none;
    border:none;
    border-radius: 3px;
    height: 40px;
    width: 130px;
    font-size: 16px;
    cursor: pointer;
    transition: .4s ease;
    background-color: #0656a7;
    color: #fff;
    text-align: center;
    line-height: 40px;

  &:hover {
     background-color: #0765c5;
   }

  }


  .body-container {
    flex: 1 0 auto;
  }

  section {
    width: 1200px;
    display: block;
    margin: 25px auto;
  }

  input {
    padding: 3px 5px;
    box-sizing: border-box;
    font-size: 18px;
  }

  .modal {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;

  &--active {
     display: block;
   }
  }

  .overlay {
    background-color:rgba(0,0,0,.3);
    height: 100%;
    display: block;
    width: 100%;
    z-index: 100;
  }

  .container-100vh {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

</style>
