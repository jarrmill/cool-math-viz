<template>
  <div>
    Hello from Pemdas!
    <input v-model="equation" placeholder="enter an equation"/>
    <p>Result: {{ answer }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        equation: ''
      }
    },
    computed: {
      answer: function() {
        console.log(this)
        return this.equation;
      }
    }
  }
</script>

<style scoped>

</style>