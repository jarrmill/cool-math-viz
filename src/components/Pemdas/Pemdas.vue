<template>
  <div>
    Hello from Pemdas!
    <input v-model="equation" placeholder="enter an equation"/>
    <p>Result: {{ answer }}</p>
  </div>
</template>

<script>
  import Equation from './helpers';
  export default {
    data() {
      return {
        equation: ''
      }
    },
    computed: {
      answer: function() {
        const EQ = new Equation(this.equation);
        return EQ.solution;
      }
    }
  }
</script>

<style scoped>

</style>