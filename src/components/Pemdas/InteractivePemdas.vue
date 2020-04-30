<template>
  <div>
    <div class="equation">
      <span
        class="eq-char" 
        v-for="(char,i) in splitEquation"
        :key="i"
        :class="{ active: activeChars.has(i)}"
        @click="handleClick($event, i)"
        @mouseover="handleHover($event, i)"
        >
        {{ char }}
      </span>
    </div>
    <br>
    <button
      @click="handleSubmit"
      :disabled="!selectedEquation.isValid"
    >
      Submit
    </button>
    <button
      @click="reset"
    >
      Reset
    </button>
  </div>
</template>

<script>
  import { range } from "lodash";
  import Equation from './helpers';
  export default {
    data() {
      return {
        equation: this.initialEquation || "6*2/(1+1)",
        activeChars: new Set()
      }
    },
    props: [
      "initialEquation"
    ],
    computed: {
      splitEquation: function() {
        const eq = this.equation.replace(' ', '');
        return eq.split('');
      },
      isActive(e) {
        console.log('Hello!', e);
        return {
          active: true
        }
      },
      chars() {
        return Array.from(this.activeChars);
      },
      selectedEquation() {
        const start = this.chars[0];
        const end = this.chars[this.chars.length - 1]
        const selectedEQ = new Equation(this.equation.slice(start, end + 1));
        return selectedEQ
      }
    },
    methods: {
      reset: function (){
        this.equation = this.initialEquation
      },
      handleHover: function(e, i) {
        console.log('Hover e: ', i);
      },
      handleClick: function(e, i) {
        // because Sets aren't reactive, we have to hack a work around
        // and set activeChars to a new set every time.
        if (this.activeChars.size > 1) {
          const newSet = new Set();
          newSet.add(i);
          this.activeChars = newSet;
        }
        else if (this.activeChars.size === 1) {
          const iterator = this.activeChars.entries();
          const firstVal = iterator.next().value[0];
          const valRange = (firstVal < i) ? range(firstVal, i + 1) : range(i, firstVal + 1);
          this.activeChars = new Set(valRange);
        }
        else {
          this.activeChars.add(i);
          this.activeChars = new Set(this.activeChars);
        }
      },
      handleSubmit: function() {
        const oldEQ = this.equation;
        const insertEQ = this.selectedEquation.solution;
        const start = this.chars[0];
        const end = this.chars[this.chars.length - 1];
        const newEQ = oldEQ.slice(0, start) + insertEQ + oldEQ.slice(end + 1);
        this.equation = newEQ;
        this.activeChars = new Set();
      }
    }
  }
</script>

<style scoped>
.equation{
  display: "flex";
}

.eq-char{
  background-color: #eee;
  padding: 5px;
}
.eq-char:hover{
  background-color: #ddd;
}

.active{
  background-color: lightblue;
}
</style>