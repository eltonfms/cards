<template>
  <div id="app">
    <Styleguide msg="Cards Styleguide"/>
  </div>
</template>

<script>
import Styleguide from './components/Styleguide.vue';

export default {
  name: 'App',
  components: {
    Styleguide
  }
}
</script>

<style lang="scss">
#app { }
</style>