<template>
  <div>
    Interactive
    <component :is="lesson"></component>
  </div>
</template>

<script>
  import InteractivePemdas from '../Pemdas/InteractivePemdas.vue';
  export default {
    data() {
      return {
        lessons: {
          'pemdas': InteractivePemdas
        }
      }
    },
    computed: {
      lesson: function() {
        const routeLesson = this.$route.params.lesson;
        return this.lessons[routeLesson];
      }
    }
  }
</script>

<style scoped>

</style>