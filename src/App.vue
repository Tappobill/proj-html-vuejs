<template>
  <div id="app">
    <HeadComp />
    <MainComp />
    <FootComp />
  </div>
</template>

<script>
import HeadComp from './components/HeadComp.vue'
import MainComp from './components/MainComp.vue'
import FootComp from './components/FootComp.vue'

export default {
  name: 'App',
  components: {
    HeadComp,
    MainComp,
    FootComp
  },
}
</script>

<style lang="scss" scoped>

</style>
