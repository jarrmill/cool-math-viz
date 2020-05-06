<template>
  <div>
    {{ this.currentQuestion.q }}
    <input v-model="answer" placeholder="Your Answer Here">
    <button @click="submit">Submit</button>
    <p>{{ this.message }}</p>
    <p>Timer: {{ this.timer }}</p>
    <p>Score: {{ this.score }}</p>
  </div>
</template>

<script>
  import questions from '../../assets/questions/pemdas';
  export default {
    data() {
      return {
        questions,
        index: 0,
        answer: '',
        score: 0,
        timer: 0,
        message: '',
        intervalId: null,
      }
    },
    computed: {
      currentQuestion: function() {
        return this.questions[this.index]
      },
    },
    methods: {
      submit: function() {
        if (this.answer !== this.currentQuestion.a) {
          this.message = 'Wrong! Keep Trying';
        } else {
          this.message = '';
          this.score += this.timer - this.currentQuestion.weight;
          this.timer = 0;
          this.answer = '';
          this.index += 1;
          this.clearTimer();
          this.startTimer();
        }
      },
      startTimer: function() {
        const id = setInterval(() => {
          this.timer += 1;
        }, 1000);
        this.intervalId = id;
      },
      clearTimer: function() {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    },
    mounted() {
      this.startTimer();
    }
  }
</script>

<style lang="scss" scoped>

</style>