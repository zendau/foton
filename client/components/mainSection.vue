<template>
  <keep-alive>
    <section class="main-section">
      <h1>{{ content.title }}</h1>
      <p>{{ content.desc }}</p>
    </section>
  </keep-alive>
</template>

<script>
export default {
  name: "mainSection",
  props: ['content']
}
</script>

<style lang="scss">
.main-section {
  margin: 0;
  background-image: url("/img/background.jpg");
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.2);

  h1 {
    padding-top: 15%;
    color: #fff;
    font-size: 65px;
    margin-left: 10%;
  }

  p {
    color: #fff;
    font-size: 25px;
    margin-left: 10%;
    padding-bottom: 15%;
  }
}
</style>
