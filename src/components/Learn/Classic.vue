<template>
  <v-container class="container" fluid fill-height>
    <v-row align="center" justify="center" class="biggy" fill-height>
      <v-col>
        <v-row>
          <v-col align="center">
            <transition
              v-on:enter="enterChange"
              v-on:leave="leaveChange"
            >
              <div v-if="!isQuestionChanging">
              {{ currentQuestion.question }}
              </div>
            </transition>
          </v-col>
        </v-row>
        <v-row>
          <v-col align="center">
            {{ this.timer }}
          </v-col>
        </v-row>
        <v-row>
          <v-col align="center">
            <input
              class="input"
              v-model="answer"
              ref="input"
              label="Answer"
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import gsap from "gsap";
  import modules from '../../modules';
  import { getQuality } from '../../helpers/util';
  import sm2 from '../../helpers/sm2';

  export default {
    data() {
      return {
        isQuestionChanging: false,
        questions: [],
        answer: '',
        questionIndex: 0,
        intervalId: null,
        timer: 0,
      }
    },
    computed: {
      currentQuestion() {
        const sorted = this.questions.slice().sort((a, b) => {
          return a.interval - b.interval;
        });
        return sorted[0];
      },
    },
    watch: {
      answer: function(val) {
        console.log('Value is: ', val);
        console.log('Answer is ', this.currentQuestion);
        if (val.toString() === this.currentQuestion.answer.toString()) {
          this.markAnswerCorrect();
        }
      },
      $route: function(to, from) {
        const { lesson } = to.params;
        const { oldLesson } = from.params;
        if ( lesson !== oldLesson ) {
          this.resetUI();
          setTimeout(() => {
            this.questions = modules[lesson].questions();
            this.isQuestionChanging = false;
          }, 490)
        }
      }
    },
    methods: {
      startTimer: function() {
        const id = setInterval(() => {
          this.timer += 1;
        }, 1000);
        this.intervalId = id;
      },
      clearTimer: function() {
        clearInterval(this.intervalId);
        this.intervalId = null;
      },
      resetUI: function() {
          this.answer = '';
          this.timer = 0;
          this.isQuestionChanging = true;
          this.clearTimer();
      },
      markAnswerCorrect: function() {
          let quality = getQuality(this.timer);
          let { interval, repetitions, easeFactor } = sm2(quality, this.currentQuestion.repetitions, this.currentQuestion.easeFactor, this.currentQuestion.interval);

          // adjust question data according to sm2 feedback;

          // clean up
          this.resetUI();
          setTimeout(() => {
            this.currentQuestion.repetitions = repetitions;
            this.currentQuestion.interval = interval;
            this.currentQuestion.easeFactor = easeFactor;

            this.startTimer();
            this.isQuestionChanging = false;
          }, 490)
      },
      enterChange: function(el, done) {
        gsap.fromTo(el, { opacity: 0 }, { duration: .5, opacity: 1, onComplete: () => { done() } });
      },
      leaveChange: function(el, done) {
        gsap.to(el, { duration: .5, opacity: 0, onComplete: () => { done() } });
      }
    },
    beforeMount() {
      this.questions = modules[this.$route.params.lesson].questions();
    },
    mounted() {
      this.startTimer();
      this.$refs.input.focus();
      console.log('Questions: ', this.questions);
    }
  }
</script>

<style scoped>

.input{
  background-color: #fff;
  border: 1px solid black;
}
</style>