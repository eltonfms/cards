<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">#app { }</style>

<!--
<div id="app">
  <Details />
</div>

<div id="app">
  <router-view>
    <Details />
    <Styleguide />
  </router-view>
  <nav>
    <router-link to="/">Ver detalhes</router-link>
    <router-link to="/styleguide">Styleguide</router-link>
  </nav>
</div>

<script>
import Details from './components/Details.vue';
import Styleguide from './components/Styleguide.vue';
</script>
-->