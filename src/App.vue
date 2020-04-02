<template>
  <div id="app">
    <Pemdas />
    <InteractivePemdas />
  </div>
</template>

<script>
import Pemdas from './components/Pemdas/Pemdas.vue'
import InteractivePemdas from './components/Pemdas/InteractivePemdas'
export default {
  name: 'App',
  components: {
    Pemdas,
    InteractivePemdas
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
