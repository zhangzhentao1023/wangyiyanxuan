<template>
  <div id="app">
    <router-view/>
    <Footer v-if="$route.meta.Footer"/>
  </div>
</template>

<script>
import Footer from './components/Footer/Footer'
export default {
  name: 'app',
  components: {
    Footer
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    width 100%
    height 100%
</style>
