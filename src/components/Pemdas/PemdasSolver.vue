<template>
  <div>
    Hello from Pemdas!
    <input v-model="input" placeholder="enter an equation"/>
    <button v-on:click="save">Enter</button>
    <p>Result: {{ answer }}</p>
    <transition-group
      name="list"
      tag="div"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
    >
      <div v-for="(step, index) in steps" :key="step" :data-index="index">
        {{ step }}
      </div>
    </transition-group>
  </div>
</template>

<script>
  import Equation from './helpers';
  export default {
    data() {
      return {
        input: '',
        current: ''
      }
    },
    computed: {
      equation: function() {
        return new Equation(this.current);
      },
      answer: function() {
        return this.equation.solution;
      },
      steps: function() {
        return this.equation.stepsTaken;
      }
    },
    methods: {
      save: function() {
        this.current = this.input
      },
      beforeEnter: function (el) {
        el.style.opacity = 0;
        el.style.height = 0;
      },
      enter: function (el) {
        var delay = el.dataset.index * 150
        setTimeout(function () {
          el.style.opacity = 1;
          el.style.height = "1.6em"
        }, delay)
      },
      leave: function (el) {
        var delay = el.dataset.index * 150
        setTimeout(function () {
          el.style.opacity = 0;
          el.style.height = 0
        }, delay)
      }
    }
  }
</script>

<style scoped>

</style>