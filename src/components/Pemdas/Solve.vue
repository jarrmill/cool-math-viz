<template>
  <v-container fluid class="main">
    <v-row :align="center" :justify="center">
      <v-col cols="12">
        <v-row>
          <v-col>
          {{ this.currentQuestion.q }}
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="answer" label="Your Answer Here"></v-text-field>
            <v-btn @click="submit">Submit</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p>{{ this.message }}</p>
            <p>Timer: {{ this.timer }}</p>
            <p>Score: {{ this.score }}</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import modules from '../../modules';
  export default {
    data() {
      return {
        questions: modules.pemdas.questions(),
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

<style scoped>
.biggey{
  background-color: #fee;
}
.main{
  background-color: blue;
  height: 100vh;
}
</style>