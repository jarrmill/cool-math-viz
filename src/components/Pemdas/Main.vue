<template>
  <div id="app">
    <PemdasSolver />
    <InteractivePemdas />
  </div>
</template>

<script>
import PemdasSolver from './PemdasSolver.vue'
import InteractivePemdas from './InteractivePemdas.vue'
export default {
  name: 'App',
  components: {
    PemdasSolver,
    InteractivePemdas
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
