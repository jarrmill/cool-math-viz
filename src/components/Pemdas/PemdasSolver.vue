<template>
  <div>
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
      <div v-for="(step, index) in steps" :key="step" :data-index="index" class="step-container">
        {{ step }}
      </div>
    </transition-group>
  </div>
</template>

<script>
  import Equation from './helpers';
  import Velocity from 'velocity-animate';
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
      },
      stepsLength: function() {
        return this.equation.stepsTaken.length;
      }
    },
    methods: {
      save: function() {
        this.current = this.input
      },
      beforeEnter: function (el) {
        if (el.dataset.index == this.stepsLength - 1) {
          el.style.color = "gold";
        }
        el.style.opacity = 0;
        el.style.height = 0;
      },
      enter: function (el, done) {
        // The first timeout is a buffer for all elements to leave the array
        // the second is to stagger the entrace of each individual list
        setTimeout(() => {
          var delay = el.dataset.index * 300
          setTimeout(function () {
            Velocity(
              el,
              { opacity: 1, height: '1.6em' },
              { complete: done }
   
            )
          }, delay)
        }, this.stepsLength * 50 + 250);
      },
      leave: function (el, done) {
        var delay = el.dataset.index * 50
        setTimeout(function () {
        Velocity(
          el,
          { opacity: 0, height: 0 },
          { complete: done }
          )
        }, delay)
      }
    }
  }
</script>

<style scoped>

</style>