<template>
  <v-container fill-height>
    <v-row>
      <v-col>
        <v-row>
          Banner
        </v-row>
        <v-row>
          {{ lesson.name }}
        </v-row>
        <v-row>
          <ul>
            <li v-if="lesson.classic">
              <router-link :to='classicRoute'>Classic Lesson</router-link>
            </li>
            <li v-if="lesson.interactive">
              <router-link :to='interactiveRoute'>Interactive</router-link>
            </li>
            <li v-if="lesson.lesson">
              <router-link :to='lessonRoute'>Lesson</router-link>
            </li>
          </ul>
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
        lessonKey: this.$route.params.lesson,
        lesson: {},
      }
    },
    computed: {
      classicRoute() {
        return `${this.lessonKey}/classic`
      },
      interactiveRoute() {
        return `${this.lessonKey}/interactive`
      },
      lessonRoute() {
        return `${this.lessonKey}/lesson`
      }
    },
    beforeMount() {
      this.lesson = modules[this.lessonKey];
      console.log('Lesson: ', this.lesson);
      console.log('Lesson Options: ', modules[this.$route.params.lesson]);
    }
  }
</script>

<style lang="scss" scoped>

</style>