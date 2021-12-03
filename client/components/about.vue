<template>
  <section class="about">
    <h1>{{content.title}}</h1>
    <p>{{content.desc}}</p>
  </section>
</template>

<script>
export default {
  name: "about",
  props: ['content']
}
</script>

<style lang="scss">
.about {
  h1 {
    padding: 60px 0;
    font-size: 30px;
  }

  p {
    text-align: justify;
    font-size: 20px;
    margin-bottom: 10px;
  }

  padding-bottom: 100px;
}
</style>
