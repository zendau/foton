<template>
  <b-modal title="Сообщение" id="modalMessage">
    <p class="my-4">{{ message }}</p>
  </b-modal>
</template>

<script>
export default {
  name: "modalMessage",
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>
