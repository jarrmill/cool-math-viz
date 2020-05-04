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
        const operators = new Set(['+', '-', '*', '/', '(', ')']);
        const results = [];
        const eq = this.equation.replace(' ', '');
        const split = eq.split('');
        split.forEach((char, i) => {
          let len = results.length;
          if (len !== 0 && !operators.has(char) && !operators.has(this.equation[i - 1])) {
            results[len - 1] = results[len - 1] + char;
          } else {
            results.push(char);
            len += 1;
          }
        })
        return results;
      },
      isActive() {
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
        const selectedEQ = new Equation(this.splitEquation.slice(start, end + 1).join(''));
        return selectedEQ
      }
    },
    methods: {
      reset: function (){
        this.equation = this.initialEquation
      },
      handleHover: function() {
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
        const oldEQ = this.splitEquation;
        const insertEQ = this.selectedEquation.solution.toString();
        const start = this.chars[0];
        const end = this.chars[this.chars.length - 1];
        const newEQ = oldEQ.slice(0, start)
                           .concat(insertEQ.split(''))
                           .concat(oldEQ.slice(end + 1))
                           .join('');
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