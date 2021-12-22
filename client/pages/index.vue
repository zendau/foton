<template>
  <div>
    <MainSection  :content="this.content[0]"/>
    <About :content="this.content[1]"/>
    <Achievements/>
  </div>
</template>

<script>
export default {
  layout: "main",
  data() {
    this.content = []
  },
  async asyncData({ params, $axios  }) {


    const content = await $axios.$get('api/admin/sections/all')

    console.log(content)

    return { content }
  }
}
</script>
