<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Styleguide msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Styleguide from './components/Styleguide.vue'

export default {
  name: 'App',
  components: {
    Styleguide
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
