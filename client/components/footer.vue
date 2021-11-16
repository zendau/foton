<template>
  <footer class="footer">
    <p class="footer__copyright">© 2021 Фотон.</p>
    <div class="footer__contacts">
      <h2 class="footer__header" >Наши контакты</h2>
      <div class="footer__container">
        <div class="footer__item">
          <span class="material-icons">phone</span>
          <p>+7 (9999) 99-99-99</p>
        </div>
        <div class="footer__item">
          <span class="material-icons">email</span>
          <p>fotonLPR@gmail.com</p>
        </div>
        <div class="footer__item">
          <span class="material-icons">place</span>
          <p>Г. Алчевск, ул. Победы, дом. 7</p>
        </div>
        <div class="footer__item">
          <p>ИНН 3232038930</p>
        </div>
      </div>
      <p></p>
    </div>
    <div class="footer__socials">
      <h2 class="footer__header" >Мы в социальных сетях</h2>
      <div class="footer__social-container">
        <a href="#" class="footer__social"><img src="~static/img/vk.png" alt="vk"></a>
        <a href="#" class="footer__social"><img src="~static/img/fb.png" alt="fb"></a>
        <a href="#" class="footer__social"><img src="~static/img/ok.png" alt="ok"></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footerComponent"
}
</script>

<style scoped lang="scss">
  footer {
    background-color: #f6f6f6;
    display: grid;
    grid-template-columns: 1fr 4fr 2fr;
    grid-column-gap: 15px;
  }

  .footer {
  &__copyright {
     align-self: end;
     justify-self: center;
     margin-bottom: 15px;
   }

  &__contacts {
     justify-content: center;
     margin: 0 70px;
   }


  &__header {
     margin-top: 15px;
     text-align: center;
     font-size: 18px;
     margin-bottom: 10px;
   }

  &__container {
     display: grid;
     grid-template-rows: 1fr 1fr 1fr;
     grid-auto-flow: column;
     justify-items: end;
     align-items: center;
     max-height: 110px;
     margin-bottom: 10px;
   }

  &__item {
     display: flex;
     font-size: 16px;
     margin-bottom: 5px;
     width: 260px;
     margin-right: 15px;

  p {
    margin-left: 5px;
  }
  }

  &__socials {
     margin: 0 15px;
   }

  &__social-container {
     display: flex;
     margin-top: 25px;
     justify-content: center;
   }

  &__social {
     display: block;

     height: 40px;
     width: 40px;

     margin-right: 10px;

  img {
    height: 100%;
    width: 100%;
  }

  }


  }
</style>
