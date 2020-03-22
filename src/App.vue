<template>
  <div id="app">
    <Pemdas />
  </div>
</template>

<script>
import Pemdas from './components/Pemdas/Pemdas.vue'

export default {
  name: 'App',
  components: {
    Pemdas
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
