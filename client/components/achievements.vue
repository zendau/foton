<template>
  <section class="achievements">
    <h1>Наши достижения</h1>
    <div class="achievements__container">
      <div class="achievements__item">
        <span class="material-icons">emoji_events</span>
        <h3 class="achievements__header">Заголовок</h3>
        <p class="achievements__data">100 шт.</p>
        <p>Краткое описание достижения</p>
      </div>
      <div class="achievements__item">
        <span class="material-icons">emoji_events</span>
        <h3 class="achievements__header">Заголовок</h3>
        <p class="achievements__data">100 шт.</p>
        <p>Краткое описание достижения</p></div>
      <div class="achievements__item">
        <span class="material-icons">emoji_events</span>
        <h3 class="achievements__header">Заголовок</h3>
        <p class="achievements__data">100 шт.</p>
        <p>Краткое описание достижения</p> </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "achievements"
}
</script>

<style lang="scss">
.achievements {

  margin: 0;
  width: 100%;
  background-color: #FEF5ED;
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);

  padding-bottom: 100px;

  h1 {
    text-align: center;
    font-size: 30px;
    padding: 40px 0 60px;
  }

  &__container {
    width: 1200px;
    margin: 0px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 15px;
    justify-items: center;
  }

  &__item {
    width: 300px;
    background-color: #fff;
    padding: 10px 5px 25px;
    border-radius: 6px;
    border: 1px solid #dfeeff;


    .material-icons {
      margin-top: 5px;
      text-align: center;
      width: 100%;
      font-size: 60px;
    }

    p {
      text-align: center;
    }
  }

  &__header {
    font-size: 25px;
    margin-bottom: 30px;
    text-align: center;

  }

  &__data {
    font-size: 35px;
    margin-top: 5px;
    margin-bottom: 20px;
  }

}
</style>
