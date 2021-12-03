<template>
  <div>
    <MainSection :content="content[0]"/>
    <About :content="content[1]"/>
    <Achievements/>
  </div>
</template>

<script>
export default {
  layout: "main",
  data() {
    return {
      content: []
    }
  },
  async fetch() {
    this.content = await this.$axios.$get('api/admin/sections/all')
    console.log(this.content)
  }
}
</script>
